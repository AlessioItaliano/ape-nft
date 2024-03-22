import React from 'react';

import Header from 'components/Header';
import Hero from 'components/Hero';

import Section from 'components/Section';
import Container from 'components/Container';

import AboutUs from 'components/AboutUs';
import MindMap from 'components/MindMap';
import Banner from 'components/Banner';
import Faq from 'components/Faq';
import Mint from 'components/Mint';
import Collection from 'components/Collection';

import Footer from 'components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Hero />

      <Section anhorId="about">
        <Container>
          <AboutUs />
        </Container>
        <Banner />
      </Section>

      <Section anhorId="m-map">
        <Container>
          <MindMap />
        </Container>
      </Section>

      <Section anhorId="faq">
        <Container>
          <Faq />
        </Container>
      </Section>

      <Section anhorId="arts">
        <Container>
          <Collection />
        </Container>
      </Section>

      <Section anhorId="mint">
        <Container>
          <Mint />
        </Container>
      </Section>
      <Footer />
    </>
  );
};

export default App;
