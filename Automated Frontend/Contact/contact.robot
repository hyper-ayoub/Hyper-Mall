*** Settings ***
Library     SeleniumLibrary
Library     XML


*** Variables ***
${browser}      Edge
${url}          http://localhost:3000/contact.html
${name}         ayoub_test
${email}        testing@gmail.com
${message}      Hello ayoub
${gender}       You gender please


*** Test Cases ***
Contact
    LunchBrowser
    Contact


*** Keywords ***
LunchBrowser
    Open Browser    ${url}    ${browser}
    Maximize Browser Window
    Sleep    6s

Contact
    Input Text    //input[@placeholder='Your name']    ${name}
    Sleep    4s
    Input Text    //input[@placeholder='Your Email']    ${email}
    Sleep    4s
    Input Text    //input[@placeholder='Your gender']    ${gender}
    Sleep    4s
    Input Text    //textarea[@placeholder='YOUR message']    ${message}
    Sleep    6s
    Click Button    //button[@type='submit']
    Sleep    10s
