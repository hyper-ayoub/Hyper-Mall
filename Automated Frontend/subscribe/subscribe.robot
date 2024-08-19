*** Settings ***
Library     SeleniumLibrary
Library     XML


*** Variables ***
${browser}      Edge
${url}          http://localhost:3000/#Home
${email}        testing@gmail.com


*** Test Cases ***
Subscribe
    LaunchBrowser
    Subscribe


*** Keywords ***
LaunchBrowser
    Open Browser    ${url}    ${browser}
    Maximize Browser Window
    Sleep    6s

Subscribe
    Input Text    //input[@id='form5Example2']    ${email}
    Sleep    3s
    Click Button    //button[@role='button']
    Sleep    6s
    Go Back
