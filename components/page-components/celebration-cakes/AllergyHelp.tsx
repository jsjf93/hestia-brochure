import { Container } from "react-bootstrap";
import styled from "styled-components";
import { secondary } from '../../../styles/settings/colors'; 

const Wrapper = styled.div`
  background-color: ${secondary['alabaster']};
  padding: 20px 0;
`;

const Title = styled.h2`
  text-align: center;
`;

const Paragraph = styled.p`
  font-family: 'Work Sans', 'sans-serif';
  margin-bottom: 0;
`;

export const AllergyHelp = () => (
  <Wrapper>
    <Container>
      <Title>Allergies and dietary requirements</Title>
      <Paragraph>Please disclose any allergies or dietary requirements when ordering or email to enquire. Due to allergens (e.g. nuts, gluten) being used in the same area, I cannot say products are completely free from certain ingredients but can specify what a product is made without.</Paragraph>
    </Container>
  </Wrapper>
);
