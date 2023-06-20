import type {NextPage} from 'next'
import Wrapper from "../components/wrapper";
import Hero from '../components/hero';
import React from "react";
import Spacer from "../components/utils/spacer";
import AboutMe from "../components/about_me";
import Experience from "../components/experience";

const Home: NextPage = () => {
    const meta = {}

    return (
        <Wrapper customMeta={meta}>
            <Hero/>
            <Spacer height={250}/>
            <AboutMe/>
            <Spacer height={250}/>
            <Experience/>
        </Wrapper>
    )
}

export default Home
