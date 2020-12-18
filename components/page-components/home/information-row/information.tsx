import { Col, Container, Row } from "react-bootstrap";
import InfoItem from "./info-item";

export default function Information() {
  return (
    <Container style={styles.container}>
      <Row className="justify-content-center" noGutters>
        <h5 style={styles.subtitle}>SUBTITLE</h5>
      </Row>
      <Row className="justify-content-center">
        <h2 style={styles.additionalTitle}>Placeholder</h2>
      </Row>
      <Row className="justify-content-center">
        <Col xs={10} md={2} lg={3} style={styles.col}>
          <InfoItem image={'/saltedcaramelicon.PNG'} title={'Placeholder'} text={'Lorem ipsum sit amet, consectetur adipscing elit.'} />
        </Col>
        <Col xs={10} md={2} lg={3} style={styles.col}>
          <InfoItem image={'/saltedcaramelicon.PNG'} title={'Placeholder'} text={'Lorem ipsum sit amet, consectetur adipscing elit.'} />
        </Col>
        <Col xs={10} md={2} lg={3} style={styles.col}>
          <InfoItem image={'/saltedcaramelicon.PNG'} title={'Placeholder'} text={'Lorem ipsum sit amet, consectetur adipscing elit.'} />
        </Col>
      </Row>
    </Container>
  );
}

const styles = {
  container: {
    padding: '40px 0',
    overflow: 'hidden',
  } as React.CSSProperties,
  subtitle: {
    fontFamily: 'Work Sans, sans-serif',
    margin: '30px'
  } as React.CSSProperties,
  additionalTitle: {
    margin: '30px'
  },
  col: {
    display: 'flex',
    justifyContent: 'center',
    margin: '30px'
  } as React.CSSProperties,
}
