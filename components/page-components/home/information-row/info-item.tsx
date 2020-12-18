type Props = {
  image: string;
  title: string;
  text: string;
}

export default function InfoItem({ image, title, text}: Props) {
  return (
    <div style={styles.infoItem}>
      <img src={image} alt={'Cake information icon'} width={85} height={100} />
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.text}>{text}</p>
    </div> 
  )
}

const styles = {
  infoItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  } as React.CSSProperties,
  title: {
    margin: '40px 0 0 0'
  } as React.CSSProperties,
  text: {
    margin: '40px 0',
    fontFamily: 'Work Sans, sans-serif'
  } as React.CSSProperties,
}
