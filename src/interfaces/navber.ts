import type { LucideIcon } from "lucide-vue-next";

export interface InterfaceChildrenNavberItem {
    id: number;
    title: string;
    route: string;
    icon: LucideIcon;
}

export interface InterfaceNavberItem {
    id: number;
    title: string;
    route: string;
    icon: LucideIcon;
    children?: InterfaceNavberItem[];   // recursive — supports any depth
}