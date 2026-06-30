import {
  BriefcaseBusiness,
  Camera,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  ShieldCheck,
  Wrench
} from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedin, FaMicrosoft, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss, SiTwilio } from 'react-icons/si';
import { GITHUB_PROFILE, INSTAGRAM_PHOTOGRAPHY, LINKEDIN_PROFILE } from './brand';
export { galleryItems } from './assets';
import { projectImages } from './assets';
import type {
  Certification,
  ContributionDay,
  GitHubRepo,
  GitLanguageStat,
  NavItem,
  Project,
  SkillCategory,
  SocialLink,
  Stat,
  TimelineItem
} from '@/types/site';

export const siteUrl = 'https://roynechombo.dev';

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Beyond Code', href: '/beyond-code' },
  { label: 'GitHub', href: '/#github' },
  { label: 'Contact', href: '/contact' }
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: GITHUB_PROFILE, icon: FaGithub },
  { label: 'LinkedIn', href: LINKEDIN_PROFILE, icon: FaLinkedin },
  { label: 'Instagram', href: INSTAGRAM_PHOTOGRAPHY, icon: FaInstagram },
  { label: 'Email', href: 'mailto:rnechombo@gmail.com', icon: FaMicrosoft }
];

export const stats: Stat[] = [
  {
    label: 'Projects Built',
    value: 12,
    suffix: '+',
    description: 'Products, prototypes, and problem-solving builds across software and digital media.'
  },
  {
    label: 'Years Learning',
    value: 4,
    suffix: '+',
    description: 'Continuous learning across engineering, support operations, and creative tools.'
  },
  {
    label: 'Technologies',
    value: 24,
    suffix: '+',
    description: 'Hands-on experience spanning frontend, backend, automation, and IT systems.'
  },
  {
    label: 'Hackathon Wins',
    value: 1,
    description: 'Recognition for turning ideas into meaningful, educational interactive experiences.'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    description: 'Writing reliable, maintainable software across multiple ecosystems.',
    icon: Code2,
    skills: ['Python', 'Java', 'C#', 'JavaScript']
  },
  {
    title: 'Frontend',
    description: 'Designing polished, responsive interfaces with clarity and motion.',
    icon: FaReact,
    skills: ['HTML5', 'CSS3', 'React', 'TailwindCSS']
  },
  {
    title: 'Backend',
    description: 'Building practical APIs and data-driven systems that support real operations.',
    icon: Database,
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs']
  },
  {
    title: 'AI & Automation',
    description: 'Applying automation and conversational interfaces to solve everyday business problems.',
    icon: Cpu,
    skills: ['FastAPI', 'Meta APIs', 'Twilio', 'AI']
  },
  {
    title: 'Photography & Creative',
    description: 'Bringing visual direction, composition, and storytelling into digital work.',
    icon: Camera,
    skills: ['Photography', 'Adobe Creative Suite', 'DaVinci Resolve', 'Graphic Design', 'Digital Content Creation']
  },
  {
    title: 'IT Support',
    description: 'Keeping people and systems productive through dependable technical support.',
    icon: Wrench,
    skills: ['Windows Administration', 'Hardware Installation', 'Software Installation', 'Network Troubleshooting', 'Technical Support']
  },
  {
    title: 'Tools',
    description: 'Modern collaboration, version control, and productivity tooling.',
    icon: BriefcaseBusiness,
    skills: ['Git', 'GitHub', 'Microsoft 365']
  }
];

export const projects: Project[] = [
  {
    id: 'easystock-pamusika',
    name: 'EasyStock Pamusika',
    description:
      'An AI-powered WhatsApp ERP system helping informal retailers manage inventory, sales, customer credit, and expenses through natural conversations.',
    technologies: ['Python', 'FastAPI', 'Meta APIs', 'Twilio', 'AI', 'Node.js', 'MongoDB'],
    status: 'Currently Building',
    githubUrl: GITHUB_PROFILE,
    imageSrc: projectImages['easystock-pamusika'],
    highlight: true
  },
  {
    id: 'easeintern',
    name: 'EaseIntern',
    description:
      'An internship management platform connecting university students with employers through a streamlined application and placement experience.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
    status: 'Prototype',
    githubUrl: GITHUB_PROFILE,
    imageSrc: projectImages.easeintern,
    highlight: true
  },
  {
    id: 'zimnest',
    name: 'ZimNest',
    description: 'A student accommodation platform integrating Google Maps and backend APIs to simplify housing discovery and decision-making.',
    technologies: ['JavaScript', 'Google Maps', 'REST APIs', 'MongoDB'],
    status: 'Product Concept',
    githubUrl: GITHUB_PROFILE,
    imageSrc: projectImages.zimnest,
    imageFit: 'contain'
  },
  {
    id: 'chimurenga-chronicle',
    name: 'Chimurenga Chronicle',
    description: 'A hackathon-winning educational Unity game teaching Zimbabwean history through interactive storytelling and gameplay.',
    technologies: ['Unity', 'C#', 'Game Design', 'Education'],
    status: 'Hackathon Winner',
    githubUrl: GITHUB_PROFILE,
    imageSrc: projectImages['chimurenga-chronicle'],
    imageFit: 'contain'
  }
];

export const experience: TimelineItem[] = [
  {
    title: 'Tech Support & Digital Assistant',
    organisation: 'Alice Machena Medical Centre',
    meta: 'Healthcare IT and digital operations',
    period: 'Recent experience',
    details: [
      'Installed and maintained hardware and software that supported day-to-day medical centre operations.',
      'Provided responsive IT support and troubleshooting for technical issues affecting staff productivity.',
      'Created promotional graphics and digital assets that improved communication and presentation.',
      'Helped improve operational efficiency by combining technical support with practical digital execution.'
    ]
  }
];

export const education: TimelineItem[] = [
  {
    title: 'Bachelor of Technology Honours in Computer Science',
    organisation: 'Harare Institute of Technology',
    meta: 'Current GPA: 8.26 / 10',
    period: 'Current',
    details: [
      'Computer Science student with a strong foundation in software engineering, systems thinking, and applied problem solving.'
    ]
  },
  {
    title: 'A Levels',
    organisation: 'Marondera High School',
    meta: 'Advanced level studies',
    period: 'Completed',
    details: ['Built the analytical and academic discipline that strengthened my path into engineering and technology.']
  },
  {
    title: 'O Levels',
    organisation: "St Faith's High School",
    meta: 'Ordinary level studies',
    period: 'Completed',
    details: ['Developed the learning discipline and broad academic base that shaped my technical ambition early on.']
  }
];

export const certifications: Certification[] = [
  {
    title: 'FreeCodeCamp Responsive Web Design',
    issuer: 'freeCodeCamp',
    takeaway: 'Demonstrates practical frontend fundamentals and a strong grounding in accessible web layouts.'
  },
  {
    title: 'FreeCodeCamp JavaScript',
    issuer: 'freeCodeCamp',
    takeaway: 'Validates problem solving, modern JavaScript thinking, and browser-based application logic.'
  },
  {
    title: 'Microsoft Learn C#',
    issuer: 'Microsoft Learn',
    takeaway: 'Shows fluency with typed programming concepts and the C# development ecosystem.'
  },
  {
    title: 'Unity Game Development',
    issuer: 'Unity learning track',
    takeaway: 'Reflects interactive design thinking and the ability to build engaging educational experiences.'
  },
  {
    title: 'Alison Digital Security',
    issuer: 'Alison',
    takeaway: 'Strengthens awareness of security-conscious digital practices and safer technology use.'
  }
];

export const creativeCategories = ['All', 'Photography', 'Portraits', 'Nature', 'Events', 'Cinematic Color Grading', 'Graphic Design'];

export const githubLanguageStats: GitLanguageStat[] = [
  { name: 'JavaScript', percentage: 34 },
  { name: 'Python', percentage: 27 },
  { name: 'TypeScript', percentage: 18 },
  { name: 'C#', percentage: 12 },
  { name: 'Java', percentage: 9 }
];

export const githubRepos: GitHubRepo[] = [
  {
    name: 'EasyStock Pamusika',
    description: 'AI-assisted inventory and sales operations for informal retail through WhatsApp.',
    language: 'Python',
    stars: 12,
    url: GITHUB_PROFILE,
    pinned: true
  },
  {
    name: 'EaseIntern',
    description: 'Placement workflow platform connecting students, institutions, and employers.',
    language: 'JavaScript',
    stars: 8,
    url: GITHUB_PROFILE,
    pinned: true
  },
  {
    name: 'ZimNest',
    description: 'Student accommodation discovery experience with map-enabled search.',
    language: 'JavaScript',
    stars: 6,
    url: GITHUB_PROFILE,
    pinned: true
  },
  {
    name: 'Chimurenga Chronicle',
    description: 'Educational Unity game teaching Zimbabwean history through interactive play.',
    language: 'C#',
    stars: 10,
    url: GITHUB_PROFILE,
    pinned: true
  },
  {
    name: 'FastAPI Utilities',
    description: 'Experiments and helpers for backend tooling, APIs, and automation workflows.',
    language: 'Python',
    url: GITHUB_PROFILE
  },
  {
    name: 'Creative Assets Lab',
    description: 'A sandbox for design systems, visual experiments, and UI direction.',
    language: 'TypeScript',
    url: GITHUB_PROFILE
  }
];

export const githubContributionDays: ContributionDay[] = Array.from({ length: 182 }, (_, index) => {
  const pattern = [0, 1, 2, 1, 3, 2, 4, 1, 0, 2, 3, 1, 4];
  return { level: pattern[index % pattern.length] as ContributionDay['level'] };
});

export const heroTechStrip = [
  { label: 'React', icon: FaReact },
  { label: 'Node.js', icon: FaNodeJs },
  { label: 'Python', icon: FaPython },
  { label: 'Express', icon: SiExpress },
  { label: 'MongoDB', icon: SiMongodb },
  { label: 'Tailwind', icon: SiTailwindcss },
  { label: 'Twilio', icon: SiTwilio }
];

export const credentials = [
  {
    icon: GraduationCap,
    title: 'Computer Science Student',
    description: 'Studying at Harare Institute of Technology while building software, AI systems, and thoughtful digital products.'
  },
  {
    icon: ShieldCheck,
    title: 'AI Builder',
    description: 'Exploring intelligent systems that solve business problems with practical automation and product thinking.'
  },
  {
    icon: Camera,
    title: 'Hackathon Winner',
    description: 'Recognized for turning ideas into compelling, functional experiences with both technical depth and creative intent.'
  }
];
