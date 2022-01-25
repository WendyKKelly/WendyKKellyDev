import React from 'react';
import Iframe from 'react-iframe';
import Zoom from 'react-reveal/Zoom';
import Text from '../Text';
import Link from '../Link';
import Image from 'next/image';
import Heading from '../Heading';
import { ProjectButton } from '../portfolio.style';

import Container from '../UI/Container';
import Section, {
  ContentWrapper,
  //Watch,
  //NewButton,
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
              <Heading as="h1" content="Wendy Kelly, Front End Developer" />

              <Heading as="h3" content="" />

              <ProjectButton>
                <Link href="#Projects">
                  <span>Projects</span>
                </Link>
              </ProjectButton>

              <Subscribe>
                <Heading
                  as="h3"
                  content="—  I enjoyed working with developers so I decided to join them."
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
