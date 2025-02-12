import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import TechStack from '../components/TechStack';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Portfolio | Front-End Developer</title>
        <meta name="description" content="Portfolio of a Front-End React & React Native Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <CallToAction />
        <Footer />
      </main>
    </>
  );
};

export default Home;
