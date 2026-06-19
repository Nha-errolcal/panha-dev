import type { InterfaceNavberItem } from '../interfaces/index'
import {
    Home,
    UserCircle,
    Code2,
    GraduationCap,
    Briefcase as BriefcaseExp,
    FolderKanban,
    MessageSquareQuote,
    Mail,
    Settings,
} from 'lucide-vue-next'

const menuNavItem: InterfaceNavberItem[] = [
    {
        id: 1,
        title: 'Home',
        route: '/#hero',
        icon: Home,
    },
    {
        id: 2,
        title: 'About',
        route: '/#about',
        icon: UserCircle,
    },
    {
        id: 3,
        title: 'Skills',
        route: '/#skills',
        icon: Code2,
    },
    {
        id: 4,
        title: 'Education',
        route: '/#education',
        icon: GraduationCap,
    },
    {
        id: 5,
        title: 'Experience',
        route: '/#experience',
        icon: BriefcaseExp,
    },
    {
        id: 6,
        title: 'Projects',
        route: '/#projects',
        icon: FolderKanban,
    },
    {
        id: 7,
        title: 'Testimonials',
        route: '/#testimonials',
        icon: MessageSquareQuote,
    },
    {
        id: 8,
        title: 'Contact',
        route: '/#contact',
        icon: Mail,
    },
    // {
    //     id: 9,
    //     title: 'Settings',
    //     route: '/settings',
    //     icon: Settings,
    // },
]

export default menuNavItem