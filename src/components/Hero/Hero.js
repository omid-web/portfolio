import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        This is a collection of my past projects and an overview of my skillsets.
      </SectionText>
      {/* <Button onClick={() => window.location = 'https://google.ca'}>Learn More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;