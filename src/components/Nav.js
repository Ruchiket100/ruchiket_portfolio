import React from "react";
import styled from "styled-components";

const Nav = () => {
    return (
        <Navbar className="nav-bar">
            <li>_Home</li>
            <li>_MyProjects</li>
            <li>_Contact</li>
        </Navbar>
    );
};

const Navbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    background-color: black;
    color: white;

    li {
        list-style-type: none;
        font-weight: 400;
        cursor: pointer;
        margin-left: 6%;
    }

    li:first-of-type {
        margin-left: 0;
    }
`;

export default Nav;
