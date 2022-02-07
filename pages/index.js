import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavbarComponent from "../components/navbar"
import HeroSection from "../components/heroSection"
import StatsRibbon from "../components/statsRibbon"
import Services from "../components/services"
import AboutSection from "../components/aboutSection"
import LogoSection from "../components/logoSection"
import PortfolioSection from "../components/portfolioSection"
import TestamonialsSection from "../components/testamonials"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pasindu Dineth Peiris</title>
        <meta name="description" content="Frontend developer with can do atitude" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sedgwick+Ave&display=swap" rel="stylesheet"/>       </Head>
      <div className={styles.mainBackground}>
        <NavbarComponent/>
        <HeroSection/>
      </div>
      {/* <StatsRibbon/> */}
      <Services/>
      <div className={styles.aboutWrapper}>
      <AboutSection/>
      </div>
      {/* <LogoSection/> */}
      <PortfolioSection/>
      <TestamonialsSection/>
      <Footer/>
    </div>
  )
}
