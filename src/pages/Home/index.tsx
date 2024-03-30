import ReserveSection from "./ReserveSection/reserveSectionContainer";
import SecondSection from "./SecondSection/secondSectionContainer";
import React from "react";

// import "./styles.scss"
const Home: React.FC = () => {
    return<div>
    <ReserveSection/>
        <SecondSection/>
    </div>
};
export default Home;