import React from 'react';

import Header from 'components/Header';
import Section from 'components/Section';
import Footer from 'components/Footer';
import Hero from 'components/Hero';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Section>
        <p>Ciao</p>
      </Section>
      <Footer />
    </>
  );
};

export default App;
