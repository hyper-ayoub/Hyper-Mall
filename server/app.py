from flask import Flask, request, abort, jsonify, session
from flask_bcrypt import Bcrypt
from config import ApplicationConfig
from flask_session import Session
from models import db, User
from flask_cors import CORS

# Flask application initialization
app = Flask(__name__)
app.config.from_object(ApplicationConfig)
bcrypt = Bcrypt(app)
server_session = Session(app)
CORS(app)

# Database creation
db.init_app(app)
with app.app_context():
    db.create_all()

# Route for user registration


@app.route("/register", methods=["POST"])
def register_user():
    full_name = request.json["full_name"]  # Note the field name is full_name
    email = request.json["email"]
    password = request.json["password"]

    # Check if the user already exists
    user_exists = User.query.filter_by(email=email).first() is not None
    if user_exists:
        return jsonify({"error": "User already exists"}), 409

    # Hash the password
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    # Create a new user instance
    new_user = User(full_name=full_name, email=email,
                    password=hashed_password)  # Using full_name here

    # Add the new user to the database
    db.session.add(new_user)
    db.session.commit()

    # Return the user's ID, full_name, and email
    return jsonify({
        "id": new_user.id,
        "full_name": new_user.full_name,
        "email": new_user.email
    }), 201


# Route for user login


@app.route("/login", methods=["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]
    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error": "Unauthorized"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401

    session["user_id"] = user.id

    return jsonify({
        "id": user.id,
        "email": user.email
    })


# Run the application
if __name__ == "__main__":
    app.run(debug=True)
