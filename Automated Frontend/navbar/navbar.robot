*** Settings ***
Library  SeleniumLibrary
Library  XML

*** Variables ***
${browser}   Edge
${url}  http://localhost:3000/


*** Test Cases ***
navbar
      LunchBrowser
      navbar
*** Keywords ***
LunchBrowser
      Open Browser    ${url}    ${browser}
      Maximize Browser Window
      Sleep    6s

navbar
      Click Link    //a[contains(text(),'Home🏠')]
      Sleep   4s
      Click Link    //a[contains(text(),'Products🏷️')]
      Sleep   4s
      Click Link    //a[contains(text(),'About🤷‍♂️')]
      Sleep   6s
