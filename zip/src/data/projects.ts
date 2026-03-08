export const projects = [
  {
    id: 'solvic',
    title: 'Solvic',
    description: 'AI-powered meeting automation system that extracts action items from meeting transcripts and automatically creates tasks in project management tools.',
    techStack: ['Python', 'Gemini API', 'ChromaDB', 'Sentence Transformers', 'Streamlit'],
    github: 'https://github.com/ManchikantiKaushikGupta',
    featured: true,
    overview: 'Solvic is an AI-powered meeting automation system that extracts action items from meeting transcripts and automatically creates tasks in project management tools.',
    problem: 'Meetings often result in lost action items and manual data entry into project management tools, reducing team productivity.',
    solution: 'Solvic automates this by analyzing transcripts, extracting tasks using Gemini, and syncing them directly to tools like Notion and Asana.',
    features: [
      'AI task extraction using Gemini',
      'RAG chatbot for searching past meetings',
      'Semantic search using ChromaDB',
      'Integration with Notion, Asana, and Linear',
      'Enterprise guardrails including PII redaction and department access control'
    ]
  },
  {
    id: 'joyverse',
    title: 'JoyVerse',
    description: 'Emotion-aware educational gaming system designed for dyslexic children that detects facial expressions during gameplay and dynamically adjusts difficulty levels.',
    techStack: ['Python', 'PyTorch', 'MediaPipe', 'MongoDB'],
    github: 'https://github.com/ManchikantiKaushikGupta',
    featured: false,
    overview: 'JoyVerse is an emotion-aware educational gaming system designed for dyslexic children.',
    problem: 'Traditional educational games do not adapt to the emotional state of the learner, which is crucial for children with dyslexia.',
    solution: 'By detecting facial expressions in real-time, JoyVerse dynamically adjusts the game difficulty to keep the child engaged and prevent frustration.',
    features: [
      'Real-time facial expression detection',
      'Dynamic difficulty adjustment',
      'Dyslexia-friendly UI/UX',
      'Progress tracking'
    ]
  },
  {
    id: 'novic',
    title: 'Novic',
    description: 'Full-stack MERN donation platform built for Novic Foundation to support affordable AI-powered prosthetic limbs.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Google Sheets API'],
    github: 'https://github.com/ManchikantiKaushikGupta',
    featured: false,
    overview: 'Novic is a full-stack MERN donation platform built for the Novic Foundation.',
    problem: 'The foundation needed a secure and transparent way to collect donations and track payments for their affordable AI-powered prosthetic limbs project.',
    solution: 'A custom donation platform with secure authentication, payment simulation, and automated verification.',
    features: [
      'Secure user authentication with JWT',
      'Donation tracking dashboard',
      'Google Form payment simulation',
      'Automated payment verification using Google Sheets',
      'Backend cron jobs for verification'
    ]
  },
  {
    id: 'covid-classification',
    title: 'COVID-19 Classification using Chest X-ray Images',
    description: 'Deep learning model that classifies chest X-ray images to detect COVID-19 using convolutional neural networks.',
    techStack: ['Python', 'CNN', 'Deep Learning', 'Image Processing'],
    github: 'https://github.com/ManchikantiKaushikGupta',
    featured: false,
    overview: 'A deep learning model for classifying chest X-ray images to detect COVID-19.',
    problem: 'Rapid and accurate detection of COVID-19 from X-ray images is critical for patient care and isolation.',
    solution: 'Developed a Convolutional Neural Network (CNN) to automatically classify X-rays as COVID-19 positive or negative.',
    features: [
      'High accuracy CNN model',
      'Image preprocessing pipeline',
      'Performance evaluation metrics'
    ]
  }
];
