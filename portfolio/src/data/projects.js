const projects = [
  {
    id: 1,

    title: "SocialConnect App",

    image: "/projects/socialconnect.jpg",

    description:
      "A modern social media platform featuring authentication, user profiles, posts, comments, likes and responsive UI built using FastAPI and React.",

    // github:
    //   "https://github.com/Shaktiz/fastAPI-project_SocialConnect_App",

    live: "https://github.com/Shaktiz/fastAPI-project_SocialConnect_App",

    tech: [
      "React",
      "FastAPI",
      "JWT",
      "REST API",
      "MySQL",
    ],

    featured: true,
  },

  {
    id: 2,

    title: "AI PDF Assistant",

    image: "/projects/rag.jpg",

    description:
      "Retrieval Augmented Generation application allowing intelligent PDF question answering using semantic search and vector embeddings.",

    // github:
    //   "https://github.com/Shaktiz/AI-PDF-RAG_APP",

    live: "https://github.com/Shaktiz/AI-PDF-RAG_APP",

    tech: [
      "Python",
      "FAISS",
      "Sentence Transformers",
      "Flask",
      "RAG",
    ],

    featured: false,
  },

  {
    id: 3,

    title: "Personal Fitness Tracker",

    image: "/projects/fitness.jpg",

    description:
      "Fitness application for workout tracking, progress monitoring and health management with clean responsive interface.",

    // github:
    //   "https://github.com/Shaktiz/Personal-Fitness-Tracker",

    live: "https://github.com/Shaktiz/Personal-Fitness-Tracker",

    tech: [
      "Python",
      "Flask",
      "HTML",
      "CSS",
    ],

    featured: false,
  },
];

export default projects;