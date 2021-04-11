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

const Line = styled.hr`
  width: 50%;
  margin: 5px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

export default function InfoItem({ image, title, text }: Props) {
  return (
    <Wrapper>
      <img src={image} alt={'Cake information icon'} width={170} height={200} />
      <h4>{title}</h4>
      <Line />
      <Paragraph>{text}</Paragraph>
    </Wrapper> 
  )
};
