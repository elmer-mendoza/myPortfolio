// import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import { DiSass } from 'react-icons/di';
import { 
  SiPostman,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiAdobephotoshop,
  SiFigma,
  SiJquery,
  SiRedux,
  SiGraphql,
  SiMaterialui,
  SiWordpress,
  SiPython

 } from 'react-icons/si';
 import  {DiSass} from 'react-icons/di';

 import { 
  AiOutlinePaperClip,
  AiOutlineBook,
  AiOutlineProject,
  AiOutlineBuild
} from "react-icons/ai"
 
//  export const social = [
//    {
//      id: 1,
//      url: 'https://www.twitter.com',
//      icon: <FaFacebook />,
//     },
//   {
//     id: 2,
//     url: 'https://www.twitter.com',
//     icon: <FaTwitter />,
//   },
//   {
//     id: 3,
//     url: 'https://www.twitter.com',
//     icon: <FaLinkedin />,
//   },
//   {
//     id: 4,
//     url: 'https://www.twitter.com',
//     icon: <FaBehance />,
//   },
// ];
 export const menus = [
   {
     id: 1,
     title: 'projects',
     icon: <AiOutlinePaperClip/>,
     link:"link",
     submenus:[
      {
        title:"sub1",
        link:"link"
      },
      {
        title:"sub2",
        link:"link"
      },
      {
        title:"sub3",
        link:"link"
      },
     ]
    },
   {
     id: 2,
     title: 'education',
     icon: <AiOutlineBook />,
     link:"link",
     submenus:[
      {
        title:"sub4",
        link:"link"
      },
      {
        title:"sub5",
        link:"link"
      },
      {
        title:"sub6",
        link:"link"
      },
     ]
    },
   {
     id: 3,
     title: 'jobs',
     icon: <AiOutlineProject/>,
     link:"link",
    },
   {
     id: 4,
     title: 'skills',
     icon: <AiOutlineBuild/>,
     link:"link",
     submenus:[
      {
        title:"sub7",
        link:"link"
      },
      {
        title:"sub8",
        link:"link"
      },
      {
        title:"sub9",
        link:"link"
      },
     ]
    },
  
];


export const skills = [
  {
    id: 1,
    name: 'Javascript',
    icon: <SiJavascript />,
  },
  {
    id: 2,
    name: 'HTML5',
    icon: <SiHtml5 />,
  },
  {
    id: 3,
    name: 'CSS/SCSS',
    icon: <SiCss3 />,
  },
  {
    id: 5,
    name: 'ReactJS',
    icon: <SiReact />,
  },
  {
    id: 4,
    name: 'Bootstrap',
    icon: <SiBootstrap />,
  },
  {
    id: 12,
    name: 'Redux',
    icon: <SiRedux />,
  },
  {
    id: 7,
    name: 'NodeJs',
    icon: <SiNodedotjs />,
  },
  {
    id: 8,
    name: 'MongoDB',
    icon: <SiMongodb />,
  },
  {
    id: 9,
    name: 'Postman',
    icon: <SiPostman />,
  },
  {
    id: 10,
    name: 'jQuery',
    icon: <SiJquery />,
  },
  {
    id: 11,
    name: 'Figma',
    icon: <SiFigma />,
  },
  {
    id: 12,
    name: 'Photoshop',
    icon: <SiAdobephotoshop />,
  },
  {
    id: 12,
    name: 'Graphql',
    icon: <SiGraphql />,
  },
  {
    id: 12,
    name: 'Sass',
    icon: <DiSass/>,
  },
  {
    id: 12,
    name: 'Material-Ui',
    icon: <SiMaterialui/>,
  },
  {
    id: 13,
    name: 'WordPress',
    icon: <SiWordpress/>,
  },
  {
    id: 14,
    name: 'Python',
    icon: <SiPython/>,
  },
];