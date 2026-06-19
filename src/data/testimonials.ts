export interface Testimonial {
    quote: string
    name: string
    role: string
    initials: string
    avatarBg: string
    stars: number
}

const testimonials: Testimonial[] = [
    // {
    //     quote: "Panha built our internal dashboard in record time. The Angular components were clean, well-documented, and the Khmer locale support worked perfectly out of the box.",
    //     name: "Sokha Meas",
    //     role: "Team Lead, MoEYS",
    //     initials: "SM",
    //     avatarBg: "#3b82f6",
    //     stars: 5,
    // },
    {
        quote: "The Flutter app Panha delivered was polished and stable from day one. Navigation flows, offline handling, and the WebView integration all worked seamlessly.",
        name: "Ratha Ny",
        role: "IT, Western University",
        initials: "DC",
        avatarBg: "#8b5cf6",
        stars: 5,
    },
    // {
    //     quote: "Working with Panha on the V-Fresh redesign was a great experience. He understood the brand direction immediately and the UI polish exceeded our expectations.",
    //     name: "Lina Yim",
    //     role: "Founder, V-Fresh",
    //     initials: "LY",
    //     avatarBg: "#06b6d4",
    //     stars: 5,
    // },
]

export default testimonials