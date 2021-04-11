import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { useWindowSize } from '../../../../hooks/useWindowSize';
import { SubTitle } from '../../shared/SharedComponents';

const AboutContainer = styled.div`
  background-color: #f3f1e8;
  text-align: center;
  padding: 20px 0;
`;

const StyledRow = styled(Row)`
  justify-content: space-between;
`;

type ParagraphProps = {
  smallWindow: boolean;
};

const Paragraph = styled.p<ParagraphProps>`
  font-family: 'Work Sans', sans-serif;
  margin: ${props => props.smallWindow ? '30px 0' : '30px 40px' };
`;

export default function About() {
  const size = useWindowSize();
  const smallWindow = size?.width <= 991;
  
  return (
    <AboutContainer>
      <Container>
        <StyledRow noGutters>
          <SubTitle>About Hestia Patisserie</SubTitle>
          <Paragraph smallWindow={smallWindow}>
            Hestia Patisserie is run by professional chef Rebecca Heath. After attending culinary school and working in high end hotels and restaurants in London, she moved to Nottingham to work at Michelin-starred restaurant, Sat Bains and then onto Copenhagen, Denmark, to work at various Michelin-starred restaurants. Upon returning to Norfolk she has concentrated predominantly on patisserie, which has inspired her to establish her own business.
          </Paragraph>
        </StyledRow>
      </Container>
    </AboutContainer>
  );
}
