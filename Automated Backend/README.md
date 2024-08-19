# Robot Framework Setup Guide

This guide will walk you through the steps required to install Robot Framework, Selenium, and ChromeDriver.

## Prerequisites

Before you start, ensure that Python is installed on your system. If not, follow the steps below to install Python.

### 1. Install Python

1. Download Python from the official website: [Download Python](https://www.python.org/downloads/).
2. Run the installer and ensure that you check the option to "Add Python to PATH" during installation.

### 2. Install ChromeDriver

1. Download ChromeDriver from the official website: [Download ChromeDriver](https://sites.google.com/chromium.org/driver/downloads?authuser=0).
2. Extract the downloaded file.
3. Add the ChromeDriver binary to your system's PATH environment variable.

   **Steps to add ChromeDriver to PATH (Windows):**
   1. Open the Start Menu and search for "Environment Variables."
   2. Click on "Edit the system environment variables."
   3. In the System Properties window, click on the "Environment Variables" button.
   4. In the Environment Variables window, find the `Path` variable in the "System variables" section, and click "Edit."
   5. Click "New" and add the path to the ChromeDriver executable.
   6. Click "OK" to close all windows.

## Installation

Open your terminal or command prompt and execute the following commands to install the necessary packages:

### Commands

```bash
python -m pip install --upgrade pip
pip install selenium
pip install robotframework
pip install robotframework-seleniumlibrary


