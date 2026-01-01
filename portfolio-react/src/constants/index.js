import Portfolio from "../assets/portfolio.png";
import CV from "../assets/cvbuilder.png";
import Weather from "../assets/weather.png";
import Currency from "../assets/currency.png";
import Todo from "../assets/todo.png";
import Ovs from "../assets/ovs.jpg";
import Amazon from "../assets/amazon.png";
import Book from "../assets/Book.png"

export const HERO = `Passionate about AI, Machine Learning, and Data Science, I'm a B.Sc. (Hons.) Computer Science student graduating in 2026, skilled in Python, C++, and Java with a strong foundation in Data Structures and Algorithms.

I specialize in building intelligent systems using LLMs, NLP, and RAG architectures, alongside scalable full-stack applications with ReactJS, Django, Flask, and modern web technologies. Experienced in MLOps workflows with Docker, AWS, and CI/CD pipelines, I focus on deploying production-ready AI solutions that drive real-world impact.
    
Curious, growth-minded, and driven by innovation — I love transforming ideas into intelligent, scalable products.
Let's connect and create something extraordinary together!`;
export const ABOUT = `Hi, I'm Rajat Singh — a B.Sc. (Hons.) Computer Science student graduating in 2026, passionate about Artificial Intelligence, Machine Learning, and building intelligent systems that solve real-world problems.

I specialize in AI/ML engineering with hands-on experience in LLMs, RAG systems, NLP pipelines, and MLOps workflows. Proficient in Python, C++, and Java with a strong foundation in Data Structures and Algorithms, I've built production-grade solutions including conversational AI agents, document QA systems, and predictive analytics platforms.

My full-stack development skills span ReactJS, Flask, FastAPI, Django, and modern web technologies, enabling me to create end-to-end applications — from intelligent backends with vector databases to responsive, user-friendly interfaces. Experienced with Docker, AWS, CI/CD, and cloud deployment, I focus on building scalable, production-ready systems.

Continuous learner, problem solver, and impact-driven builder — I'm always exploring new technologies and seeking opportunities to create meaningful solutions.

Let's collaborate and build something innovative together!`;
export const EXPERIENCES=[
    {
        year:"July 2025 - August 2025",
        role:"AI and Cloud Intern",
        company:"Edunet Foundation",
        description:"Developed intelligent AI applications using IBM Watson, Watson Assistant, and IBM Cloud. Built conversational AI systems with context management, intent classification, and entity recognition. Integrated AI models with enterprise workflows and cloud infrastructure.",
        technologies: ["IBM Watson","Watson Assistant","IBM Cloud","Machine Learning"],
    },
    {
        year:"July 2025 - August 2025",
        role:"Machine Learning Intern",
        company:"Future Interns",
        description:"Designed and deployed AI-powered chatbots with multilingual NLP capabilities using Dialogflow and OpenAI APIs. Implemented sentiment analysis, named entity recognition, and text generation models. Delivered prototypes with 90%+ user satisfaction scores.",
        technologies: ["Scikit-Learn", "Tensorflow","Langchain","NLP"],
    },
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
        title:"Book Recommender System",
        image:Book,
        description:`Welcome to our Book Recommendation Platform – a user-friendly system built to help readers discover great books effortlessly.Displays the Top 50 most popular books, ranked by average rating.Popularity is derived from the Book Recommendation Dataset on Kaggle, combining user ratings to highlight the most loved titles.
                    Search-Based Personalized Recommendations:
                    Enter the title of a book you like.
                    The platform uses Collaborative Filtering to recommend 8 similar books.
                    Behind the scenes, it calculates the Euclidean distance between the selected book and all others based on user ratings.
                    The 8 most similar titles (with the shortest distances) are returned as recommendations.Welcome`,
        technologies:["Machine Leanring", "Scikit-Learn","Python","Pandas","Matplotlib","Numpy","Kaggle"],
    },
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