import { Col, Container, Row } from "react-bootstrap";
import { useWindowSize } from '../../../../hooks/useWindowSize';

export default function About() {
  const size = useWindowSize();
  const matches = size?.width <= 991;
  
  return (
    <div style={styles.aboutContainer}>
      <Container>
        <Row noGutters style={styles.row}>
          <Col xs={12} lg={5} style={styles.column(matches)}>
            <h2>About Hestia Petisserie</h2>
            <p style={styles.text(matches)}>Hestia Patisserie is run by professional chef Rebecca Heath. After attending culinary school and working in high end hotels and restaurants, she moved to Nottingham to work at starred a restaurant, Sat Bains and then onto Copenhagen, Denmark, to work at various Michelin starred restaurants. Upon returning to Norfolk she has concentrated predominantly on patisserie, which has inspired her to establish her own business.</p>
          </Col>
          <Col xs={12} lg={5} style={styles.imageColumn(matches)}>
            <img src='/images/saltedcaramel.png' alt='Rebecca' style={styles.img} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const styles = {
  aboutContainer: {
    backgroundColor: '#f3f1e8',
    textAlign: 'center',
    padding: '20px 0'
  } as React.CSSProperties,
  row: {
   justifyContent: 'space-between'
  } as React.CSSProperties,
  column: (smallWindow: boolean) => ({
    margin: smallWindow ? '15px 0' : '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }) as React.CSSProperties,
  imageColumn: (smallWindow: boolean) => ({
    margin: smallWindow ? '15px 0' : '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }) as React.CSSProperties,
  text: (smallWindow: boolean) => ({
    margin: smallWindow ? '30px 0' : '30px 40px',
    fontFamily: 'Work Sans, sans-serif',
  }) as React.CSSProperties,
  img: {
    width: '100%',
    maxWidth: '240px',
    maxHeight: '360px',
    height: 'auto'
  } as React.CSSProperties,
}
