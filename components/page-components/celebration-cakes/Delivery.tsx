import { Container } from "react-bootstrap";
import styled from "styled-components";
import { secondary } from "../../../styles/settings/colors";
import { Anchor, Paragraph, SubTitle } from "../shared/SharedComponents";

const Wrapper = styled.div`
  background-color: ${secondary['alabaster']};
  padding: 40px 0;
  text-align: center;
`;

export const Delivery = () => (
  <Wrapper>
    <Container>
      <SubTitle>Delivery</SubTitle>
      <Paragraph>
        You can choose to collect your cake from my home in Wymondham, Norfolk or choose to have it delivered. Delivery is available throughout Norfolk and Suffolk, subject to a delivery charge.
      </Paragraph>
      <Paragraph>Please find charges <Anchor href="/contact">here</Anchor></Paragraph>
    </Container>
  </Wrapper>
);
