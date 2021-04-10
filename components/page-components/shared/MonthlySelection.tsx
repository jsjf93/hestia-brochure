import styled from "styled-components";
import { DefaultWrapper, SubTitle } from "./SharedComponents";

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

type Props = {
  title: string;
  image: string;
}

const Wrapper = styled(DefaultWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 0;
`;

const Image = styled.img`
  width: 70%;
  margin: 0 auto;

  @media (min-width: 992px) {
    width: 50%;
  };

  @media (max-width: 500px) {
    width: 100%;
  };
`;

export const MonthlySelection = ({ title, image }: Props) => {
  const month = months[new Date().getMonth()];

  return (
    <Wrapper>
      <SubTitle>{`${month} ${title}`}</SubTitle>

      <Image src={image} alt={`${month} ${title}`} />
    </Wrapper>
  );
};
