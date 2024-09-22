import {
    full,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    java,
    viit,
    ias,
    blog,
    conway,
    forecasting,
    taskql,
    dista,
    gcp,
    bigquery,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developement",
      icon: web,
    },
    {
      title: "Backend Developement",
      icon: backend,
    },
    {
      title: "Full Stack Development",
      icon: full,
    },
    {
      title: "Java Development",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Java",
      icon: java
    },
    {
      name: "GCP",
      icon: gcp
    },
    {
      name: "Google BigQuery",
      icon: bigquery
    }
  ];
  
  const experiences = [
    {
      title: "B.tech in Computer Engineering",
      company_name: "Vishwakarma Institute of Information Technology,Pune",
      icon: viit,
      iconBg: "#383E56",
      date: "2019-2023",
      points: [
        "9.59 CGPA"
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "Integral Ad Science",
      icon: ias,
      iconBg: "#383E56",
      date: "July-2022 - May-2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Dista Technologies",
      icon: dista,
      iconBg: "#E6DEDD",
      date: "Nov 2024 - Present",
      points: [
        "Liase with clients to develop tailored solutions,collaborating across teams to understand data and reporting requirements.",
        "Writing production grade and optimized GoogleSQL queries in Bigquery for efficiently meeting the requirements of clients ranging from leading Banking partners to delivery platforms.",
        "Ensure data accuracy through testing,validation and providing actionable insights based on thorough data analysis,maintaining comprehensive documentation for data processes,queries and solutions to support ongoing project and team needs."
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Testimonial 1",
      name: "Name 1",
      designation: "Designation 1",
      company: "Company 1",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Testimonial 2",
      name: "Name 2",
      designation: "Designation 2",
      company: "Company 3",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Testimonial 3",
      name: "Name 3",
      designation: "Designation 3",
      company: "Company 4",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "MERN Blog Web Application",
      description:
        "Web-based platform that allows users to write and edit blogs and read blogs by other authors.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "NodeJS",
          color: "pink-text-gradient",
        },
      ],
      image: blog,
      source_code_link: "https://github.com/SahilPandhade/mern-blog-project",
    },
    {
      name: "Conway's Game of Life",
      description:
        "Visual Implementation of Cellular automaton Conway's Game of Life with classic rules of Overpopulation,underpopularion ,reproduction",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Typescript",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: conway,
      source_code_link: "https://sahilpandhade.github.io/conways-game-of-life/",
    },
    {
      name: "Weather forecasting App",
      description:
        "Weather forecasting application that gives weather information using OpenWeatherAPI with a Globe in ThreeJS with location marked on.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Typescript",
          color: "green-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "pink-text-gradient",
        },
      ],
      image: forecasting,
      source_code_link: "https://not-another-weather-app.onrender.com/",
    },
    {
      name: "TaskQL",
      description:
        "Super-charge your productivity with TaskQL- a Task Management web application built with MERN Stack along with GraphQL",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Typescript",
          color: "green-text-gradient",
        },
        {
          name: "GraphQL",
          color: "pink-text-gradient",
        },
        {
          name: "MERN",
          color: "orange-text-gradient",
        },
      ],
      image: taskql,
      source_code_link: "https://taskql-frontend.onrender.com",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };