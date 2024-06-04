import styled from "styled-components";

const LogInContainer = styled.div`
  background-color: ${({theme})=> theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;  
`;

export {LogInContainer};