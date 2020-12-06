import Image from 'next/image';
import styles from './product.module.scss';

type Props = {
  image: string;
  text: string;
  cost: string;
}

export default function Product(props: Props) {
  return (
    <div className={styles.productContainer}>
      <Image src={props.image} alt={props.text} height={320} width={240} layout="fixed" />
      {props.text}
      <hr />
      {props.cost}
    </div>
  );
}
