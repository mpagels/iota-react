import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    background-color:  #F6F8FC;
    color: #000000;
    font-family: 'Montserrat', sans-serif;
}

:root {
    --white-background: #fff;
    --lightgrey-background: #00000029;
    --black-background: #1C1C20; 
    --black-font: #222222; 
    --box-shadow: 
    0 1.4px 3.4px rgba(0, 0, 0, 0.011),
    0 3.6px 8.7px rgba(0, 0, 0, -0.002),
    0 7.3px 17.7px rgba(0, 0, 0, 0.015),
    0 15px 36.5px rgba(0, 0, 0, 0.07),
    0 41px 100px rgba(0, 0, 0, 0.17);
    --inner-box-shadow: 0 0.3px 2.7px rgba(0, 0, 0, 0.02),
    0 0.8px 6.6px rgba(0, 0, 0, 0.028), 0 1.5px 12.4px rgba(0, 0, 0, 0.035),
    0 2.7px 22.1px rgba(0, 0, 0, 0.042), 0 5px 41.4px rgba(0, 0, 0, 0.05),
    0 12px 99px rgba(0, 0, 0, 0.07); 
}`;
