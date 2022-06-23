import React from "react";
import styled from "styled-components";

const Warning = () => {
    return (
        <Warn>
            <p>
                This website is intentionaly created in low level style | See my
                <a href="/projects"> other projects</a> to see modern
                applications
            </p>
        </Warn>
    );
};

const Warn = styled.div`
    height: 10vh;
    width: 70%;
    margin: auto;
    text-align: center;

    a {
        text-decoration: none;
        color: #34d399;
    }
`;

export default Warning;
