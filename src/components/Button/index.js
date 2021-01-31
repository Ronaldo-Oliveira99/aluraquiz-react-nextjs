import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  width: 100%;
  padding: 14px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .5;
  }
  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;
// "https://blog.rocketseat.com.br/content/images/2018/12/ssr-nextjs-reactjs.png"
// "https://i1.wp.com/blog.logrocket.com/wp-content/uploads/2020/01/Next.js-react-nocdn.png?fit=730%2C412&ssl=1"
export default Button;
