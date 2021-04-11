import { Card } from 'react-bootstrap';

type Props = {
  image: string;
  text: string;
}

export default function Product(props: Props) {
  return (
    <Card style={styles.card}>
      <img src={props.image} alt={props.text} style={styles.img} />
      <Card.Title style={styles.title}>{props.text}</Card.Title>
    </Card>
  );
}

const styles = {
  card: {
    textAlign: 'center',
    border: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  } as React.CSSProperties,
  title: {
    fontSize: 24,
    margin: '10px 0 20px'
  } as React.CSSProperties,
  img: {
    width: '90%',
    height: 'auto'
  } as React.CSSProperties,
};
