import Portfolio from "../assets/portfolio.png";
import CV from "../assets/cvbuilder.png";
import Weather from "../assets/weather.png";
import Currency from "../assets/currency.png";
import Todo from "../assets/todo.png";
import Ovs from "../assets/ovs.jpg";
import Amazon from "../assets/amazon.png";

export const HERO=`Hi, I’m Rajat Singh, a B.Sc. (Hons.) Computer Science student, set to graduate in 2026. With skills in C++, Python, Java, and web development using ReactJS, Django, and Flask, I create dynamic and user-friendly applications. My design expertise with Figma and Canva adds a creative touch to my projects.

Explore my work to see how I turn ideas into impactful solutions. Let’s connect and create something great together!`
export const ABOUT=`Hi, I’m Rajat Singh, a B.Sc. (Hons.) Computer Science student, set to graduate in 2026, with a passion for building impactful technological solutions. I am proficient in programming languages like C++, Python, and Java, backed by a solid foundation in Data Structures and Algorithms (C++). My development expertise spans web technologies such as HTML, CSS, JavaScript, ReactJS, Django, and Flask, enabling me to craft innovative, efficient, and user-friendly applications. Creativity plays a significant role in my work, with experience in design tools like Figma and Canva to ensure visually appealing and functional interfaces. I’m constantly exploring new technologies and approaches, driven by the desire to learn, grow, and solve real-world challenges. Whether it’s coding, designing, or collaborating on impactful projects, I’m excited about making meaningful contributions to the tech world. Let’s connect and create something extraordinary together! `;
export const EXPERIENCES=[
    {
        year:"2024 - Present",
        role:"Design Lead",
        company:"GDG on campus Dyal Singh College",
        description:"Leading the design team to create engaging and user-friendly experiences for the campus community.",
        technologies: ["Canva", "Figma"],
    },
    {
        year:"October 2023 - 2024",
        role:"Tech Team Member",
        company:"Paws 'N' Tails",
        description:"As a tech team member, I created engaging social media content, including posts and reels, using tools like Figma and Adobe Suite. I focused on designing visually appealing materials and analyzing engagement to improve reach and interaction, enhancing the society's online presence.",
        technologies: ["Canva", "VN"],
    },
];

export const PROJECTS=[
    {
        title:"Portfolio Website",
        image:Portfolio,
        description:"A Responsive Portfolio Website built using React,Tailwind and framer Motion",
        technologies:["ReactJs", "TailwindCss","Framer Motion"],
    },
    {
        title:"Online Voting System",
        image:Ovs,
        description:"An online voting system built with HTML, CSS, and JavaScript for the frontend, Flask for the backend, and MySQL for the database ensures a secure and user-friendly platform for casting votes. The system allows users to register, log in, and vote in elections, with real-time updates and validation to prevent multiple voting. The Flask backend handles routing, authentication, and interaction with the MySQL database, storing user information and vote data securely. This setup offers a streamlined, accessible, and efficient voting experience.",
        technologies:["HTML", "CSS","JavaScript","Flask","MySql"],
    },
    {
        title:"Online CV Builder",
        image:CV,
        description:"A CV builder created with HTML, CSS, and JavaScript for the frontend, Flask for the backend, and MySQL for the database provides an interactive platform for users to generate professional resumes. Users can input personal details, education, work experience, and skills through a user-friendly interface. The Flask backend manages data processing and storage in the MySQL database, ensuring user information is securely saved. The system allows users to preview and download their customized CVs in various formats, offering a seamless and efficient resume creation experience.",
        technologies:["HTML", "CSS","JavaScript","Flask","MySql"],
    },
    {
        title:"Weather App",
        image:Weather,
        description:"A weather app built using React provides real-time weather updates by fetching data from APIs. It features a responsive interface where users can search for locations and view current weather conditions, forecasts, and temperature details, ensuring an engaging and dynamic user experience.",
        technologies:["ReactJs"],
    },
    {
        title:"To-Do List",
        image:Todo,
        description:"A to-do list application created with React offers users a simple and interactive way to manage tasks. Users can add, edit, delete, and mark tasks as completed, with real-time updates and a clean, intuitive design that enhances productivity and organization.",
        technologies:["ReactJs"],
    },
    {
        title:"Currency-Converter",
        image:Currency,
        description:"A currency converter built using HTML, CSS, and JavaScript provides a straightforward and responsive interface for users to input amounts and select currencies for conversion. JavaScript handles the logic by fetching real-time exchange rates from APIs and performing the conversion instantly on the client side. This setup ensures a fast and efficient user experience with no backend required",
        technologies:["HTML","CSS","JavaScript"],
    },
    {
        title:"Amazon Clone",
        image:Amazon,
        description:"An Amazon clone using only HTML and CSS provides a static layout that mimics the look and feel of Amazon's website. It includes structured HTML to create sections like the header, navigation bar, product listings, and footer. CSS is used to style these elements, ensuring a visually similar design with responsive features for different screen sizes, but without any interactive functionality.",
        technologies:["HTML","CSS"],
    },
]
export const CONTACT={
    address:"Nandgram , Ghaziabad",
    phoneNo:"+91 7838260050",
    email:"rajatsingh2774@gmail.com",
};
export const SOCIAL={
    linkedin:"https://www.linkedin.com/in/rajat-singh-6558aa294",
    github:"https://github.com/Rajat2774",
    twitter:"https://x.com/RAJAT_073?t=79ACVgXfCoWMhvVrMb3Tpw&s=09",
    insta:"https://www.instagram.com/rajat.singh.04?igsh=MW1jNmVwZXd3emEwag=="
}