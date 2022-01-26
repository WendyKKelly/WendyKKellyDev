import styled from 'styled-components';

export const SocialProfileWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 15rem;
  margin-right: 10rem;
  @media only screen and (max-width: 480px) {
    margin: 0;
  }
`;

export const SocialProfileItem = styled.div`
  margin-left: 10rem;
  margin-bottom: 30px;
  a {
    color: rgba(188, 237, 243);
    transition: 0.15s ease-in-out;
    &:hover {
      color: #2c2e35;
    }
  }
`;
