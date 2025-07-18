import { TrendingUp, Award, Users, Code } from 'lucide-react';
import {
  PersonalInfo,
  WorkExperience,
  Project,
  SkillCategory,
  Education,
  StatItem
} from '../types/portfolio.types';

export const personalInfo: PersonalInfo = {
  name: 'Allan Michael Shivji',
  title: 'Full Stack Developer',
  email: 'allanmshj@gmail.com',
  phone: '551-227-0064',
  location: 'United States',
  linkedin: 'https://www.linkedin.com/in/allan-shivji-a14a18a7/',
  github: 'https://github.com/allanshivji'
};

export const workExperience: WorkExperience[] = [
  {
    title: 'SOFTWARE DEVELOPER',
    company: 'Aggio, LLC',
    location: 'St. Louis, MO',
    duration: 'August 2020 - Present',
    achievements: [
      'Developed scalable full-stack application using React, TypeScript, Material-UI, and Redux, ensuring high performance and seamless user experiences for the poultry and veterinary industries.',
      'Architected and implemented micro frontend-based UI, enabling modular and maintainable application structures.',
      'Optimized API performance by designing and improving GraphQL endpoints, reducing response times by 35%.',
      'Created Python scripts to automate billing reports using Apache Airflow, streamlining internal processes.',
      'Enhanced web accessibility (WCAG compliance) and performance optimization for front-end applications.',
      'Led unit and integration testing using Jest, Cypress, and React Testing Library, reducing bugs by 40%.',
      'Mentored junior developers and conducted code reviews, fostering growth within the development team.'
    ]
  },
  {
    title: 'SOFTWARE SPECIALIST',
    company: 'eClinicalWorks',
    location: 'Westborough, MA',
    duration: 'June 2017 - July 2018',
    achievements: [
      'Developed front-end features using JavaScript, HTML5 and CSS3, improving software usability for US hospitals.',
      'Customized and optimized complex database queries in MySQL for thousands of patient records.',
      'Resolved server-side issues using Node.js, ensuring smooth system functionality and reduced downtime.',
      'Conducted thorough software testing using Chai and Mocha, enhancing code reliability.'
    ]
  }
];

export const projects: Project[] = [
  {
    title: 'Ask Overflow',
    url: 'https://github.com/allanshivji/webDev2FinalProject',
    description:
      'A Q&A web application for technical questions with real-time interaction capabilities.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'Firebase'],
    highlights: [
      'Team collaboration',
      'Responsive UI',
      'Redis caching optimization'
    ]
  },
  {
    title: 'Food Diaries',
    url: 'https://github.com/allanshivji/CS546_FoodDiaries',
    description:
      'Recipe-sharing platform with dynamic user interface and scalable backend architecture.',
    technologies: ['Node.js', 'Express.js', 'Handlebars.js', 'MongoDB'],
    highlights: ['CRUD operations', 'Scalable architecture', 'Team development']
  },
  {
    title: 'Resort Booking App',
    url: 'https://github.com/allanshivji/react_resortWebsite',
    description:
      'A resort booking platform with dynamic filtering for room types, capacity, and pricing.',
    technologies: [
      'React',
      'React Router',
      'Contentful',
      'Styled Components',
      'JavaScript',
      'HTML',
      'CSS'
    ],
    highlights: [
      'CMS integration via Contentful for dynamic data',
      'Room filtering based on multiple parameters',
      'Styled Components for scoped styling'
    ]
  },
  {
    title: 'React YouTube App',
    url: 'https://github.com/allanshivji/React_YoutubeApp',
    description:
      'A YouTube video search and player app with real-time search using YouTube Data API.',
    technologies: [
      'React',
      'YouTube Data API',
      'Axios',
      'JavaScript',
      'HTML',
      'CSS Modules'
    ],
    highlights: [
      'Debounced search functionality',
      'Responsive video grid and player view',
      'Reusable UI components'
    ]
  },
  {
    title: 'React Pokémon Explorer',
    url: 'https://github.com/allanshivji/lab3_ReactPokemon',
    description:
      'A Pokémon explorer app that displays Pokémon images and stats using PokéAPI.',
    technologies: [
      'React',
      'PokéAPI',
      'JavaScript',
      'React Hooks',
      'HTML',
      'CSS'
    ],
    highlights: [
      'Searchable and paginated Pokémon list',
      'Dynamic image rendering from API',
      'Component-based architecture'
    ]
  },
  {
    title: 'Fetch the Dogs',
    url: 'https://github.com/allanshivji/fetch_the_dogs_data_challenge',
    description:
      'A simple dog image gallery using a public Dog API to fetch and display random breeds.',
    technologies: ['React', 'REST API', 'JavaScript', 'HTML', 'CSS'],
    highlights: [
      'Dynamic API image fetching',
      'Interactive gallery view',
      'Clean and accessible UI'
    ]
  },
  {
    title: 'Data Visualization Dashboard',
    url: 'https://github.com/allanshivji/dataVisualizationBarGraph',
    description:
      'Interactive bar chart visualizing USD vs. INR growth from 1947-2018.',
    technologies: ['D3.js', 'JavaScript', 'HTML', 'CSS'],
    highlights: ['Hover effects', 'Data insights', 'Interactive design']
  },
  {
    title: 'Python ML',
    url: 'https://github.com/allanshivji/python-ml',
    description:
      'Machine learning experiments with data classification and clustering on sample datasets.',
    technologies: [
      'Python',
      'scikit-learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Jupyter Notebooks'
    ],
    highlights: [
      'Implemented decision tree, k-means, and logistic regression',
      'Visualized model results using Matplotlib',
      'Well-documented notebooks for reproducibility'
    ]
  },
  {
    title: 'IMDB Web Scraping',
    url: 'https://github.com/allanshivji/WebMining_Project',
    description:
      'Web scraping and text mining project analyzing online articles using NLP techniques.',
    technologies: [
      'Python',
      'BeautifulSoup',
      'scikit-learn',
      'NLTK',
      'Pandas',
      'Matplotlib'
    ],
    highlights: [
      'Web content scraping and cleaning',
      'TF-IDF and sentiment analysis',
      'Keyword extraction and topic modeling'
    ]
  },
  {
    title: 'Neon Text Animation',
    url: 'https://github.com/allanshivji/neonTEXT',
    description:
      'A glowing neon-style animated text effect using HTML and CSS only.',
    technologies: ['HTML', 'CSS', 'Keyframes Animation'],
    highlights: [
      'Pure CSS animation with glowing effects',
      'Keyframe-based pulse and flicker',
      'Typography focus with modern styling'
    ]
  }
];

export const skills: SkillCategory = {
  'Programming Languages': [
    'JavaScript (ES6+)',
    'TypeScript',
    'Python',
    'Java',
    'SQL'
  ],
  'Frontend Development': [
    'React.js',
    'Redux',
    'Material-UI',
    'HTML5',
    'CSS3/SASS',
    'Tailwind CSS',
    'Bootstrap',
    'D3.js',
    'Webpack'
  ],
  'Backend Development': ['Node.js', 'Express.js', 'REST APIs', 'GraphQL'],
  'Database Systems': ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB'],
  'DevOps & Hosting': [
    'Google Cloud Platform (GCP)',
    'AWS (Familarity)',
    'Firebase Hosting',
    'Netlify',
    'Docker',
    'GitHub Actions'
  ],
  Testing: [
    'Jest',
    'Cypress',
    'Mocha',
    'Chai',
    'React Testing Library',
    'Postman'
  ],
  'Tools & Workflows': [
    'Git',
    'GitHub',
    'Bitbucket',
    'Agile',
    'CI/CD',
    'ESLint',
    'Prettier',
    'VS Code'
  ]
};

export const education: Education[] = [
  {
    degree: 'Master of Science, Computer Science',
    institution: 'Stevens Institute of Technology',
    location: 'Hoboken, NJ',
    graduation: 'May 2020',
    gpa: '3.93'
  },
  {
    degree: 'Bachelor of Science, Computer Science',
    institution: 'University of Mumbai',
    location: 'Mumbai, India',
    graduation: 'May 2017',
    gpa: '3.20'
  }
];

export const aboutStats: StatItem[] = [
  {
    icon: <TrendingUp className='text-blue-400' size={24} />,
    title: 'Performance',
    value: '35% improvement'
  },
  {
    icon: <Award className='text-purple-400' size={24} />,
    title: 'Quality',
    value: '40% bug reduction'
  },
  {
    icon: <Users className='text-green-400' size={24} />,
    title: 'Leadership',
    value: 'Team mentoring'
  },
  {
    icon: <Code className='text-orange-400' size={24} />,
    title: 'Innovation',
    value: 'Micro frontends'
  }
];
