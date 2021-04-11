import { Container } from "react-bootstrap";
import styled from "styled-components";
import { secondary } from '../../../styles/settings/colors'; 
import { Paragraph, SubTitle } from "../shared/SharedComponents";

const Wrapper = styled.div`
  background-color: ${secondary['alabaster']};
  padding: 20px 0;
  text-align: center;
`;

export const AllergyHelp = () => (
  <Wrapper>
    <Container>
      <SubTitle>Allergies and dietary requirements</SubTitle>
      <Paragraph>Please disclose any allergies or dietary requirements when ordering or email to enquire. Due to allergens (e.g. nuts, gluten) being used in the same area, I cannot say products are completely free from certain ingredients but can specify what a product is made without.</Paragraph>
    </Container>
  </Wrapper>
);
