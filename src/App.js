import React from 'react';
import { Blog, Footer, Header, WhatGPT3, Features, Possibility, Container } from './containers'
import { CTA, Brand, Navbar } from './components'
import { StyledApp } from './App.styled'

function App() {
  return( 
    <StyledApp>
      <Container>
        <Navbar />
        <Header />
      </Container>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </StyledApp>
    
  )
}

export default App;
