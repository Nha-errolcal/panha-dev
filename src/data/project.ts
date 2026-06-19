export interface Project {
    title: string
    desc: string
    tags: string[]
    color: string
    link: string
    github?: string
}

const projects: Project[] = [
    {
        title: 'WU Mobile',
        desc: 'Published Flutter app for Western University Cambodia. Features GoRouter navigation, GetX state management, WebView registration, and Firebase integration. Available on App Store & Google Play.',
        tags: ['Flutter', 'GetX', 'Firebase', 'GoRouter', "Notification", "SQLite", "Flavor"],
        color: '#3b82f6',
        link: 'https://github.com/Nha-errolcal/v-fresh-core',
        github: 'https://github.com/Nha-errolcal',
    },
    {
        title: 'V-Fresh Ordering',
        desc: 'Food menu and ordering web application with a polished Next.js frontend. Features category navigation, card layouts, and smooth scroll interactions with brand-blue identity.',
        tags: ['Next.js', 'TypeScript', 'TailwindCSS', "SCSS", "Angular JS", "MySQL", "Redis", "Docker", "JWT", "Nest JS", "Typeorm "],
        color: '#22c55e',
        link: 'https://github.com/Nha-errolcal/WesternU_App',
        github: 'https://github.com/Nha-errolcal',
    },
    // {
    //     title: 'MoEYS HR System',
    //     desc: 'Full Angular 20+ HR module for the Ministry of Education. Includes dynamic tables, date pickers with Khmer locale, batch creation dialogs, and NestJS/MongoDB backend.',
    //     tags: ['Angular', 'NestJS', 'MongoDB', 'Khmer UI'],
    //     color: '#8b5cf6',
    //     link: '#',
    //     github: 'https://github.com/Nha-errolcal',
    // },
    {
        title: 'POS System',
        desc: 'React + Laravel POS platform with JWT auth, role-based permission guards, product/sales management, and promotions engine. ERD designed for 40+ table schema.',
        tags: ['React', 'Laravel', 'MySQL', 'JWT'],
        color: '#f59e0b',
        link: 'https://github.com/Nha-errolcal/one-mart-stop-core',
        github: 'https://github.com/Nha-errolcal',
    },
]

export default projects