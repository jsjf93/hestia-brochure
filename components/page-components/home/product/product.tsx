import { Card } from 'react-bootstrap';

type Props = {
  image: string;
  text: string;
  cost: string;
}

export default function Product(props: Props) {
  return (
    <Card style={styles.card}>
      <img src={props.image} alt={props.text} style={styles.img} />
      <Card.Title style={styles.title}>{props.text}</Card.Title>
      <hr style={styles.hr}/>
      <Card.Text style={styles.text}>{props.cost}</Card.Text>
    </Card>
  );
}

const styles = {
  card: {
    textAlign: 'center',
    border: 'none',
    margin: '10px',
    width: '300px'
  } as React.CSSProperties,
  title: {
    fontSize: 32,
    margin: '20px 0'
  } as React.CSSProperties,
  hr: {
    width: '35%',
    margin: 'auto',
    borderTop: '3px solid rgba(0, 0, 0, 0.1)'
  } as React.CSSProperties,
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: '20px 0'
  } as React.CSSProperties,
  img: {
    width: '100%',
    maxHeight: '480px',
    height: 'auto'
  } as React.CSSProperties,
};
