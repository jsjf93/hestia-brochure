import { Col, Container, Row } from "react-bootstrap";
import InfoItem from "./info-item";

export default function Information() {
  return (
    <Container style={styles.container}>
      <Row className="justify-content-center">
        <h2 style={styles.additionalTitle}>Reviews</h2>
      </Row>
      <Row className="justify-content-center">
        <Col xs={10} md={2} lg={3} style={styles.col}>
          <InfoItem image={'images/cakeicons/Lemon.png'} title={'Alex'} text={'Well I’m not going to lie, we’ve eaten half the cake already. We both really love it, the texture is perfect, it’s just a great cake. Can’t really fault it!'} />
        </Col>
        <Col xs={10} md={2} lg={3} style={styles.col}>
          <InfoItem image={'images/cakeicons/DarkChocolateCherry.png'} title={'Laura'} text={'Thank you so much for the wonderful patisserie boxes - everyone seemed bowled over with how pretty they are and being delicious too makes them first class!'} />
        </Col>
        <Col xs={10} md={2} lg={3} style={styles.col}>
          <InfoItem image={'images/cakeicons/StickyToffee.png'} title={'Cath'} text={'Absolutely amazing cake, you\'re the best!'} />
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
    margin: '0 30px'
  } as React.CSSProperties,
}
