import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:647-778-1740">647-778-1740</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@omidjan.ca">contact@omidjan.ca</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/omid-jan" target="_blank" rel="noopener noreferrer">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/in/omidjan" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/omidjan__" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/omidjan__" target="_blank" rel="noopener noreferrer">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;