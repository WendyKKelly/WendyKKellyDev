import PortfolioImage1 from '../../public/image/portfolio-1.jpg';
import PortfolioImage2 from '../../public/image/portfolio-2.jpg';
import PortfolioImage3 from '../../public/image/portfolio-3.jpg';
import PortfolioImage4 from '../../public/image/portfolio-4.jpg';
import PortfolioImage5 from '../../public/image/portfolio-5.jpg';

import Step1 from '../../public/image/step-1.png';
import Step2 from '../../public/image/step-2.png';
import Step3 from '../../public/image/step-3.png';
import SkillIcon1 from '../../public/image/skill-1.svg';
import SkillIcon2 from '../../public/image/skill-2.svg';
import SkillIcon3 from '../../public/image/skill-3.svg';
import SkillIcon4 from '../../public/image/skill-4.svg';
export const SKILLS = [
  {
    title: 'Graphic Design',
    description:
      'Aristotle maintained the sharp distinction between science and the practical',
    icon: SkillIcon1,
    successRate: '90',
  },
  {
    title: 'UI/UX Design',
    description:
      'Aristotle maintained the sharp distinction between science and the practical',
    icon: SkillIcon2,
    successRate: '85',
  },
  {
    title: 'Web Application',
    description:
      'Aristotle maintained the sharp distinction between science and the practical',
    icon: SkillIcon3,
    successRate: '80',
  },
  {
    title: 'Mobile Application',
    description:
      'Aristotle maintained the sharp distinction between science and the practical',
    icon: SkillIcon4,
    successRate: '70',
  },
];
export const PROCESS_STEPS = [
  {
    image: Step1,
    title: '1. Research',
    description:
      'We work with you to understand user’s stories and validate your idea with real users using lean design sprints.',
  },
  {
    image: Step2,
    title: '2. Design',
    description:
      'Expanding on the insights gained, you’ll work closely with our design team to create an elegant design',
  },
  {
    image: Step3,
    title: '3. Build',
    description:
      'With our scrum-based agile methodology, you’ll receive iterative builds every two weeks, which gives you ',
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
        featuredIn: '',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
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
        image: PortfolioImage2,
        link: '#',
        featuredIn: '',
        featuredLink: '#',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
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
        featuredIn: '',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
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
        image: PortfolioImage1,
        link: '#',
        featuredIn: '',
        featuredLink: '#',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
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
        featuredIn: '',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
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
        image: PortfolioImage2,
        link: '#',
        featuredIn: '',
        featuredLink: '#',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
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
        link: '#',
        featuredIn: '',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
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
        image: PortfolioImage2,
        link: '#',
        featuredIn: '',
        featuredLink: '#',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
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
        featuredIn: '',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
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
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
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
