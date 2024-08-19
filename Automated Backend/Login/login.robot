*** Settings ***
Library     SeleniumLibrary
Library     XML


*** Variables ***
${browser}      Edge
${url}          http://localhost:5050/login
${email}        ayoub_testing
${password}     testing


*** Test Cases ***
Login page
    LunchBrowser
    Login


*** Keywords ***
LunchBrowser
    Open Browser    ${url}    ${browser}
    Maximize Browser Window
    Sleep    6s

login
    Input Text    //input[@id='form3Example3']    ${email}
    Sleep    2s
    Input Password    //input[@id='form3Example4']    ${password}
    Sleep    2s
    Click Element    //label[@for='form2Example3']
    Sleep    2s
    Click Button    //button[@type='button']
    Sleep    6s
