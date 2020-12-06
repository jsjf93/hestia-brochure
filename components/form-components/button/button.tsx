type Props = {
  variant: 'primary' | 'secondary';
  color: 'white' | 'bone';
  onClick: () => void;
  text: string;
};

export default function Button(props: Props) {
  const className = `button button-${props.variant} button-${props.variant}--${props.color}`;

  return (
    <button className={className}>
      {props.text}
    </button>
  );
}
