import styled, { css } from 'styled-components';

const ContainerWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      max-width: 2200px; !important;
    `};
  ${(props) =>
    (props.noGutter &&
      css`
        padding-left: 0;
        padding-right: 0;
      `) ||
    css`
      padding-left: 0px;
      padding-right: 0px;
    `};
  @media (min-width: 480px) {
    max-width: 100%;
    width: 100%;
  }
  @media (min-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
  @media (min-width: 992px) {
    max-width: 100%;
    width: 100%;
  }
  @media (min-width: 1220px) {
    max-width: ${(props) => props.width || '2220px'};
    width: 100%;
  }
  @media (max-width: 768px) {
    ${(props) =>
      props.mobileGutter &&
      css`
        padding-left: 1px;
        padding-right: 1px;
      `};
  }
`;

export default ContainerWrapper;
