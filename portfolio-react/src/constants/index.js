import Portfolio from "../assets/portfolio.png";
import CV from "../assets/cvbuilder.png";
import Weather from "../assets/weather.png";
import Currency from "../assets/currency.png";
import Amazon from "../assets/amazon.png";
import Knowlens from "../assets/knowlens_ss.jpg";
import customer from "../assets/customer.png";
import interview from "../assets/interview.jpg";
import vehicle from "../assets/vehicle.png";
import Spam from "../assets/spam.png";
import frame from "../assets/frame.png";
import lockyt from "../assets/lockyt.png";

export const HERO = `AI/ML Engineer and Computer Science student (B.Sc. Hons., 2026) specializing in LLMs, RAG architectures, and NLP pipelines. I build intelligent, production-ready systems — from conversational AI agents to end-to-end MLOps workflows.

Proficient in Python, C++, and Java with strong DSA fundamentals. Experienced across the full stack with React, FastAPI, Django, Docker, and AWS.`;
export const ABOUT = `I'm Rajat Singh — an AI/ML engineer who turns ideas into intelligent, production-grade software.

My core focus is building systems powered by large language models, retrieval-augmented generation, and semantic search. I've shipped document QA platforms, customer support chatbots, and predictive analytics pipelines — each optimized for accuracy, latency, and scale.

On the engineering side, I work across the full stack: React frontends, Python backends (FastAPI, Flask, Django), vector databases, and cloud infrastructure on AWS with Docker and CI/CD.

Always learning, always building.`;
export const EXPERIENCES = [
  {
    year: "July 2025 - August 2025",
    role: "AI and Cloud Intern",
    company: "Edunet Foundation",
    description:
      "Developed intelligent AI applications using IBM Watson, Watson Assistant, and IBM Cloud. Built conversational AI systems with context management, intent classification, and entity recognition. Integrated AI models with enterprise workflows and cloud infrastructure.",
    technologies: [
      "IBM Watson",
      "Watson Assistant",
      "IBM Cloud",
      "Machine Learning",
    ],
  },
  {
    year: "July 2025 - August 2025",
    role: "Machine Learning Intern",
    company: "Future Interns",
    description:
      "Designed and deployed AI-powered chatbots with multilingual NLP capabilities using Dialogflow and OpenAI APIs. Implemented sentiment analysis, named entity recognition, and text generation models. Delivered prototypes with 90%+ user satisfaction scores.",
    technologies: ["Scikit-Learn", "Tensorflow", "Langchain", "NLP"],
  },
  {
    year: "2024 - 2026",
    role: "Design Lead",
    company: "GDG on campus Dyal Singh College",
    description:
      "Leading the design team to create engaging and user-friendly experiences for the campus community.",
    technologies: ["Canva", "Figma"],
  },
  {
    year: "October 2023 - 2024",
    role: "Tech Team Member",
    company: "Paws 'N' Tails",
    description:
      "As a tech team member, I created engaging social media content, including posts and reels, using tools like Figma and Adobe Suite. I focused on designing visually appealing materials and analyzing engagement to improve reach and interaction, enhancing the society's online presence.",
    technologies: ["Canva", "VN"],
  },
];

export const PROJECTS = [
  {
    title: "FrameForge",
    image: frame,
    tagline: "Natural language to Manim animations",
    description:
      "Type a prompt, get a polished MP4 in under 60 seconds. Dual-path architecture serves common prompts from a template cache while novel requests go through AI code generation, auto-fix, and render.",
    technologies: ["Python", "React", "FastAPI", "Supabase"],
    status: "live",
    metric: { label: "Render time", value: "<60s" },
    demo: "https://frameforgeai.vercel.app/",
    code: "https://github.com/Rajat2774/FrameForge",
  },
  {
    title: "Lockyt",
    image: lockyt,
    tagline: "Zero-knowledge password manager",
    description:
      "Client-side AES-256 encryption ensures your master password never leaves the browser. Syncs encrypted vaults across devices via Firebase — even a database breach exposes only ciphertext.",
    technologies: ["React", "Firebase", "Firestore"],
    status: "live",
    metric: { label: "Encryption", value: "AES-256" },
    demo: "https://lockyt.vercel.app/",
    code: "https://github.com/Rajat2774/Password-manager",
  },
  {
    title: "Knowlens",
    image: Knowlens,
    tagline: "Document-grounded Q&A with RAG",
    description:
      "RAG system processing 130+ page documents with 95% accuracy and <3s latency. Custom prompt engineering reduced hallucinations by 60% with 98% source attribution.",
    technologies: ["Langchain", "Vector Databases", "Python", "Streamlit"],
    status: "live",
    metric: { label: "Accuracy", value: "95%" },
    demo: "https://knowlens.streamlit.app/",
    code: "https://github.com/Rajat2774/Document-Grounded-Q-A-System",
  },
  {
    title: "RAG Support Bot",
    image: customer,
    tagline: "AI customer support with semantic search",
    description:
      "Handles 27,000+ support queries at 90%+ accuracy. Hybrid retrieval with a 0.80 similarity threshold cuts LLM API calls by 60% while keeping latency under 2 seconds.",
    technologies: ["Langchain", "Vector Database", "Streamlit", "Python"],
    status: "live",
    metric: { label: "Queries", value: "27K+" },
    demo: "https://customerbotrag.streamlit.app/",
    code: "https://github.com/Rajat2774/RAG-Chatbot",
  },
  {
    title: "Interview Trainer",
    image: interview,
    tagline: "AI interview prep agent on IBM watsonx",
    description:
      "ReAct-based agent on watsonx.ai with semantic chunking and cosine similarity retrieval. Covers 50+ job roles, reducing prep time by 60% and hallucinations by 70%.",
    technologies: ["IBM Cloud", "IBM Watsonx", "ReAct"],
    status: "live",
    metric: { label: "Job roles", value: "50+" },
  },
  {
    title: "Vehicle Insurance MLOps",
    image: vehicle,
    tagline: "End-to-end MLOps with CI/CD",
    description:
      "Automated training, validation, and deployment pipeline using GitHub Actions, DVC, and AWS. Containerized Flask API on EC2 with 99.5% uptime and <200ms prediction latency.",
    technologies: ["Python", "Flask", "Scikit-learn", "Docker", "AWS", "GitHub Actions"],
    status: "live",
    metric: { label: "Uptime", value: "99.5%" },
    code: "https://github.com/Rajat2774/Vehice-Insurance-Project-MLOps",
  },
  {
    title: "Spam Detection MLOps",
    image: Spam,
    tagline: "NLP pipeline with DVC experiment tracking",
    description:
      "TF-IDF + ensemble models achieving 97.2% accuracy on 5.5K messages. Reproducible workflows with DVC/DVCLive across 50+ experiment runs, deployed with CI/CD.",
    technologies: ["DVC/DVCLive", "AWS S3", "Scikit-learn"],
    status: "live",
    metric: { label: "F1-score", value: "0.96" },
    code: "https://github.com/Rajat2774/Spam-Detection-with-MLOps-DVC-DVCLive-AWS-S3-GitHub-CI-CD",
  },
  {
    title: "Portfolio",
    image: Portfolio,
    tagline: "This site — React + Framer Motion",
    description:
      "Responsive portfolio with animated sections, optimized lazy loading, and CI-enabled Vercel deployment. 40% faster page loads through component optimization.",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    status: "live",
    demo: "https://rajatsingh2774.vercel.app/",
    code: "https://github.com/Rajat2774/Portfolio-react",
  },
];
export const CONTACT = {
  address: "Nandgram , Ghaziabad",
  phoneNo: "+91 7838260050",
  email: "rajatsingh2774@gmail.com",
};
export const SOCIAL = {
  linkedin: "https://www.linkedin.com/in/rajat-singh-6558aa294",
  github: "https://github.com/Rajat2774",
  twitter: "https://x.com/RAJAT_073?t=79ACVgXfCoWMhvVrMb3Tpw&s=09",
  insta: "https://www.instagram.com/rajat.singh.04?igsh=MW1jNmVwZXd3emEwag==",
};
