import React from 'react'

// Styled components
import { Container } from '../styles/LayoutStyles'
import {
  HeroSection,
  HeroInner,
  HeroText,
  HeroImage,
} from '../styles/HeroStyles'

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroInner>
          <HeroText></HeroText>
          <HeroImage></HeroImage>
        </HeroInner>
      </Container>
    </HeroSection>
  )
}

export default Hero
