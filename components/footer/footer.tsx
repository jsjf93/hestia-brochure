import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <div style={styles.outerContainer}>
      <Container>
        <Row noGutters>
          <Col>
            <h3 style={styles.title}>Contact</h3>
            <p style={styles.details}>DETAILS 01</p>
            <p style={styles.details}>DETAILS 02</p>
            <p style={styles.details}>DETAILS 03</p>
          </Col>
          <Col>
            <Image src={'/logo.PNG'} alt={'Hestia Logo'} width={80} height={115} layout="fixed" />
          </Col>
          <Col>
            <h3 style={styles.title}>About</h3>
            <p style={styles.details}>DETAILS 01</p>
            <p style={styles.details}>DETAILS 02</p>
            <p style={styles.details}>DETAILS 03</p>
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
