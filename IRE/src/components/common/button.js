import styled from "styled-components";
import theme from "../../style/theme";

const Button = ({ type, text, onClick }) => {
  return (
    <Btn type={type} onClick={onClick}>
      {text}
    </Btn>
  );
};

const Btn = styled.button`
  width: ${(props) =>
    props.type === "lg"
      ? "21.44rem"
      : props.type === "md"
      ? "16.19rem"
      : "4.75rem"};
  height: 3rem;
  background-color: ${(props) => props.theme.color.mainColor};
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-weight: 700;
`;

export default Button;
