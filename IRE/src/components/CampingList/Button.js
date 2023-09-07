import styled from 'styled-components';

const Button = ({ text, active, onClick }) => {
  return (
    <Btn active={active} onClick={onClick}>
      {text}
    </Btn>
  );
};

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 1rem;
  border: 2px solid ${({ theme }) => theme.color.lightGray};
  border-radius: 1.875rem;
  margin-right: 0.3rem;

  background-color: ${(props) =>
    props.active === 'false'
      ? 'white'
      : `${({ theme }) => theme.color.darkGray}`};

  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  color: ${({ theme }) => theme.color.darkGray};
`;

export default Button;
