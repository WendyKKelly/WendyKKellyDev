import React from 'react';
import Iframe from 'react-iframe';
import Zoom from 'react-reveal/Zoom';
import Text from '../Text';
import Link from '../Link';
import Image from 'next/image';
import Heading from '../Heading';

import Container from '../UI/Container';
import Section, {
  ContentWrapper,
  Watch,
  BannerContent,
  Subscribe,
} from './banner.style';

const Banner = () => {
  return (
    <Section>
      <Container>
        <Zoom>
          <ContentWrapper>
            <div className="wrap">
              <Watch>
                <div className="watch">
                  <div className="watch-face">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                </div>
                <BannerContent>
                  <Heading as="h1" content="Wendy Kelly, Front End Developer" />

                  <Heading as="h3" content="" />

                  <Subscribe>
                    <Heading
                      as="h3"
                      content="—  I enjoyed working with developers so I decided to join them."
                    />

                    <Text className="banner-caption" content="" />
                  </Subscribe>
                </BannerContent>
              </Watch>
            </div>
          </ContentWrapper>
        </Zoom>
      </Container>
    </Section>
  );
};

export default Banner;
