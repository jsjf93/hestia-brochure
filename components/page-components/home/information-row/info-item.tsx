import styled from "styled-components"

type Props = {
  image: string;
  title: string;
  text: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Paragraph = styled.p`
  margin: 10px 0;
  font-family: 'Work Sans', sans-serif;
`;

export default function InfoItem({ image, title, text }: Props) {
  return (
    <Wrapper>
      <img src={image} alt={'Cake information icon'} width={170} height={200} />
      <h4>{title}</h4>
      <Paragraph>{text}</Paragraph>
    </Wrapper> 
  )
};
