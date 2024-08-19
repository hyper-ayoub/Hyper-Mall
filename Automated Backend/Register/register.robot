*** Settings ***
Library     SeleniumLibrary
Library     XML


*** Variables ***
${browser}      Edge
${url}          http://localhost:5050/register
${Full Name}    ayoub_testing
${email}        testingdd@example.com
${password}     testing


*** Test Cases ***
regsiter_page
    LunchBrowser
    register


*** Keywords ***
LunchBrowser
    Open Browser    ${url}    ${browser}
    Maximize Browser Window
    Sleep    6s

Register
    Input Text    //input[@id='formFullName']    ${Full Name}
    Sleep    2s
    Input Text    //input[@id='formEmail']    ${email}
    Sleep    2s
    Input Password    //input[@id='formPassword']    ${password}
    Sleep    2s
    Click Element    //label[@for='formRememberMe']
    Click Button    //button[@type='button']
    Sleep    6s
