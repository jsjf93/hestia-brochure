import { Container } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 40px 0;
`;

const Title = styled.h2`
  text-align: center;
`;

const Paragraph = styled.p`
  font-family: 'Work Sans', 'sans-serif';
  margin-bottom: 0;
`;

export const CakeHandling = () => (
  <Wrapper>
    <Container>
      <Title>Cake Handling</Title>
      <Paragraph>
        If collecting or transporting the cake yourself please hold it from the base as any pressure on the sides can cause damage to your cake.
      </Paragraph>
    </Container>
  </Wrapper>
);
