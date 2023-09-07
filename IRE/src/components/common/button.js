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
  background-color: ${(props) =>
    props.type === "sm" ? "#FFF" : props.theme.color.mainColor};
  border: ${(props) => (props.type === "sm" ? "1px solid #D2D2D2" : "none")};
  border-radius: 8px;
  color: ${(props) => (props.type === "sm" ? "#727272" : "white")};
  font-size: 16px;
  font-weight: 700;
`;

export default Button;
