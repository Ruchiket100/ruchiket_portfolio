import React from "react";
import styled from "styled-components";
// components
import Nav from "./components/Nav";
// Pages
import Home from "./pages/Home";

const App = () => {
    return (
        <AppDiv>
            <Nav />
            <Home />
        </AppDiv>
    );
};

const AppDiv = styled.div`
    margin: 0 auto;
`;

export default App;
