import styled from 'styled-components';

export const ActiveStatus = styled.div`
  width: 0px;
  height: 0px;
  border-radius: 50%;
  position: relative;
  flex-shrink: 0;
  margin-right: 20px;
  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: transparent;
    border: none;
    right: -2px;
    bottom: -2px;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  .footer_social {
    margin-left: 10rem;
    margin-bottom: 30px;
    background: rgba(188, 237, 243);
    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
    a {
      svg {
        @media (max-width: 990px) {
          background: rgba(188, 237, 243);
          width: 25px;
          height: 25px;
        }
      }
    }
  }
`;
