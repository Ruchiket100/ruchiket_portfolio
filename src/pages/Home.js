import React from "react";
//  compoenents
import HeroSection from "../components/HeroSection";
import TechStack from "../components/TechStack";
import Warning from "../components/warning";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Warning />
            <TechStack />
        </div>
    );
};

export default Home;
