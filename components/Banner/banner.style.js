import styled from 'styled-components';
import { rgba } from 'polished';
import { themeGet } from '@styled-system/theme-get';
import Image from 'next/image';

const Section = styled.section``;
export const Container = styled.div`=
max-width: 2200px;
;`;
export const ContentWrapper = styled.div`
  background: rgba(188, 237, 243, 0.3);
  margin: 0;
  background-size: cover;
  padding-top: 1rem;

  padding-bottom: 0.5rem;

  @media only screen and (max-width: 1600px) {
    max-width: 100%;
  }
  @media only screen and (max-width: 1400px) {
    max-width: 100%;
  }
  @media only screen and (max-width: 1024px) {
    max-width: 100%;
  }
  @media only screen and (max-width: 999px) {
    max-width: 100%;

    padding-top: 1rem;
    padding-bottom: 0.5rem;
    z-index: -2;
  }
  @media only screen and (max-width: 480px) {
    margin-left: 0rem;

    line-height: 3.5rem;
  }
`;

export const BannerContent = styled.div`
  h1 {
    font-family: Helvetica Neue;
    font-size: 4rem;
    line-height: 60px;
    font-weight: 900;

    margin-left: 0rem;
    margin-top: 10rem;
    margin-right: 0rem;
    color: ${themeGet('colors.menu', '#2c2e35')};
    margin-bottom: 24px;
    letter-spacing: 1.5px;
    z-index: 5;

    @media only screen and (max-width: 1440px) {
      font-size: 4rem;
      margin-bottom: 15px;
      line-height: 55px;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      font-size: 2.4rem;
      line-height: 44px;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 4rem;

      margin-bottom: 20px;
      margin-left: 0rem;
      text-align: left;
    }
    @media only screen and (max-width: 768px) {
      font-size: 3.5rem;
      color: #2c2e35;

      margin-left: 1rem;

      margin-bottom: 0.3rem;
      margin-right: 5rem;
      text-align: left;
    }
    @media only screen and (max-width: 480px) {
      font-size: 2rem;
      color: #2c2e35;
      line-height: 2.8rem;

      margin-bottom: 0.3rem;
      margin-top: 2rem;

      text-align: left;
    }
  }
`;

export const Subscribe = styled.div`
  display: flex;
  margin-top: 10rem;
  margin-left: 50rem;
  @media only screen and (max-width: 1440px) {
    margin-top: 0rem;
    margin-left: 30rem;
    
  }
  @media only screen and (max-width: 1024px) {
    margin-left: 2rem;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    flex-direction: column;
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
  @media only screen and (max-width: 480px) {
    max-width: 100%;
    margin-bottom: 0rem;
    flex-direction: column;
    margin-top: 0rem;
  }
  .banner-caption {
    color: ${themeGet('colors.paragraph', '#2c2e35')};
    font-family: 'Helvetica Neue';
    font-size: 2rem;
    line-height: 33px;
    font-weight: 400;
    margin-bottom: 0;
    background-position: right bottom;
    @media only screen and (max-width: 1440px) {
      font-size: 1.5rem;
    }
    @media only screen and (max-width: 1024px) {
      line-height: 33px;
    }
    @media only screen and (max-width: 768px) {
      margin-bottom: 30px;
      text-align: center;
    }
    @media only screen and (max-width: 480px) {
      font-size: 1.5rem;;
    }
  }
  
  h2 {
    font-family: Fira Sans;
                    font-weight: 900; font-size: 4rem;
    
    line-height: 70px;
    
    margin-left: 0rem;
    margin-top: 4rem;
    color: ${themeGet('colors.menu', '#2c2e35')};
    margin-bottom: 24px;
    letter-spacing: 1.5px;
    @media only screen and (max-width: 1440px) {
      font-size: 2.5rem;
      font-weight: 900;
      color: #fff;
      margin-top: 20rem;
      margin-bottom: 5px;
      text-align: center;
      margin-left: 0rem;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 3rem;
      color: #fff;
      margin-bottom: 20px;
      line-height: 60px;
      text-align: left;
      margin-left: 5rem;
    }
    @media only screen and (max-width: 999px) {
      font-size: 3rem;
      color: #fff;
      margin-bottom: 20px;
      margin-top: 25rem;
      line-height: 60px;
      text-align: left;
      margin-left: 0rem;
    }
    @media only screen and (max-width: 768px) {
      display: none;
      font-size: 2.3rem;
      color: #fff;
      margin-top: 4rem;
      margin-bottom: 0rem;
      line-height: 40px;
      text-align: left;
      margin-left: 0rem;
    }
    @media only screen and (max-width: 480px) {
      font-size: 2rem;
      color: #fff;
      margin-top: 10rem;
      margin-bottom: 0rem;
      line-height: 40px;
      text-align: left;
      margin-left: 0;
    }
  }
  h3 {
    font-family: Playfair;
    font-size: 2.5rem;
    line-height: 70px;
    font-weight: 900;
    margin-left: 0rem;
    margin-top: 4rem;
    color: ${themeGet('colors.menu', '#2c2e35')};
    margin-bottom: 24px;
    letter-spacing: 1.5px;
    @media only screen and (max-width: 1440px) {
      font-size: 2.5rem;
      font-weight: 900;
      color: #ec6f48;
      margin-top: 20rem;
      margin-bottom: 5px;
      text-align: right;
      margin-left: 0rem;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 3rem;
      color: #2c2e35;
      margin-bottom: 20px;
      line-height: 60px;
      text-align: left;
      margin-left: 0rem;
    }
    @media only screen and (max-width: 999px) {
      font-size: 3rem;
      color: #2c2e35;
      margin-bottom: 20px;
      margin-top: 5rem;
      line-height: 60px;
      text-align: left;
      margin-left: 0rem;
      margin-right: 30rem;
    }
    @media only screen and (max-width: 768px) {
      font-size: 3rem;
      color: #2c2e35;
      margin-top: 0rem;
      margin-bottom: 10rem;
      line-height: 60px;
      text-align: right;
      margin-left: 5rem;
      margin-right: 1rem;
    }
    @media only screen and (max-width: 480px) {
      font-size: 3rem;
      color: #2c2e35;
      margin-top: 0rem;
      margin-bottom: 1rem;
      line-height: 60px;
      text-align: right;
      margin-left: 5rem;
      padding-right: 1.2rem;
    }
  }
    .reusecore__input {
      width: 100%;
    }
    .field-wrapper {
      margin-right: 15px;
      @media only screen and (max-width: 480px) {
        margin-right: 0px;
      }
    }
    input {
      font-family: 'Helvetica Neue';
      font-size: 16px;
      min-height: 60px;
      padding: 0 24px;
      border-radius: 8px;
      ::placeholder {
        color: ${rgba('#02073E', 0.4)};
        opacity: 1; /* Firefox */
      }
      &:focus {
        border-color: #ff825c;
      }

      @media only screen and (max-width: 1280px) {
        min-height: 50px;
      }
    }
  }

  `;

export default Section;
