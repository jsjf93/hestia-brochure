import { Col, Container, Row } from "react-bootstrap";
import { useWindowSize } from '../../../../hooks/useWindowSize';
import Button from '../../../form-components/button/button';

export default function About() {
  const size = useWindowSize();
  const matches = size?.width <= 768;
  
  return (
    <div style={styles.aboutContainer}>
      <Container>
        <Row noGutters>
          <Col xs={12} lg={5} style={styles.column(matches)}>
            <h2>Placeholder</h2>
            <p style={styles.text(matches)}>Lorem ipsum sit amet, consectetur adipscing elit. Lorem ipsum sit amet, consectetur adipscing elit. Lorem ipsum sit amet, consectetur adipscing elit.</p>
            <Button
              variant='primary'
              color='bone'
              text='CALL TO ACTION'
              onClick={() => undefined}
            />
          </Col>
          <Col xs={12} lg={5} style={styles.imageColumn(matches)}>
            <img src='/cakes/saltedcaramel.png' alt='Rebecca' style={styles.img} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const styles = {
  aboutContainer: {
    backgroundColor: '#f3f1e8',
    textAlign: 'center'
  } as React.CSSProperties,
  column: (smallWindow: boolean) => ({
    margin: smallWindow ? '30px 0' : '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }) as React.CSSProperties,
  imageColumn: (smallWindow: boolean) => ({
    margin: smallWindow ? '30px 0' : '30px',
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
