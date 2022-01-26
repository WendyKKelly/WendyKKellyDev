import styled from 'styled-components';

export const SkillWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 10rem;
  margin-right: 10rem;
  flex-wrap: wrap;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const SkillItem = styled.div`
  margin-top: 2rem;
  margin-left: 10rem;
  a {
    color: rgba(188, 237, 243);
    transition: 0.15s ease-in-out;
    &:hover {
      color: #2c2e35;
    }
  }
`;
