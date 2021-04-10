import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <div style={styles.outerContainer}>
      <Container>
        <Row noGutters>
          <Col>
            <h3 style={styles.title}>Contact</h3>
            <p style={styles.details}><a href="/contact">Contact page</a></p>
            <p style={styles.details}><a href="mailto:info@hestia-patisserie">info@hestia-patisserie</a></p>
          </Col>
          <Col>
            <img src={'/logo.PNG'} alt={'Hestia Logo'} width={80} height={115} />
          </Col>
          <Col>
            <h3 style={styles.title}>About</h3>
            <p style={styles.details}>Graphics and branding by Studio Waves</p>
            <p style={styles.details}>Website by Joshua Foster</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const styles = {
  outerContainer: {
    backgroundColor: '#f3f1e8',
    padding: '60px 0',
    textAlign: 'center',
  } as React.CSSProperties,
  title: {
    marginBottom: '20px',
  } as React.CSSProperties,
  details: {
    fontFamily: 'Work Sans, sans-serif',
  } as React.CSSProperties,
}
