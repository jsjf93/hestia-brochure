import { Col, Container, Row } from "react-bootstrap";
import UseAnimations from "react-useanimations";
import instagram from 'react-useanimations/lib/instagram'
import styled from "styled-components";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Anchor, Paragraph, SubTitle } from "../page-components/shared/SharedComponents";

const OuterContainer = styled.div`
  background-color: #f3f1e8;
  padding: 30px 0;
  text-align: center;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.hr`
  width: 90%;
  margin: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

export default function Footer() {
  const size = useWindowSize();
  const hideLogo = size?.width < 772;
  const showLine = size?.width < 577;

  return (
    <OuterContainer>
      <Container>
        <Row noGutters>
          <Col sm={5}>
            <SubTitle>Contact</SubTitle>
            <Paragraph><a href="/contact">Contact page</a></Paragraph>
            <Paragraph><a href="mailto:info@hestia-patisserie.co.uk">info@hestia-patisserie.co.uk</a></Paragraph>
            <Div>
              <Paragraph>Social media:</Paragraph> 
              <Anchor href="https://www.instagram.com/hestiapatisserie" target="_blank">
                <UseAnimations
                  aria-label="Instagram" 
                  animation={instagram} 
                  size={32} 
                  speed={1}
                />
              </Anchor>
            </Div>
          </Col>
          <Col sm={2}>
            {!hideLogo && <img src={'/logo.PNG'} alt={'Hestia Logo'} width={80} height={115} />}
            {showLine && <Line />}
          </Col>
          <Col sm={5}>
            <SubTitle>About</SubTitle>
            <Paragraph>Graphics and branding by Studio Waves</Paragraph>
            <Paragraph>Website by Joshua Foster</Paragraph>
          </Col>
        </Row>
      </Container>
    </OuterContainer>
  );
}
