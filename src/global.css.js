import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600;700&display=swap');
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        font-family: 'Source Code Pro', monospace;
        background: black;
        color: white;
    }

    h1{
        font-size: 2.25rem;
    }

    li{
        font-size: 1.5rem;
    }

    button{
        padding: 1rem 2rem;
        background: transparent;
        border: 2px solid #34D399;
        color: white;
        font-size: 1.25rem;
        font-weight: 500;
        margin: 2rem 0;
        cursor: pointer;
        transition: all 0.3s ease;
    &:hover{
        background-color: #34D399;
        color: black;
    }
    
    }
`;
