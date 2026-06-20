export interface Skill {
    name: string
    logo: string
}

export interface SkillGroup {
    category: string
    color: string
    skills: Skill[]
}

const skillGroups: SkillGroup[] = [
    {
        category: 'Frontend',
        color: '#3b82f6',
        skills: [
            { name: 'Vue JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
            { name: 'Nuxt JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
            { name: 'Angular', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/500px-Angular_gradient_logo.png' },
            { name: 'React JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
            { name: 'Flutter', logo: 'https://cdn.iconscout.com/icon/free/png-256/free-flutter-logo-icon-svg-download-png-1720090.png?f=webp' },
        ],
    },
    {
        category: 'Backend',
        color: '#8b5cf6',
        skills: [
            { name: 'Express JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
            { name: 'Node JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'Nest JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
            { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
            { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        ],
    },
    {
        category: 'Database',
        color: '#06b6d4',
        skills: [
            { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
            { name: 'SQL Server', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
            { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
            { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
            { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
            { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
        ],
    },
    {
        category: 'Tools',
        color: '#22c55e',
        skills: [
            { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
            { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
            { name: 'GitHub Desktop', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
            { name: 'Sourcetree', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg' },
            { name: 'pgAdmin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
            { name: 'Navicat', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
            { name: 'MongoDB Compass', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
            { name: 'JetBrains', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg' },
            { name: 'Android Studio', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
        ],
    },
    {
        category: 'Source Control',
        color: '#f59e0b',
        skills: [
            { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
            { name: 'GitLab', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
        ],
    },
    {
        category: 'Testing',
        color: '#ef4444',
        skills: [
            { name: 'Jest', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
            // { name: 'JUnit', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
            // { name: 'Postman Testing', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
            { name: 'Flutter Test', logo: 'https://cdn.iconscout.com/icon/free/png-256/free-flutter-logo-icon-svg-download-png-1720090.png?f=webp' },
        ],
    },
    {
        category: 'CI/CD',
        color: '#ec4899',
        skills: [
            { name: 'GitHub Actions', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
            { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
            { name: 'GitLab CI/CD', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
            { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        ],
    },
    {
        category: 'Server & Deployment',
        color: '#14b8a6',
        skills: [
            {
                name: 'Linux (Ubuntu)',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg',
            },
            {
                name: 'Nginx',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
            },
            {
                name: 'Docker',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
            },
            {
                name: 'PM2',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            },
        ],
    },
]

export default skillGroups