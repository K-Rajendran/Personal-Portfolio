export const PROFILE = {
  name: 'Rajendran K',
  realName: 'Rajendran K',
  first: 'RAJENDRAN',
  last: 'K',
  title: 'BACKEND',
  subtitle: 'ENGINEER',
  role: 'Software Engineer',
  summary: 'Backend engineer specializing in distributed systems, cloud-native infrastructure, and performance engineering.',
  email: 'rajendran.23.kr@gmail.com',
  github: 'https://github.com/K-Rajendran',
  linkedin: 'https://linkedin.com/in/rajendrankarunanithi',
  resume: '/Rajendran-Resume.pdf',
};

export const SUBTITLES = [
  { from: 0.05, to: 0.24, text: 'Curiosity is where every reliable system starts.' },
  { from: 0.24, to: 0.46, text: 'Measure the constraints. Test the assumptions.' },
  { from: 0.46, to: 0.68, text: 'Build software that stays calm under load.' },
  { from: 0.68, to: 0.9, text: 'Backend engineering, made deliberate.' },
];

export const STATS = [
  { value: 242, suffix: ' TPS', label: 'Java dispatcher' },
  { value: 2, suffix: 'M', label: 'Records evaluated' },
  { value: 65, suffix: '%', label: 'Compute saved' },
  { value: 30, suffix: '+', label: 'Configurations' },
];

export const TOP10 = [
  { name: 'Java', genre: 'Language' },
  { name: 'Spring Boot', genre: 'Backend' },
  { name: 'AWS EKS', genre: 'Cloud' },
  { name: 'Kubernetes', genre: 'Infrastructure' },
  { name: 'Go', genre: 'Language' },
];

export const SKILL_GENRES = [
  { name: 'Languages', items: ['Java', 'Python', 'JavaScript', 'Go', 'SQL', 'Bash'] },
  { name: 'Backend', items: ['Spring Boot', 'RESTful APIs', 'RabbitMQ', 'NATS', 'Hibernate/JPA', 'HikariCP'] },
  { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Cloud & Infrastructure', items: ['AWS EKS', 'IAM', 'KMS', 'EventBridge', 'EC2', 'Docker', 'Kubernetes', 'Karpenter', 'Streamlit'] },
  { name: 'Databases & Storage', items: ['MySQL', 'Oracle', 'MariaDB', 'MongoDB', 'Redis', 'Dragonfly', 'Guava', 'RocksDB'] },
  { name: 'Observability', items: ['Prometheus', 'Grafana', 'cAdvisor', 'Structured Logging', 'Hey'] },
  { name: 'Development Tools', items: ['Git', 'Linux CLI', 'Postman', 'DBeaver', 'IntelliJ IDEA', 'VS Code', 'Jupyter Notebook'] },
  { name: 'AI-Assisted Development', items: ['Claude', 'ChatGPT', 'Codex', 'Cursor', 'Gemini', 'Perplexity', 'Ollama', 'Ideogram'] },
];

export const EPISODES = [
  { id: 'chrono', name: 'Chrono E-commerce System', tagline: 'Operations, inventory, and billing in one production system.', still: '/assets/animated-1.jpg', rank: 'FULL-STACK · 2026', url: 'https://github.com/K-Rajendran/chrono-stock-system', liveUrl: 'https://afino-five.vercel.app', desc: 'Production-ready customer e-commerce system with inventory, product catalog, billing, purchase requests, role-based access, dashboards, and WhatsApp operations.', genres: ['Backend & Distributed Systems'], tech: ['Java', 'Spring Boot', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'], result: '10+ products · 15+ bills · 10+ active users' },
  { id: 'rocksdb', name: 'RocksDB Feasibility Study', tagline: 'A high-risk migration answered with evidence.', still: '/assets/animated-2.jpg', rank: 'STORAGE · 2026', url: '', liveUrl: '', desc: 'Benchmarked RocksDB against Redis with two million records, including WAL configurations and multi-instance performance.', genres: ['Backend & Distributed Systems'], tech: ['RocksDB', 'Redis', 'Benchmarking', 'Storage Engineering'], result: 'Up to approximately 14.6 lakh TPS in WAL-disabled testing' },
  { id: 'connection-pool', name: 'Go HTTP Connection Pool POC', tagline: 'Thirty configurations, one measured comparison.', still: '/assets/animated-3.png', rank: 'PERFORMANCE · 2025', url: '', liveUrl: '', desc: 'Designed a configurable custom HTTP connection pool with Prometheus, Grafana, and cAdvisor observability.', genres: ['Backend & Distributed Systems'], tech: ['Go', 'HTTP', 'Prometheus', 'Grafana', 'cAdvisor', 'JDK 8', 'JDK 21'], result: '30+ configurations benchmarked across CPU, memory, and throughput' },
  { id: 'malware', name: 'Cloud-Based Malware Detection', tagline: 'Classifying threats with a cloud-native deployment path.', still: '/assets/animated-1.jpg', rank: 'AI & SECURITY · 2025', url: 'https://github.com/K-Rajendran/Malware-Detection-using-ML', liveUrl: 'https://malware-detection-using-ml.streamlit.app/', desc: 'Machine-learning malware classification deployed through Streamlit Cloud with automated CI/CD and AES/DES data security.', genres: ['Cloud, AI & Security'], tech: ['Scikit-learn', 'TensorFlow', 'Streamlit', 'AES', 'DES'], result: '98% classification accuracy' },
  { id: 'rkac', name: 'Round-Key Adaptive Cipher', tagline: 'A symmetric cipher explored through adaptive key expansion.', still: '/assets/animated-2.jpg', rank: 'SECURITY · 2024', url: '', liveUrl: '', desc: 'Custom AES-based symmetric encryption research with dynamically generated S-Box transformations.', genres: ['Cloud, AI & Security'], tech: ['AES', 'Cryptography'], result: 'Secure transmission and storage techniques explored' },
  { id: 'identity', name: 'Secure QR Identity Management', tagline: 'Digital identity with access controls designed in.', still: '/assets/animated-3.png', rank: 'SECURITY · 2022', url: 'https://github.com/K-Rajendran/SoftSecure-ID-Generator', liveUrl: '', desc: 'Java digital identity management with QR identification, AES-256 encryption, role-based access control, and MariaDB.', genres: ['Cloud, AI & Security'], tech: ['Java', 'AES-256', 'MariaDB'], result: 'Improved security and operational efficiency' },
  { id: 'collar', name: 'IoT-Based Smart Collar', tagline: 'Connected geofencing for cattle safety.', still: '/assets/animated-1.jpg', rank: 'IOT · 2024', url: '', liveUrl: '', desc: 'IoT cattle tracking and accident-prevention system with ESP8266, GPS, LoRa, Flutter, Firebase, and ThingSpeak.', genres: ['IoT & Connected Systems'], tech: ['ESP8266', 'GPS', 'LoRa', 'Flutter', 'Firebase', 'ThingSpeak'], result: 'Approximately 35% reduction in cattle-road accident risk in field trials' },
];

export const AWARDS = [
  { laurel: '1ST POSITION', title: 'OPERATION GREENINC Hackathon', sub: 'YANTRA 2024 · VIT Vellore · March 2024', url: 'https://drive.google.com/file/d/1_F_QyKOrR1gpCwJp4VGTMOREYqhvD_37/view?usp=sharing' },
  { laurel: '2ND POSITION', title: 'Reverse Coding Competition', sub: 'YANTRA 2024 · VIT Vellore · March 2024', url: 'https://drive.google.com/file/d/1_S1TlNPi9f0SQY323TuXNHvss3WcBncq/view?usp=sharing' },
  { laurel: '1ST PLACE', title: 'Tech Quiz 2K24', sub: 'ALGOTRON V3.0 · TPGIT · February 2024', url: 'https://drive.google.com/file/d/1SdbwJM5_PWbrevPRc7qreDebJSJVw6yB/view?usp=sharing' },
  { laurel: '3RD PLACE', title: 'Coding Conqueror', sub: 'ALGOTRON V3.0 · TPGIT · February 2024', url: 'https://drive.google.com/file/d/1IhEG6nfOGytFK69mhDUDB38Gwin7TodQ/view?usp=sharing' },
  { laurel: '3RD PRIZE', title: 'Code Auction', sub: "graVITas '22 · VIT Vellore · October 2022", url: 'https://drive.google.com/file/d/1qAVe4KqQ4rsk9FdU-xpeOnX8Q6HA6J4V/view?usp=sharing' },
];

export const CERTS = [
  { by: 'Scaler · February 2026', title: 'Java Course – Mastering the Fundamentals', url: 'https://moonshot.scaler.com/s/sl/EABgQfEcYC?_gl=1*zmcqpi*_gcl_au*ODA2MTM2MDIuMTc3OTAyMjI1NQ..*FPAU*NTA3OTQyMzMuMTc3OTAyMjI1NQ..*_ga*MjQ5Nzk3OTYzLjE3NTA5MTUzMTA.*_ga_53S71ZZG1X*czE3NzkwMjIyNTUkbzcyJGcxJHQxNzc5MDIyNTAzJGo2MCRsMCRoMTQwNjg2MDMxMA..' },
  { by: 'Udemy · August 2025', title: 'Python3: From Beginner to Pro', url: 'https://www.udemy.com/certificate/UC-380708dc-fb69-4141-8150-92f3f328a36a' },
];

export const SEASONS = [
  { label: 'Foundation', name: 'Academic foundations', years: '2020 – 2026', episodes: [{ title: 'Integrated M.Tech in Software Engineering', where: 'Vellore Institute of Technology · June 2021 – May 2026', note: 'CGPA 9.12/10 · Data Structures · SDLC · Software Engineering', still: '/assets/animated-1.jpg' }, { title: 'All India Senior School Certificate Examination', where: 'CBSE · June 2020 – May 2021', note: 'Computer Science · Grade: 91.8%', still: '/assets/animated-2.jpg' }] },
  { label: 'Leadership', name: 'Community and leadership', years: '2023', episodes: [{ title: 'Vice Chairman of the Board', where: 'Fifth Pillar VIT Student Chapter · Jan – Dec 2023', note: '350+ participant treasure hunt · Law and You for 100+ students · 20+ promotional posters', still: '/assets/animated-3.png' }] },
  { label: 'Innovation', name: 'Research and invention', years: '2024 – 2025', episodes: [{ title: 'AI in Drug Discovery and Development', where: 'Springer · Peer-reviewed book chapter · February 2025', note: 'Deep learning, QSAR modelling, personalized medicine, reinforcement learning, and explainable AI.', still: '/assets/animated-2.jpg', url: 'https://link.springer.com/chapter/10.1007/978-981-97-2938-8_3', action: 'Read publication' }, { title: 'Intelligent Traffic Flow Optimization', where: 'Published patent application 202441101026', note: 'Filed Dec 19, 2024 · Published Jan 3, 2025 · Inventor: Rajendran K. Patent document link pending.', still: '/assets/animated-1.jpg' }] },
];
