*** Settings ***
Library     SeleniumLibrary
Library     XML


*** Variables ***
${browser}      Edge
${url}         http://localhost:3000/#Products


*** Test Cases ***
Products
    LaunchBrowser
    Products


*** Keywords ***
LaunchBrowser
    Open Browser    ${url}    ${browser}
    Maximize Browser Window
    Sleep    6s

Products
    # Click on the first product
    # testing one product => all products in same div div[i] all tested
    Click Element    //div[@id='Products']//img
    Sleep    1s
    Click Element   //body/div[@id='root']/div[7]/div[4]/a[1]/i[1]
    Sleep    5s
    Go Back
