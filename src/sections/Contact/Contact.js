import React from "react";
import SectionContainer from "../../containers/SectionContainer";
import MessageBox from "../../components/MessageBox/MessageBox";

const Contact = () => {
  return (
    <SectionContainer id="contact" title="Contato" maxWidth="sm" reverse>
      <MessageBox />
    </SectionContainer>
  );
};

export default Contact;
