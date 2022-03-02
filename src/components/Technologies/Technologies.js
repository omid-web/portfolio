import React from 'react';
import { DiFirebase, DiReact, DiAngularSimple, DiHtml5, DiCss3, DiZend, DiNodejsSmall, DiMysql, DiMongodb, DiHeroku, DiHaskell, DiAndroid } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, RowIcons } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies, mainly in the web development world. From front-end to back-end.
    </SectionText>
    <List>
      <ListItem>
        <RowIcons>
          {/* <DiHtml5 size="3rem" />
          <DiCss3 size="3rem" /> */}
          <DiReact size="3rem" />
          <DiAngularSimple size="3rem" />
        </RowIcons>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Redux, React native, Angular, MUI(Material-UI)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <RowIcons>
          <DiFirebase size="3rem" />
          <DiNodejsSmall size="3rem" />
          {/* <DiMysql size="3rem" />
          <DiMongodb size="3rem" /> */}
        </RowIcons>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Databases (Mysql, mongoDB)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <RowIcons>
          <DiAndroid size="3rem" />
          <DiHaskell size="3rem" />
          {/* <DiHeroku size="3rem" /> */}
        </RowIcons>
        <ListContainer>
          <ListTitle>Developer Tools</ListTitle>
          <ListParagraph>
            Postman, VS Code, Eclipse, Android Studio, AWS, Heroku, Chai, Mocha
          </ListParagraph>
        </ListContainer>
      </ListItem>
{/*       <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
    </List>
  </Section>
);

export default Technologies;
