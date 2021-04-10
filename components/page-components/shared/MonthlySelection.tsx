import styled from "styled-components";
import { DefaultWrapper, SubTitle } from "./SharedComponents";

type Props = {
  title: string;
  image: string;
}

const Wrapper = styled(DefaultWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 70%;
  margin: 0 auto;

  @media (min-width: 992px) {
    width: 50%;
  };

  @media (max-width: 425px) {
    width: 90%;
  };
`;

export const MonthlySelection = ({ title, image }: Props) => (
  <Wrapper>
    <SubTitle>{title}</SubTitle>

    <Image src={image} alt={title} />
  </Wrapper>
);
