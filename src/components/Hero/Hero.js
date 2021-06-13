import React, { useState } from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

let info = `The purpose of this webpage is to illustrate an overview of my profile
          and skills to engage in software development opportunities. I am Arnab
          Chattopadhyay, a student of Mechanical Engineering at NIT, Warnagal.
          Currently exploring the Data Analytics and Web Development career path
          and looking for new opportunities or projects.`;

const Hero = (props) => {
  const [short, setShorten] = useState(true);

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Welcome To <br />
            My Personal Portfolio
          </SectionTitle>
          <SectionText>
            {!short ? info : `${info.substring(0, 120)}...`}
          </SectionText>
          <Button onClick={() => setShorten(!short)}>
            {short ? "Show more" : "Show less"}
          </Button>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;
