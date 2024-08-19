*** Settings ***
Library     SeleniumLibrary
Library     XML


*** Variables ***
${browser}      Edge
${url}          http://localhost:3000/#Home


*** Test Cases ***
Social_media
    LaunchBrowser
    Social_media


*** Keywords ***
LaunchBrowser
    Open Browser    ${url}    ${browser}
    Maximize Browser Window
    Sleep    6s

Social_media
# testing one elemnt in same div => all elements have been tested
    Click Element    //div[@class='container p-4 pb-0']//a[1]
    Sleep    2s
    Go Back
