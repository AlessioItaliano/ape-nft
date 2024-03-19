import React from 'react';

import Header from 'components/Header';
import Section from 'components/Section';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import AboutUs from 'components/AboutUs';
import Container from 'components/Container';
import Banner from 'components/Banner';
import MindMap from 'components/MindMap';
import Collection from 'components/Colection';
import Mint from 'components/Mint';
import Faq from 'components/Faq';

const App = () => {
  return (
    <>
      <Header />
      <Hero />

      <Section id="about">
        <Container>
          <AboutUs />
        </Container>
        <Banner />
      </Section>

      <Section id="m-map">
        <Container>
          <MindMap />
        </Container>
      </Section>

      <Section id="faq">
        <Container>
          <Faq />
        </Container>
      </Section>

      <Section id="arts">
        <Container>
          <Collection />
        </Container>
      </Section>

      <Section id="mint">
        <Container>
          <Mint />
        </Container>
      </Section>
      <Footer />
    </>
  );
};

export default App;
