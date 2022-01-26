import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import Text from '../Text';
import Heading from '../Heading';
import Image from '../Image';
import Button from '../Button';
import Container from '../UI/Container';
import SocialProfile from '../SocialProfile';

import { ButtonWrapper } from '../portfolio.style';
import { ActiveStatus } from './contact.style';

import { SOCIAL_PROFILES } from '../data';

const ContactSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  replyWrapper,
  replyTime,
  buttonStyle,
  buttonWrapper,
}) => {
  return (
    <Box {...sectionWrapper} as="section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="Say Hi!" />
          <Text {...secDescription} content="Find me on Twitter or Github:" />
        </Box>
        <Box {...replyWrapper}>
          <ActiveStatus></ActiveStatus>
          <Heading as="h4" content="" {...replyTime} />
        </Box>

        <Box>
          <SocialProfile
            className="footer_social"
            items={SOCIAL_PROFILES}
            iconSize={40}
          />
        </Box>

        <Box {...buttonWrapper}>
          <ButtonWrapper>
            <Button
              title="wendykkelly@gmail.com"
              className="portfolio_button"
              {...buttonStyle}
            />
          </ButtonWrapper>
        </Box>
      </Container>
    </Box>
  );
};

ContactSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  replyWrapper: PropTypes.object,
  replyTime: PropTypes.object,
  buttonStyle: PropTypes.object,
  buttonWrapper: PropTypes.object,
};

ContactSection.defaultProps = {
  sectionWrapper: {
    pt: ['70px', '80px', '100px', '110px', '140px'],
    pb: ['70px', '80px', '100px', '110px', '140px'],
    bg: 'rgba(188, 237, 243, 0.3)',
  },
  secTitleWrapper: {
    mb: '30px',
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '600',
    color: '#2c2e35',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px'],
    textAlign: 'center',
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    textAlign: 'center',
    width: '600px',
    maxWidth: '100%',
    ml: 'auto',
    mr: 'auto',
    mb: '0',
  },
  replyWrapper: {
    flexBox: true,
    alignItems: 'center',
    justifyContent: 'center',
  },
  replyTime: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#2c2e35',
    mb: 0,
  },
  buttonStyle: {
    type: 'button',
    color: '#2c2e35',
    fontSize: '1rem',
    fontWeight: '500',
    color: '#fff',
    pl: '23px',
    pr: '23px',
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
    mt: '50px',
  },
};

export default ContactSection;
