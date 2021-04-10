import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Anchor, Paragraph, SubTitle } from "../shared/SharedComponents";

const StyledContainer = styled(Container)`
  padding: 20px 20px;
`;

const List = styled.ul`
  font-family: 'Work Sans', sans-serif;
`;

export const Pricing = () => (
  <StyledContainer>
    <SubTitle>Pricing</SubTitle>
    
    <Paragraph>
      Sizes and approximate portions:
    </Paragraph>
    <List>
      <li>6", tall (14 - 16 portions)</li>
      <li>8", tall (24 - 26 portions)</li>
      <li>2 tier 6" and 8", tall (42 portions)</li>
    </List>

    <Paragraph>
      All cakes are individual and prices are determined by size, design and detail.
    </Paragraph>
    <Paragraph>
      Please get in touch via the <Anchor href='#'>contact</Anchor> page to receive a quote.
    </Paragraph>
    <Paragraph>
      A 20% non-refundable deposit is required before a confirmation of your order. Full payment is required no later than 5 days before your collection or delivery date. 
    </Paragraph>
  </StyledContainer>
);
