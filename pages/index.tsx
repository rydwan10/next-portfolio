import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Wrapper from "../components/wrapper";
import Hero from '../components/hero';
import GradientBlob from '../components/gradient_blob';

const Home: NextPage = () => {
  const meta = {

  }

  return (
    <Wrapper customMeta={meta}>
      <Hero />
    </Wrapper>
  )
}

export default Home
