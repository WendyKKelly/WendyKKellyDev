import React from 'react';
import Iframe from 'react-iframe';
import Zoom from 'react-reveal/Zoom';
import Text from '../Text';
import Link from '../Link';
import Image from 'next/image';
import illustration from '../../public/image/dandelion2.jpg';
import Heading from '../Heading';

import Container from '../UI/Container';
import Section, {
  ContentWrapper,
  //Illustration,
  BannerContent,
  Subscribe,
} from './banner.style';

const Banner = () => {
  return (
    <Section>
      <Container>
        <Zoom>
          <ContentWrapper>
            <BannerContent>
              <div className="image">
                <Image
                  src={illustration}
                  alt="orchid background"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
              <Heading as="h1" content="Wendy Kelly, Front End Developer" />
              <Heading as="h3" content="" />

              <Subscribe>
                <Heading
                  as="h3"
                  content="—  I enjoyed working with developers so much I decided to join them!"
                />

                <Text className="banner-caption" content="" />
              </Subscribe>
            </BannerContent>
          </ContentWrapper>
        </Zoom>
      </Container>
    </Section>
  );
};

export default Banner;
