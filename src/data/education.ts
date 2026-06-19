export interface Education {
    institution: string
    degree: string
    period: string
    icon: string
    description: string
}

export interface Experience {
    role: string
    company: string
    description: string
    icon: string
    tags: string[]
}

export const educationList: Education[] = [
    {
        institution: 'Western University',
        degree: 'Bachelor of Computer Science',
        period: '2022 – 2026',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg',
        description: 'Studying core computer science fundamentals including data structures, algorithms, software engineering, and system design. Actively involved in thesis research on mobile application development.',
    },
    {
        institution: 'ETEC Center',
        degree: 'Web Design',
        period: '2023 – 2024',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        description: 'Covered UI/UX principles, responsive design, HTML/CSS layout techniques, and modern design tools. Built multiple practice projects focused on clean and user-friendly interfaces.',
    },
    {
        institution: 'New Information Technology (NIT)',
        degree: 'Full Stack Developer',
        period: '2024',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        description: 'Intensive full stack program covering frontend frameworks, RESTful API design, database management, and deployment workflows. Completed hands-on projects using Vue.js and Node.js.',
    },
    {
        institution: 'Udemy',
        degree: 'Flutter Developer',
        period: '2025',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
        description: 'Completed a comprehensive Flutter course covering Dart language fundamentals, state management, API integration, and publishing apps to both Android and iOS platforms.',
    },
]

export const experienceList: Experience[] = [
    {
        role: 'Flutter Developer',
        company: 'Western University — Thesis Project',
        description: 'Designed and developed a cross-platform mobile application as the core deliverable of the university thesis. Implemented features including user authentication, real-time data sync, and a clean responsive UI using Flutter and Dart. Integrated REST APIs and managed state with Provider.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
        tags: ['Flutter', 'Dart', 'REST API', 'Provider'],
    },
    {
        role: 'Web Developer',
        company: 'System Evaluation Project',
        description: 'Built a full-featured web-based system evaluation platform for collecting, managing, and visualizing assessment data. Developed the frontend with Vue.js and connected it to a Node.js backend with MySQL for data persistence. Focused on performance, usability, and role-based access control.',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg',
        tags: ['Vue.js', 'Node.js', 'MySQL', 'REST API'],
    },
]