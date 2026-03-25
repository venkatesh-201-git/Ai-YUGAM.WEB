export const subjects = [
  // Frontend
  { id: 'html', name: 'HTML', path: '/learn/html', category: 'Frontend', icon: 'Code', color: 'text-orange-500', description: 'The fundamental structure of the web.' },
  { id: 'css', name: 'CSS', path: '/learn/css', category: 'Frontend', icon: 'FileCode', color: 'text-blue-500', description: 'Advanced styling and layout for modern sites.' },
  { id: 'javascript', name: 'JavaScript', path: '/learn/javascript', category: 'Frontend', icon: 'FileJson', color: 'text-yellow-500', description: 'Dynamic interactivity and client-side logic.' },
  { id: 'bootstrap', name: 'Bootstrap', path: '/learn/bootstrap', category: 'Frontend', icon: 'Box', color: 'text-purple-600', description: 'World\'s most popular CSS framework.' },
  { id: 'react', name: 'React', path: '/learn/react', category: 'Frontend', icon: 'Atom', color: 'text-cyan-400', description: 'Build component-driven user interfaces.' },
  { id: 'jquery', name: 'jQuery', path: '/learn/jquery', category: 'Frontend', icon: 'Code', color: 'text-blue-600', description: 'Simplify JavaScript DOM and AJAX.' },
  { id: 'sass', name: 'SASS', path: '/learn/sass', category: 'Frontend', icon: 'Palette', color: 'text-pink-500', description: 'CSS with superpowers.' },
  { id: 'vue', name: 'Vue', path: '/learn/vue', category: 'Frontend', icon: 'Layout', color: 'text-green-500', description: 'The progressive JavaScript framework.' },
  { id: 'angular', name: 'Angular', path: '/learn/angular', category: 'Frontend', icon: 'MonitorPlay', color: 'text-red-600', description: 'Modern web developer\'s platform.' },
  { id: 'angularjs', name: 'AngularJS', path: '/learn/angularjs', category: 'Frontend', icon: 'MonitorPlay', color: 'text-red-500', description: 'The original MVC framework.' },
  { id: 'typescript', name: 'TypeScript', path: '/learn/typescript', category: 'Frontend', icon: 'Shield', color: 'text-blue-700', description: 'JavaScript with syntax for types.' },
  { id: 'json', name: 'JSON', path: '/learn/json', category: 'Frontend', icon: 'FileJson', color: 'text-gray-600', description: 'Universal data exchange format.' },
  { id: 'icons', name: 'Icons', path: '/learn/icons', category: 'Frontend', icon: 'Zap', color: 'text-orange-400', description: 'Scalable vector icons and fonts.' },
  { id: 'rwd', name: 'RWD', path: '/learn/rwd', category: 'Frontend', icon: 'MonitorPlay', color: 'text-blue-400', description: 'Responsive Web Design for all screens.' },
  { id: 'graphics', name: 'Graphics', path: '/learn/graphics', category: 'Frontend', icon: 'Palette', color: 'text-purple-400', description: 'Computer graphics for the web.' },
  { id: 'svg', name: 'SVG', path: '/learn/svg', category: 'Frontend', icon: 'Palette', color: 'text-yellow-600', description: 'Scalable Vector Graphics.' },
  { id: 'canvas', name: 'Canvas', path: '/learn/canvas', category: 'Frontend', icon: 'Box', color: 'text-orange-600', description: 'Drawing graphics on the web.' },
  { id: 'colors', name: 'Colors', path: '/learn/colors', category: 'Frontend', icon: 'Palette', color: 'text-red-400', description: 'Web design color theory.' },
  { id: 'appml', name: 'AppML', path: '/learn/appml', category: 'Frontend', icon: 'Layout', color: 'text-blue-500', description: 'Declarative app development.' },

  // Backend
  { id: 'java', name: 'Java', path: '/learn/java', category: 'Backend', icon: 'Coffee', color: 'text-orange-400', description: 'Robust, enterprise-level programming.' },
  { id: 'python', name: 'Python', path: '/learn/python', category: 'Backend', icon: 'Terminal', color: 'text-blue-600', description: 'Clear and powerful general-purpose language.' },
  { id: 'php', name: 'PHP', path: '/learn/php', category: 'Backend', icon: 'Server', color: 'text-purple-600', description: 'Popular server-side scripting.' },
  { id: 'c', name: 'C', path: '/learn/c', category: 'Backend', icon: 'Settings', color: 'text-blue-800', description: 'Foundation of modern computing.' },
  { id: 'cpp', name: 'C++', path: '/learn/cpp', category: 'Backend', icon: 'Settings', color: 'text-blue-700', description: 'Powerful object-oriented programming.' },
  { id: 'csharp', name: 'C#', path: '/learn/csharp', category: 'Backend', icon: 'Code', color: 'text-green-600', description: 'Microsoft\'s powerful language.' },
  { id: 'go', name: 'Go', path: '/learn/go', category: 'Backend', icon: 'Command', color: 'text-cyan-500', description: 'Build simple, secure, scalable systems.' },
  { id: 'kotlin', name: 'Kotlin', path: '/learn/kotlin', category: 'Backend', icon: 'CodeSquare', color: 'text-orange-500', description: 'Modern, concise language for Android.' },
  { id: 'swift', name: 'Swift', path: '/learn/swift', category: 'Backend', icon: 'Zap', color: 'text-orange-600', description: 'Build fast apps for iOS and macOS.' },
  { id: 'rust', name: 'Rust', path: '/learn/rust', category: 'Backend', icon: 'Shield', color: 'text-orange-700', description: 'Performance and safety-focused logic.' },
  { id: 'nodejs', name: 'Node.js', path: '/learn/nodejs', category: 'Backend', icon: 'Server', color: 'text-green-600', description: 'JavaScript run-time environment.' },
  { id: 'django', name: 'Django', path: '/learn/django', category: 'Backend', icon: 'Layout', color: 'text-green-800', description: 'Python web framework for perfectionists.' },
  { id: 'asp', name: 'ASP', path: '/learn/asp', category: 'Backend', icon: 'Layout', color: 'text-blue-600', description: 'Active Server Pages development.' },

  // Database
  { id: 'sql', name: 'SQL', path: '/learn/sql', category: 'Database', icon: 'Database', color: 'text-blue-400', description: 'Master relational data management.' },
  { id: 'mongodb', name: 'MongoDB', path: '/learn/mongodb', category: 'Database', icon: 'Leaf', color: 'text-green-500', description: 'Top leading NoSQL database system.' },
  { id: 'mysql', name: 'MySQL', path: '/learn/mysql', category: 'Database', icon: 'Database', color: 'text-blue-600', description: 'Most popular open-source database.' },
  { id: 'postgresql', name: 'PostgreSQL', path: '/learn/postgresql', category: 'Database', icon: 'Database', color: 'text-blue-800', description: 'The most advanced open source database.' },

  // AI & Data Science
  { id: 'datascience', name: 'Data Science', path: '/learn/datascience', category: 'AI/ML', icon: 'Layers', color: 'text-blue-500', description: 'Extract insights from complex data.' },
  { id: 'numpy', name: 'NumPy', path: '/learn/numpy', category: 'AI/ML', icon: 'Command', color: 'text-blue-400', description: 'Fundamental package for scientific computing.' },
  { id: 'pandas', name: 'Pandas', path: '/learn/pandas', category: 'AI/ML', icon: 'Layers', color: 'text-blue-600', description: 'Data analysis and manipulation library.' },
  { id: 'scipy', name: 'SciPy', path: '/learn/scipy', category: 'AI/ML', icon: 'Terminal', color: 'text-blue-500', description: 'Scientific library for Python.' },
  { id: 'matplotlib', name: 'Matplotlib', path: '/learn/matplotlib', category: 'AI/ML', icon: 'Palette', color: 'text-blue-700', description: 'Plotting and visualization in Python.' },
  { id: 'machinelearning', name: 'Machine Learning', path: '/learn/machinelearning', category: 'AI/ML', icon: 'Bot', color: 'text-blue-600', description: 'Train machines to learn from data.' },
  { id: 'ai', name: 'AI', path: '/learn/ai', category: 'AI/ML', icon: 'Cpu', color: 'text-blue-500', description: 'Artificial Intelligence and deep learning.' },
  { id: 'genai', name: 'Gen AI', path: '/learn/genai', category: 'AI/ML', icon: 'Zap', color: 'text-cyan-500', description: 'Generative AI and LLM technologies.' },
  { id: 'statistics', name: 'Statistics', path: '/learn/statistics', category: 'AI/ML', icon: 'Layers', color: 'text-blue-800', description: 'The math behind data science.' },
  { id: 'r', name: 'R', path: '/learn/r', category: 'AI/ML', icon: 'Database', color: 'text-blue-500', description: 'Programming language for statistical computing.' },

  // Tools & Infrastructure
  { id: 'git', name: 'GIT', path: '/learn/git', category: 'Tools', icon: 'GitBranch', color: 'text-orange-600', description: 'Collaborative version control system.' },
  { id: 'postman', name: 'Postman', path: '/learn/postman', category: 'Tools', icon: 'Send', color: 'text-orange-500', description: 'The leading API platform.' },
  { id: 'excel', name: 'Excel', path: '/learn/excel', category: 'Tools', icon: 'Layers', color: 'text-green-700', description: 'Advanced spreadsheet data analysis.' },
  { id: 'xml', name: 'XML', path: '/learn/xml', category: 'Tools', icon: 'FileCode', color: 'text-orange-500', description: 'Extensible Markup Language basics.' },
  { id: 'bash', name: 'Bash', path: '/learn/bash', category: 'Tools', icon: 'Terminal', color: 'text-gray-700', description: 'Mastering the command line interface.' },
  { id: 'aws', name: 'AWS', path: '/learn/aws', category: 'Tools', icon: 'Leaf', color: 'text-orange-400', description: 'Cloud computing platform mastery.' },
  { id: 'cybersecurity', name: 'Cybersecurity', path: '/learn/cybersecurity', category: 'Tools', icon: 'Shield', color: 'text-red-600', description: 'Protecting systems and networks.' },
  { id: 'rpi', name: 'Raspberry Pi', path: '/learn/rpi', category: 'Tools', icon: 'Cpu', color: 'text-red-500', description: 'Single-board computing and IoT.' },
  { id: 'downloads', name: 'Downloads', path: '/downloads', category: 'Tools', icon: 'Download', color: 'text-blue-600', description: 'Free learning resources and tools.' },

  // Logic & Fundamentals
  { id: 'dsa', name: 'DSA', path: '/learn/dsa', category: 'Logic', icon: 'GitBranch', color: 'text-blue-600', description: 'Data Structures and Algorithms.' },
  { id: 'programming_intro', name: 'Intro to Programming', path: '/learn/programming', category: 'Logic', icon: 'Terminal', color: 'text-green-500', description: 'Begin your coding journey here.' },
  { id: 'web_intro', name: 'Intro to HTML & CSS', path: '/learn/web-intro', category: 'Logic', icon: 'Layout', color: 'text-orange-500', description: 'Basics of building for the web.' },
  { id: 'howto', name: 'How To', path: '/learn/howto', category: 'Logic', icon: 'Zap', color: 'text-yellow-500', description: 'Step-by-step development guides.' },
  { id: 'spaces', name: 'Spaces', path: '/learn/spaces', category: 'Logic', icon: 'Box', color: 'text-blue-500', description: 'Manage and host your web projects.' },
  { id: 'typing_speed', name: 'Typing Speed', path: '/learn/typing-speed', category: 'Logic', icon: 'Terminal', color: 'text-gray-500', description: 'Improve your coding productivity.' },
];

export const sections = [
  { name: 'FRONTEND', items: ['html', 'css', 'javascript', 'bootstrap', 'react', 'jquery', 'sass', 'vue', 'angular', 'angularjs', 'typescript', 'json', 'icons', 'rwd', 'graphics', 'svg', 'canvas', 'colors', 'appml'], icon: 'MonitorPlay', color: 'text-purple-600' },
  { name: 'BACKEND', items: ['java', 'python', 'php', 'c', 'cpp', 'csharp', 'go', 'kotlin', 'swift', 'rust', 'nodejs', 'django', 'asp'], icon: 'Server', color: 'text-slate-500' },
  { name: 'DATABASE', items: ['sql', 'mongodb', 'mysql', 'postgresql'], icon: 'Database', color: 'text-slate-500' },
  { name: 'DATA SCIENCE & AI', items: ['datascience', 'numpy', 'pandas', 'scipy', 'matplotlib', 'machinelearning', 'ai', 'genai', 'statistics', 'r'], icon: 'Bot', color: 'text-blue-500' },
  { name: 'TOOLS & INFRA', items: ['git', 'postman', 'excel', 'xml', 'bash', 'aws', 'cybersecurity', 'rpi', 'downloads'], icon: 'Wrench', color: 'text-amber-700' },
  { name: 'LOGIC & FUNDAMENTALS', items: ['dsa', 'programming_intro', 'web_intro', 'howto', 'spaces', 'typing_speed'], icon: 'Layers', color: 'text-indigo-600' }
];
