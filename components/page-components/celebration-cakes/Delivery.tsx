import { Container } from "react-bootstrap";
import styled from "styled-components";
import { secondary } from "../../../styles/settings/colors";

const Wrapper = styled.div`
  background-color: ${secondary['alabaster']};
  padding: 40px 0;
`;

const Title = styled.h2`
  text-align: center;
`;

const Paragraph = styled.p`
  font-family: 'Work Sans', 'sans-serif';
  margin-bottom: 0;
`;

export const Delivery = () => (
  <Wrapper>
    <Container>
      <Title>Delivery</Title>
      <Paragraph>
        You can choose to collect your cake from my home in Wymondham, Norfolk or choose to have it delivered. Delivery is available throughout Norfolk and Suffolk, subject to a delivery charge.
      </Paragraph>
    </Container>
  </Wrapper>
);
