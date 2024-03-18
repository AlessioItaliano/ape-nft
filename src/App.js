import React from 'react';

import Header from 'components/Header';
import Section from 'components/Section';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import AboutUs from 'components/AboutUs';
import Container from 'components/Container';
import Banner from 'components/Banner';
import MindMap from 'components/MindMap';
import Collection from 'components/Colection/Collection';
import Mint from 'components/Mint';

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
        <p>about</p>
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

// <s.Link href="#mint">Mint</s.Link>
// <s.Link href="#arts">Arts</s.Link>
// <s.Link href="#faq">Faq</s.Link>
// <s.Link href="#m-map">M-Map</s.Link>
// <s.Link href="#about">About</s.Link>
