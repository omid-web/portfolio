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
      Most Technologies I worked with have been in web dev.
    </SectionText>
    <List>
      <ListItem>
        <RowIcons>
          <DiHtml5 size="3rem" />
          <DiCss3 size="3rem" />
          <DiReact size="3rem" />
          <DiAngularSimple size="3rem" />
        </RowIcons>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js/Redux, React native, Vue/Vuex, Angular
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <RowIcons>
          <DiNodejsSmall size="3rem" />
        </RowIcons>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js, ASP.Net Core
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      
      <ListItem>
        <RowIcons>
          <DiFirebase size="3rem" />
          <DiMysql size="3rem" />
          <DiMongodb size="3rem" />
          <DiZend size="3rem" />
        </RowIcons>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Mysql, mongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <RowIcons>
          <DiAndroid size="3rem" />
        </RowIcons>
        <ListContainer>
          <ListTitle>Developer Tools</ListTitle>
          <ListParagraph>
            Android Studio, AWS, Jetbrains Rider, Visual Studio Code
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>Libraries/Frameworks</ListTitle>
          <ListParagraph>
            Chai, Mocha
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>Methodologies</ListTitle>
          <ListParagraph>
            Object-oriented design (OOD), Design patterns, Test-driven development (TDD), Model view controller (MVC)
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
