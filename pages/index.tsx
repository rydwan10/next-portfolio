import type { NextPage } from 'next'
import Wrapper from "../components/wrapper";
import Hero from '../components/hero';
import React from "react";
import Spacer from "../components/utils/spacer";
import AboutMe from "../components/about_me";
import Experience from "../components/experience";
import TimelineTest from '../components/utils/custom_timeline';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '../components/footer';

const Home: NextPage = () => {
    const meta = {}

    return (
        <Wrapper customMeta={meta}>
            <Hero />
            {/* <Spacer height={330} /> */}
            <AboutMe />
            <Spacer height={250} />
            <Experience />
            <Spacer height={250} />
            <Projects />
            <Spacer height={250} />
            <Contact />
            <Spacer height={250} />
            <Footer />
        </Wrapper>
    )
}

export default Home
