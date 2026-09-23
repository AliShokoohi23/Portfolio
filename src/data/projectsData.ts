import reactivitiesImg from "../Assets/Reactivities.png";
import dslImg from "../Assets/dsl.png";
import expensesManagementImg from "../Assets/expensesManagement.png";
import GPT3 from "../Assets/GPT-3.png";
import vgaESP32Img from "../Assets/VGAESP32.png";
import dataScienceFinalProjectImg from "../Assets/dataScience.png";
import computerSecurityImg from "../Assets/computerSecurity.png";
import tradingAlgorithmImg from "../Assets/tradingAlgorithm.png";
import findCommonFollowersImg from "../Assets/findCommonFollowers.png";

import dadfarLogo from "../Assets/Projects/dadfar/logo.png";
import dadfarScreen1 from "../Assets/Projects/dadfar/screen1.jpg";
import dadfarScreen2 from "../Assets/Projects/dadfar/screen2.jpg";
import dadfarScreen3 from "../Assets/Projects/dadfar/screen3.jpg";
import dadfarCalc1 from "../Assets/Projects/dadfar/calc1.jpg";

import fieldopsDesign from "../Assets/Projects/fieldops/design.jpg";

import convertappLogo from "../Assets/Projects/convertapp/logo.png";
import convertappScreen1 from "../Assets/Projects/convertapp/screen1.jpg";
import convertappScreen2 from "../Assets/Projects/convertapp/screen2.jpg";

import dadfarVideo from "../Assets/Projects/dadfar/demo.mp4";

import fieldopsLogo from "../Assets/Projects/fieldops/logo.png";
import concertifyCover from "../Assets/Projects/concertify/cover.jpg";
import eventifyCover from "../Assets/Projects/eventify/cover.jpg";
import iustlcCover from "../Assets/Projects/iustlc/cover.jpg";

export interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  extendedDescription: string[];
  tags: string[];
  ghLink?: string;
  demoLink?: string;
  mainImage: string;
  media: ProjectMedia[];
}

export const projectsData: Project[] = [
  {
    id: "srlk-fieldops",
    title: "SRLK FieldOps",
    shortDescription: "A cross-platform field operations management platform for tracking and managing field staff activities.",
    extendedDescription: [
      "SRLK FieldOps is a comprehensive field operations management platform designed to track and manage staff activities in real-time.",
      "It features continuous GPS tracking, a multi-level task workflow engine, and digital evidence collection allowing staff to upload photos, videos, and audio from the field.",
      "The app includes a robust offline mode with automatic synchronization when connectivity is restored, ensuring no data is lost.",
      "A centralized admin dashboard provides supervisors with tools for task assignment, monitoring, and reporting."
    ],
    tags: ["Flutter", "Node.js", "Firebase", "Google Maps API", "Push Notifications"],
    mainImage: fieldopsLogo,
    media: [
      { type: 'image', url: fieldopsDesign, caption: 'System Architecture & Design' }
    ]
  },
  {
    id: "image-optimizer",
    title: "Image Optimizer & Converter",
    shortDescription: "A mobile application for batch compressing and converting images across formats with an intuitive UI.",
    extendedDescription: [
      "This cross-platform mobile application allows users to compress and convert their images locally on their device.",
      "It supports batch processing, allowing entire gallery selections to be optimized simultaneously.",
      "Users get a real-time compression preview to compare quality versus file size before saving.",
      "The application is built using the BLoC pattern for robust state management and includes an ad-supported free tier."
    ],
    tags: ["Flutter", "BLoC", "Dart", "Image Processing", "Google Ads"],
    mainImage: convertappLogo,
    media: [
      { type: 'image', url: convertappScreen1, caption: 'App Interface' },
      { type: 'image', url: convertappScreen2, caption: 'Compression Preview' }
    ]
  },
  {
    id: "dadfar",
    title: "Dadfar — Legal Platform",
    shortDescription: "A comprehensive legal research platform with a Django backend, Flutter app, and web scraper.",
    extendedDescription: [
      "Dadfar is a complete legal ecosystem serving both law professionals and citizens.",
      "It features a searchable law database, complex legal calculators (such as inheritance and cost calculators), and exam preparation tools.",
      "The platform is powered by a Django REST API backend and a PostgreSQL database.",
      "A custom web scraper/crawler automatically indexes thousands of legal documents to keep the database up to date."
    ],
    tags: ["Django", "Python", "Flutter", "PostgreSQL", "REST API", "Web Scraping"],
    mainImage: dadfarLogo,
    media: [
      { type: 'video', url: dadfarVideo, caption: 'App Demo Video' },
      { type: 'image', url: dadfarScreen1, caption: 'Home Screen' },
      { type: 'image', url: dadfarScreen2, caption: 'Law Search' },
      { type: 'image', url: dadfarScreen3, caption: 'Document Viewer' },
      { type: 'image', url: dadfarCalc1, caption: 'Legal Calculator' }
    ]
  },
  {
    id: "concertify",
    title: "Concertify",
    shortDescription: "A concert ticket aggregation platform consolidating listings from multiple sources.",
    extendedDescription: [
      "Concertify is a modern platform that consolidates concert ticket listings from multiple different sources into a single interface.",
      "It utilizes a custom web scraper to automate data collection.",
      "Built with a Clean Architecture approach in C# ASP.NET Core, it features comprehensive unit testing and CI/CD pipelines."
    ],
    tags: ["C#", "ASP.NET Core", "React", "TypeScript", "PostgreSQL", "Docker", "Swagger UI", "Entity Framework Core", "Unit Tests", "Clean Architecture"],
    ghLink: "https://github.com/4Achar-SE4031",
    mainImage: concertifyCover,
    media: []
  },
  {
    id: "eventify",
    title: "Eventify",
    shortDescription: "An event management platform allowing users to host and attend events with integrated chat.",
    extendedDescription: [
      "Eventify allows users to seamlessly host and attend events.",
      "It features an integrated chat system for event attendees to communicate.",
      "It also includes a full ticketing system for event entry management."
    ],
    tags: ["Python", "Django", "React", "JavaScript", "MySQL", "RESTful APIs", "CI/CD", "MUI", "Bootstrap"],
    ghLink: "https://github.com/SAD4022-XCode",
    mainImage: eventifyCover,
    media: []
  },
  {
    id: "reactivities",
    title: "Reactivities",
    shortDescription: "A full-stack social networking platform enabling event-based interactions.",
    extendedDescription: [
      "Reactivities is a full-stack social networking application focused on event-based interactions.",
      "It implements real-time messaging using SignalR, ensuring immediate communication between users.",
      "The app includes user authentication with JWT and handles image uploads directly to Cloudinary.",
      "The backend is built on .NET Core with Entity Framework, while the frontend uses React and TypeScript."
    ],
    tags: ["C#", ".NET", "Entity Framework", "PostgreSQL", "React.js", "TypeScript", "Semantic UI"],
    ghLink: "https://github.com/AliShokoohi23/Reactivities",
    mainImage: reactivitiesImg,
    media: [
      { type: 'image', url: reactivitiesImg, caption: 'Reactivities Platform' }
    ]
  },
  {
    id: "trading-algorithm",
    title: "Trading Algorithm",
    shortDescription: "A cryptocurrency portfolio optimization algorithm using time series analysis.",
    extendedDescription: [
      "This project developed a cryptocurrency portfolio optimization algorithm using advanced time series analysis.",
      "It implements the Black-Litterman model for sophisticated portfolio management.",
      "The trading strategy was enhanced using volatility prediction techniques to minimize risk and maximize returns."
    ],
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Backtrader", "Trading View", "Pine Script", "Matplot"],
    ghLink: "https://github.com/AliShokoohi23/Trading-Algorithm",
    mainImage: tradingAlgorithmImg,
    media: [
      { type: 'image', url: tradingAlgorithmImg, caption: 'Algorithm Performance Chart' }
    ]
  },
  {
    id: "computer-security",
    title: "Computer Security",
    shortDescription: "Implemented cryptographic algorithms for secure communication and authentication.",
    extendedDescription: [
      "This project focuses on the implementation of various cryptographic algorithms for secure communication.",
      "It includes practical applications of RSA, AES, and DES algorithms.",
      "A Qt-based GUI was developed to provide an interactive demonstration of encryption and decryption processes using OpenSSL."
    ],
    tags: ["Python", "Cryptography", "OpenSSL", "RSA", "AES", "Linux", "Bash Script", "Qt"],
    ghLink: "https://github.com/AliShokoohi23/Computer-Security",
    mainImage: computerSecurityImg,
    media: [
      { type: 'image', url: computerSecurityImg, caption: 'Security Suite Interface' }
    ]
  },
  {
    id: "gpt3-landing",
    title: "GPT3-Landing-Page",
    shortDescription: "A modern, responsive landing page for showcasing AI-powered GPT-3 features.",
    extendedDescription: [
      "A fully responsive and beautifully designed landing page created to showcase GPT-3 AI capabilities.",
      "The layout implements modern UI/UX principles including gradient designs, glassmorphism, and smooth scrolling animations.",
      "It is optimized for all screen sizes using a mobile-first approach."
    ],
    tags: ["React.js", "Bootstrap", "SCSS"],
    ghLink: "https://github.com/AliShokoohi23/GPT3-Landing-Page",
    demoLink: "https://gpt3-official-landing.vercel.app/",
    mainImage: GPT3,
    media: [
      { type: 'image', url: GPT3, caption: 'Landing Page' }
    ]
  },
  {
    id: "expenses-management",
    title: "Expenses-Management",
    shortDescription: "A web-based expense tracking application for personal and business finance management.",
    extendedDescription: [
      "A comprehensive expense tracking application to manage personal and business finances.",
      "It integrates budget forecasting and provides visualization tools to analyze spending habits.",
      "Data is persisted locally, and the interface is built with React and TypeScript for maximum reliability."
    ],
    tags: ["React", "TypeScript", "Vanilla CSS"],
    ghLink: "https://github.com/AliShokoohi23/Expenses-Management",
    demoLink: "https://smart-expenses-management.vercel.app/",
    mainImage: expensesManagementImg,
    media: [
      { type: 'image', url: expensesManagementImg, caption: 'Dashboard Overview' }
    ]
  },
  {
    id: "dsl",
    title: "DSL",
    shortDescription: "Designed a Domain-Specific Language (DSL) for automated data analysis.",
    extendedDescription: [
      "This project involved designing a custom Domain-Specific Language (DSL) specifically tailored for automated data analysis tasks.",
      "I developed the syntax and parsing logic using ANTLR to ensure user-friendly scripting.",
      "The parsed scripts are interpreted in Python using Pandas to execute complex data manipulation operations."
    ],
    tags: ["Python", "ANTLR", "Pandas", "AST Parsing"],
    ghLink: "https://github.com/AliShokoohi23/DSL",
    mainImage: dslImg,
    media: [
      { type: 'image', url: dslImg, caption: 'DSL Code Example' }
    ]
  },
  {
    id: "iust-lc",
    title: "IUST-LC-Final-Project",
    shortDescription: "Designed a Library management system digital logic circuit using Proteus.",
    extendedDescription: [
      "Designed a complete digital logic circuit for a Library Management System.",
      "The circuit utilizes sequential and combinational logic operations.",
      "It implements flip-flops and state machines for reliable data processing and was fully simulated in Proteus."
    ],
    tags: ["Proteus", "Logical Circuits"],
    ghLink: "https://github.com/AliShokoohi23/IUST-LC-Final-Project",
    mainImage: iustlcCover,
    media: []
  },
  {
    id: "vga-esp32",
    title: "VGA-ESP32",
    shortDescription: "An attendance system interface displayed via VGA using an ESP32 microcontroller.",
    extendedDescription: [
      "Developed an embedded attendance system interface that outputs directly to a VGA monitor using an ESP32 microcontroller.",
      "The system uses the LVGL library for rendering the graphical user interface.",
      "It implements MQTT communication for real-time synchronization between the ESP32 client and a central server."
    ],
    tags: ["ESP32", "Bitluni", "LVGL", "MQTT", "Arduino", "C++"],
    ghLink: "https://github.com/lAmiR1HosseiNl/VGA-ESP32",
    mainImage: vgaESP32Img,
    media: [
      { type: 'image', url: vgaESP32Img, caption: 'Hardware Setup' }
    ]
  },
  {
    id: "movie-predictor",
    title: "Data Science Final Project",
    shortDescription: "Implemented machine learning models to predict movie box office revenue.",
    extendedDescription: [
      "This data science project focuses on predicting movie box office revenue using machine learning.",
      "It includes comprehensive Exploratory Data Analysis (EDA) on large movie datasets to identify key trends.",
      "Models such as Random Forest Regressor and Linear Regression were trained and evaluated for predictive accuracy."
    ],
    tags: ["Python", "Pandas", "NumPy", "Seaborn", "Scikit-learn", "Matplotlib", "Plotly"],
    ghLink: "https://github.com/lAmiR1HosseiNl/Data_Science_Final_Project",
    mainImage: dataScienceFinalProjectImg,
    media: [
      { type: 'image', url: dataScienceFinalProjectImg, caption: 'Data Visualization' }
    ]
  },
  {
    id: "common-followers",
    title: "Find Common Followers",
    shortDescription: "A tool to analyze and find common followers between different GitHub profiles.",
    extendedDescription: [
      "A utility script that leverages the GitHub API to find overlapping followers between multiple GitHub accounts.",
      "Useful for community analysis, networking, and understanding open-source overlap."
    ],
    tags: ["GitHub API", "Python"],
    ghLink: "https://github.com/AliShokoohi23/Find-Common-Followers",
    mainImage: findCommonFollowersImg,
    media: [
      { type: 'image', url: findCommonFollowersImg, caption: 'Terminal Output' }
    ]
  }
];
