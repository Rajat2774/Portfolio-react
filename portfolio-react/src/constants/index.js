import Portfolio from "../assets/portfolio.png";
import CV from "../assets/cvbuilder.png";
import Weather from "../assets/weather.png";
import Currency from "../assets/currency.png";
import Amazon from "../assets/amazon.png";
import Knowlens from "../assets/knowlens_ss.jpg";
import customer from "../assets/customer.png"
import interview from "../assets/interview.jpg"
import vehicle from "../assets/vehicle.png"
import Spam from "../assets/spam.png"


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
        title:"Knowlens",
        image:Knowlens,
        description:`Developed a RAG Q&A system processing 130+ page documents with 95% accuracy, <3s query latency, and 10,000+
chunk capacity using LangChain, FAISS vector store, and optimized chunking (1500/300 tokens) for 40% improved retrieval
precision.
Implemented custom prompt engineering reducing hallucinations by 60% and achieving 98% source attribution accuracy
through retrieval-aware prompts and semantic search optimization.`,
        technologies:["Langchain", "Vector Databases","Python","Streamlit"],
    },
    {
        title:"RAG Customer Support Chatbot",
        image:customer,
        description:`Architected a RAG-powered customer support chatbot processing 27,000+ support queries with 90%+ accuracy using
SentenceTransformer embeddings (all-MiniLM-L6-v2) and FAISS vector store; implemented a hybrid response system with
a 0.80 similarity threshold for direct answers, reducing LLM API calls by 60% while maintaining response latency under 2
seconds.
Deployed a production-grade chatbot on Streamlit integrating Groq LLM (Gemma-2-9B-IT) with a semantic search pipeline;
optimized retrieval using 384-dimensional embeddings and FAISS indexing with logarithmic time complexity over 27,000+
vectors, achieving 95% context relevance with session-based chat history management.`,
        technologies:["Langchain", "Vector Database","Streamlit","Python"],
    },
    {
        title:"Interview Trainer Agent",
        image:interview,
        description:`Engineered production RAG system on IBM watsonx.ai using Mistral-Large and ReAct framework; implemented semantic
chunking and cosine similarity retrieval achieving 90%+ context accuracy across 50+ job roles.
• Developed interview preparation agent with end-to-end RAG pipeline (vectorization, top-k retrieval, LLM generation);
deployed via watsonx Agent Lab reducing prep time by 60% and hallucinations by 70%.`,
        technologies:["IBM cloud", "IBM Watsonx","ReAct (Reason + Act)"],
    },
    {
        title:"Vehicle Insurance MLOps Pipeline",
        image:vehicle,
        description:`Architected end-to-end MLOps system with CI/CD using GitHub Actions, reducing deployment time to 15 minutes
• Implemented automated training/validation workflows with DVC and AWS S3; deployed containerized Flask API on EC2
• Built comprehensive logging and monitoring with MongoDB achieving 99.5% uptime and ¡200ms latency for 1000+ daily predictions`,
        technologies:["Python","Flask","Scikit-learn","Pandas","NumPy","MongoDB Atlas","AWS S3, EC2, IAM, ECR","Docker","GitHub Actions"],
    },
    {
        title:"Spam Detection with DVC MLOps",
        image:Spam,
        description:`Developed NLP pipeline with TF-IDF and ensemble models achieving 97.2% accuracy on 5.5K messages
Implemented reproducible workflows using DVC/DVCLive for experiment tracking across 50+ runs; configured AWS S3 for artifact
management
Automated hyperparameter optimization improving F1-score from 0.89 to 0.96; established CI/CD with automated testing`,
        technologies:["DVC/DVCLive","AWS S3"],
    },
    {
        title:"Developer Portfolio (React)",
        image:Portfolio,
        description:`Built a responsive portfolio using React, Tailwind CSS, and modern UI practices.
Improved page load time by 40% through optimized components and lazy loading.
Deployed using Vercel with CI-enabled builds.`,
        technologies:["React","Framer Motion","Tailwind CSS"],
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