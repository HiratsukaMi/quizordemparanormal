import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  filter: drop-shadow(0px -1px 10px ${({ theme }) => theme.colors.primary});
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Form = styled.form`
  input {
    padding: 8px 64px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    text-align: center;
    max-width: -webkit-fill-available;
    background: transparent;
  }
  button {
    padding: 7px 127px;
    max-width: -webkit-fill-available;
    border-radius: 5px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
    font-variant: small-caps;
    color: ${({ theme }) => theme.colors.mainBg};
  }
`;

export default Widget;
