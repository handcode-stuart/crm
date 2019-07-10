import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        transition: width 250ms ease-in-out,height 250ms ease-in-out, padding 250ms ease-in-out, margin 250ms ease-in-out, border-radius 250ms ease-in-out;
    }

    html, body {
        margin: 0;
        padding: 0;
        /* font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; */
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 300;
    }
`;
