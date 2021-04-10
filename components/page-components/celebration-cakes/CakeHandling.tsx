import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Paragraph, SubTitle } from "../shared/SharedComponents";

const Wrapper = styled.div`
  padding: 40px 0;
`;

export const CakeHandling = () => (
  <Wrapper>
    <Container>
      <SubTitle>Cake Handling</SubTitle>
      <Paragraph>
        If collecting or transporting the cake yourself please hold it from the base as any pressure on the sides can cause damage to your cake.
      </Paragraph>
    </Container>
  </Wrapper>
);
