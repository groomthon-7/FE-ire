import styled from "styled-components";
import { color } from "../../style/theme";

const Button = ({ type, text, onClick }) => {
  return (
    <Btn type={type} color={color} onClick={onClick}>
      {text}
    </Btn>
  );
};

const Btn = styled.button`
  width: ${(props) =>
    props.type === "lg" ? "21.44rem" : "md" ? "16.19rem" : "4.75rem"};
  height: 3rem;
  background-color: ${(props) => props.color.lightGray};
  border: none;
  border-radius: 8px;
`;

export default Button;
