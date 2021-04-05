type Props = {
  image: string;
  text: string;
}

export default function InfoItem({ image, text}: Props) {
  return (
    <div style={styles.infoItem}>
      <img src={image} alt={'Cake information icon'} width={170} height={200} />
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
  text: {
    margin: '10px 0',
    fontFamily: 'Work Sans, sans-serif'
  } as React.CSSProperties,
}
