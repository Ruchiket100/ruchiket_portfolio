import React from "react";
import styled from "styled-components";
import TypeAnimation from "react-type-animation";
import HomeArt from "../assets/Home-art.png";

const HeroSection = () => {
    return (
        <HeroDiv>
            <Description className="home-desc">
                <Heading>
                    <TypeAnimation
                        sequence={[`👋 Hey, I'm Ruchiket`]}
                        repeat={"no"}
                        cursor={true}
                        wrapper="h1"
                    />
                </Heading>
                <div className="list-div">
                    <li>Self taught Frontend Developer</li>
                    <li>Write blogs to share thaughts</li>
                    <li>Draw Sketches as a Hobby</li>
                </div>
                <button className="show-projects">_Show Projects</button>
            </Description>
            <Image>
                <img src={HomeArt} alt="Home-art" />
            </Image>
        </HeroDiv>
    );
};
const HeroDiv = styled.div`
    display: flex;
    flex-direction: row;
    height: 90vh;
    width: 90%;
    margin: auto;
    align-items: center;
    justify-content: center;
`;

const Description = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    .list-div {
        margin-top: 2rem;
    }

    li {
        line-height: 140%;
    }
`;

const Heading = styled.div`
    color: #34d399;
    text-align: start;
`;

const Image = styled.div`
    flex: 1;
    overflow: hidden;

    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

export default HeroSection;
