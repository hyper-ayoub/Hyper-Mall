*** Settings ***
Library     SeleniumLibrary
Library     XML


*** Variables ***
${browser}      Edge
${url}          http://localhost:3000/#Products


*** Test Cases ***
Limited_time
    LaunchBrowser
    Limited_time


*** Keywords ***
LaunchBrowser
    Open Browser    ${url}    ${browser}
    Maximize Browser Window
    Sleep    6s

Limited_time
    # Click on the first product
    # testing one product => all products in same div div[i] all tested
    Click Element    //body/div[@id='root']/div[8]/div[1]/img[1]
    Sleep    2s
    Click Element    //body/div[@id='root']/div[9]/div[1]/a[1]/i[1]
    Sleep    5s
    Go Back
