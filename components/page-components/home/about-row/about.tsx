import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Col, Container, Row } from "react-bootstrap";
import Button from '../../../form-components/button/button';

export default function About() {
  let mediaMatch: MediaQueryList;

  if (typeof window !== 'undefined') {
    mediaMatch = window.matchMedia('(max-width: 768px)');
  }
  const [matches, setMatches] = useState(!!mediaMatch?.matches);

  useEffect(() => {
    const handler = event => setMatches(event.matches);
    mediaMatch.addEventListener('change', handler);

    return () => mediaMatch.removeEventListener('change', handler);
  }, []);
  
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
            <Image src='/cakes/saltedcaramel.png' alt='Rebecca' height={360} width={240} />
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
}
