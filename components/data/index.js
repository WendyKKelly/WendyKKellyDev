import PortfolioImage1 from '../../public/portfolio-1.jpg';
import PortfolioImage2 from '../../public/portfolio-2.jpg';
import PortfolioImage3 from '../../public/portfolio-3.jpg';
import PortfolioImage4 from '../../public/portfolio-4.jpg';
import PortfolioImage5 from '../../public/portfolio-5.jpg';
import PortfolioImage6 from '../../public/portfolio-6.jpg';
import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub';
import { git } from 'react-icons-kit/icomoon/git';
import { npm } from 'react-icons-kit/icomoon/npm';
import { htmlFive } from 'react-icons-kit/icomoon/htmlFive';
import { css3 } from 'react-icons-kit/icomoon/css3';
import { basecamp } from 'react-icons-kit/icomoon/basecamp';
import { trello } from 'react-icons-kit/icomoon/trello';
import { wordpress } from 'react-icons-kit/icomoon/wordpress';
import { language } from 'react-icons-kit/entypo/language';
import { database } from 'react-icons-kit/entypo/database';
import { coffee } from 'react-icons-kit/ionicons/coffee';
import { heart } from 'react-icons-kit/ionicons/heart';
import { socialJavascript } from 'react-icons-kit/ionicons/socialJavascript';
import { socialNodejs } from 'react-icons-kit/ionicons/socialNodejs';
import { socialPython } from 'react-icons-kit/ionicons/socialPython';
import { socialMarkdown } from 'react-icons-kit/ionicons/socialMarkdown';
import { slack } from 'react-icons-kit/fa/slack';
import { podcast } from 'react-icons-kit/fa/podcast';
import { freeCodeCamp } from 'react-icons-kit/fa/freeCodeCamp';

import Image from 'next/image';

export const SKILLS = [
  {
    icon: git,
    url: 'https://twitter.com/WendyKKelly',
    title: 'git',
  },
  {
    icon: npm,
    url: 'https://github.com/WendyKKelly',
    title: 'npm',
  },
  {
    icon: htmlFive,
    url: 'https://twitter.com/WendyKKelly',
    title: 'html5',
  },
  {
    icon: css3,
    url: 'https://github.com/WendyKKelly',
    title: 'css3',
  },
  {
    icon: basecamp,
    url: 'https://twitter.com/WendyKKelly',
    title: 'basecamp',
  },
  {
    icon: trello,
    url: 'https://github.com/WendyKKelly',
    title: 'trello',
  },
  {
    icon: wordpress,
    url: 'https://twitter.com/WendyKKelly',
    title: 'wordpress',
  },
  {
    icon: language,
    url: 'https://github.com/WendyKKelly',
    title: 'Japanese, French',
  },
  {
    icon: database,
    url: 'https://github.com/WendyKKelly',
    title: 'MongoDB',
  },
  {
    icon: coffee,
    url: 'https://github.com/WendyKKelly',
    title: 'coffee',
  },
  {
    icon: heart,
    url: 'https://github.com/WendyKKelly',
  },
  {
    icon: socialJavascript,
    url: 'https://github.com/WendyKKelly',
    title: 'Javascript/React/Nextjs',
  },
  {
    icon: socialNodejs,
    url: 'https://github.com/WendyKKelly',
    title: 'Nodejs',
  },
  {
    icon: socialPython,
    url: 'https://github.com/WendyKKelly',
    title: 'Python (a little)',
  },
  {
    icon: socialMarkdown,
    url: 'https://github.com/WendyKKelly',
    title: 'Markdown',
  },
  {
    icon: slack,
    url: 'https://github.com/WendyKKelly',
    title: 'Slack',
  },
  {
    icon: podcast,
    url: 'https://github.com/WendyKKelly',
    title: 'Podcast',
  },
  {
    icon: freeCodeCamp,
    url: 'https://github.com/WendyKKelly',
    title: 'Free Code Camp',
  },
];
export const SOCIAL_PROFILES = [
  {
    icon: socialTwitter,
    url: 'https://twitter.com/WendyKKelly',
  },

  {
    icon: socialGithub,
    url: 'https://github.com/WendyKKelly',
  },
];
export const PORTFOLIO_SHOWCASE = [
  {
    title: 'UNDERBELLY',
    portfolioItem: [
      {
        title: 'Underbelly Project',
        description:
          'My current passion project is also my showcase for development. Includes Headless CMS using Ghost, Nextjs, React, Styled Components, Integrated subdomain hosted on CloudFare, Serverless hosting on Vercel',
        image: PortfolioImage1,
        link: 'https://underbel.li',
        featuredIn: 'Built With',
        featuredLink: 'https://builtwith.com/underbel.li',
        view: '',
        love: '',
        feedback: '',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Next JS',
          },
          {
            content: 'Styled Component',
          },
          {
            content: 'Ghost Headless CMS',
          },
        ],
      },
      {
        title: '',
        description: '',
        image: PortfolioImage1,
        link: '#',
        featuredIn: 'Built With',
        featuredLink: 'https://builtwith.com/underbel.li',
        view: '',
        love: '',
        feedback: '',
        buildWith: [
          {
            content: '',
          },
          {
            content: '',
          },
          {
            content: '',
          },
        ],
      },
    ],
  },
  {
    title: 'EXPLICIT CHRISTIAN',
    portfolioItem: [
      {
        title: 'Explicit Christian',
        description:
          'This is my personal blog where I am exploring what it means to still be Christian in 2022. Nextjs with a simple Markdown blog',
        image: PortfolioImage2,
        link: 'https://explicitchristian.com',
        featuredIn: 'Built With',
        featuredLink: 'https://builtwith.com/explicitchristian.com',
        view: '',
        love: '',
        feedback: '',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Next JS',
          },
          {
            content: 'Markdown',
          },
        ],
      },
      {
        title: '',
        description: '',
        image: PortfolioImage2,
        link: '#',
        featuredIn: 'Built With',
        featuredLink: '',
        view: '',
        love: '',
        feedback: '',
        buildWith: [
          {
            content: '',
          },
          {
            content: '',
          },
          {
            content: '',
          },
        ],
      },
    ],
  },

  {
    title: 'PERSONAL BLOG',
    portfolioItem: [
      {
        title: 'Wendy Kiana Kelly(esq)',
        description:
          'My personal blog, built on Nextjs with a simple Markdown blog. Added a MailChimp newsletter.',
        image: PortfolioImage3,
        link: 'https://wendykianakelly.com',
        featuredIn: 'Built With',
        featuredLink: 'https://builtwith.com/wendykianakelly.com',
        view: '',
        love: '',
        feedback: '',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Next JS',
          },
          {
            content: 'MailChimp',
          },
        ],
      },
      {
        title: '',
        description: '',
        image: PortfolioImage3,
        link: '#',
        featuredIn: 'Built With',
        featuredLink: 'https://builtwith.com/wendykianakelly.com',
        view: '',
        love: '',
        feedback: '',
        buildWith: [
          {
            content: '',
          },
          {
            content: '',
          },
          {
            content: '',
          },
        ],
      },
    ],
  },
  {
    title: 'SAMPLE PORTFOLIO',
    portfolioItem: [
      {
        title: 'Wendy Kelly, Writer, etc',
        description:
          'This is a simple example of a portfolio site I created for practice.',
        image: PortfolioImage4,
        link: 'wendykianakelly.dev',
        featuredIn: 'Built With',
        featuredLink: 'https://builtwith.com/wendykianakelly.dev',
        view: '',
        love: '',
        feedback: '',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Next JS',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
      {
        title: '',
        description: '',
        image: PortfolioImage4,
        link: '#',
        featuredIn: '',
        featuredLink: '#',
        view: '',
        love: '',
        feedback: '',
        buildWith: [
          {
            content: '',
          },
          {
            content: '',
          },
          {
            content: '',
          },
        ],
      },
    ],
  },
  {
    title: 'FUGACIOUS',
    portfolioItem: [
      {
        title: 'Weather App',
        description: 'This is a project I did a few years ago using Redux.',
        image: PortfolioImage5,
        link: 'https://fugacious.space',
        featuredIn: 'Built With',
        featuredLink: 'https://builtwith.com/fugacious.space',
        view: '',
        love: '',
        feedback: '',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Redux',
          },
          {
            content: 'APIs',
          },
        ],
      },
      {
        title: '',
        description: '',
        image: PortfolioImage5,
        link: '#',
        featuredIn: '',
        featuredLink: '#',
        view: '',
        love: '',
        feedback: '',
        buildWith: [
          {
            content: '',
          },
          {
            content: '',
          },
          {
            content: '',
          },
        ],
      },
    ],
  },
  {
    title: 'BEER TIME?',
    portfolioItem: [
      {
        title: 'JS Practice Site',
        description:
          'This is my ongoing JavaScript practice site, dedicated to — BEER.',
        image: PortfolioImage6,
        link: 'https://backroad.space',
        featuredIn: 'Built With',
        featuredLink: 'https://builtwith.com/backroad.space',
        view: '',
        love: '',
        feedback: '',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Momentjs',
          },
          {
            content: 'APIs',
          },
        ],
      },
      {
        title: '',
        description: '',
        image: PortfolioImage6,
        link: '#',
        featuredIn: '',
        featuredLink: '#',
        view: '',
        love: '',
        feedback: '',
        buildWith: [
          {
            content: '',
          },
          {
            content: '',
          },
          {
            content: '',
          },
        ],
      },
    ],
  },
];
