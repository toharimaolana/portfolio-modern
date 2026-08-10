export const projects = [
    {
        id: "1",
        title: "SafeRoute",
        category: "Development",
        year: "2026",
        client: "Competition Project",
        role: "Mobile Developer",
        tags: ["React Native", "Expo", "Supabase", "Google Maps"],
        description: "A secure navigation application designed to protect users during late-night journeys. SafeRoute combines real-time location tracking, emergency SOS alerts, route sharing, and community-based safety reporting into a unified, user-friendly interface.",
        githubUrl: "-",
        liveUrl: "-",
        thumbnail: "/images/saferoute.webp",
        getContent: async function () {
            const response = await fetch("/projects/saferoute.md");
            return await response.text();
        }
    },
    {
        id: "2",
        title: "Absenku ISC",
        category: "Development",
        year: "2026",
        client: "Competition Project",
        role: "Full-Stack Developer",
        tags: ["React JS", "Tailwind CSS", "Supabase"],
        description: "A digital attendance management platform built for the Informatics Study Club (ISC) to automate check-ins, event registration, and membership status analytics using React and Supabase.",
        githubUrl: "https://github.com/toharimaolana/isc_absenku",
        liveUrl: "https://github.com/toharimaolana/isc_absenku",
        thumbnail: "/images/isc.webp",
        getContent: async function () {
            const response = await fetch("/projects/isc.md");
            return await response.text();
        }
    },
    {
        id: "7",
        title: "Peduli Bersama",
        category: "Development",
        year: "2026",
        client: "Personal Project",
        role: "Full-Stack Developer",
        tags: ["Svelte.js", "Vite", "Supabase", "Tailwind CSS"],
        description: "PeduliBersama is a modern, full-stack crowdfunding platform built with Svelte.js and Supabase, featuring real-time donation tracking and automated payment gateway integration.",
        githubUrl: "https://github.com/toharimaolana",
        liveUrl: "https://pedulibersama.vercel.app/",
        thumbnail: "/images/pedulibersama.webp",
        getContent: async function () {
            const response = await fetch("/projects/pedulibersama.md");
            return await response.text();
        }
    },
    {
        id: "3",
        title: "Linktree App",
        category: "Development",
        year: "2026",
        client: "Personal Project",
        role: "Full-Stack Developer",
        tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
        description: "A high-performance personal link hub engineered using React, Vite, and Tailwind CSS to unify professional links and social media touchpoints into a single landing page.",
        githubUrl: "https://github.com/toharimaolana",
        liveUrl: "https://linktree-toharimaolana.vercel.app/",
        thumbnail: "/images/linktree.webp",
        getContent: async function () {
            const response = await fetch("/projects/linktree.md");
            return await response.text();
        }
    },
    {
        id: "4",
        title: "KartaBestFive",
        category: "Development",
        year: "2026",
        client: "Organization",
        role: "Full-Stack Developer",
        tags: ["React JS", "Vite", "Tailwind CSS", "Supabase"],
        description: "A high-performance community portal developed for Karang Taruna Kelurahan Mangga Besar, featuring a real-time data sync layer and an admin management console.",
        githubUrl: "",
        liveUrl: "https://kartabestfive.netlify.app/",
        thumbnail: "/images/kartabestfive.webp",
        getContent: async function () {
            const response = await fetch("/projects/kartabestfive.md");
            return await response.text();
        }
    },
    {
        id: "5",
        title: "LinkAja Kas",
        category: "Design",
        year: "2025",
        client: "Competition Project",
        role: "UI/UX Designer",
        tags: ["Figma", "UI/UX Design", "Mobile Layout"],
        description: "A conceptual mobile feature designed for LinkAja to streamline shared community cash management, cash group creation, and contribution tracking.",
        githubUrl: null,
        liveUrl: null,
        thumbnail: "/images/linkajakas.webp",
        getContent: async function () {
            const response = await fetch("/projects/linkajakas.md");
            return await response.text();
        }
    },
    {
        id: "14",
        title: "GSOP - Practical Pocket",
        category: "Development",
        year: "2025",
        client: "Personal Client",
        role: "Framer Developer",
        tags: ["Framer", "Web Design", "UI/UX"],
        description: "An innovative, hygienic disposal envelope design engineered for women to store and discard used sanitary pads discreetly while traveling or on the go.",
        githubUrl: null,
        liveUrl: "https://gshop.framer.website/",
        thumbnail: "/images/gshop-thumbnail.webp",
        getContent: async function () {
            const response = await fetch("/projects/gshop.md");
            return await response.text();
        }
    },
    {
        id: "15",
        title: "Tongkat Digital Sensor",
        category: "Development",
        year: "2025",
        client: "Personal Client",
        role: "Framer Developer",
        tags: ["Framer", "IoT Simulator", "Accessibility"],
        description: "A smart, sensor-guided blind stick navigation showcase designed to assist visually impaired individuals in navigating public spaces safely and independently.",
        githubUrl: null,
        liveUrl: "https://mshopsensor.framer.website/",
        thumbnail: "/images/mshopsensor-thumbnail.webp",
        getContent: async function () {
            const response = await fetch("/projects/tongkat-sensor.md");
            return await response.text();
        }
    },
    {
        id: "6",
        title: "PK2M",
        category: "Development",
        year: "2026",
        client: "Personal Client",
        role: "Front-End Developer",
        tags: ["HTML5", "Tailwind CSS", "JavaScript"],
        description: "A specialized higher-education web platform designed to strengthen civic and multicultural competencies among PPKn university students through project collaboration.",
        githubUrl: null,
        liveUrl: "https://fiernamasmultikultural.com/",
        thumbnail: "/images/pk2m.webp",
        getContent: async function () {
            const response = await fetch("/projects/pk2m.md");
            return await response.text();
        }
    },
    {
        id: "9",
        title: "Course Online",
        category: "Design",
        year: "2026",
        client: "Competition Project",
        role: "UI/UX Designer",
        tags: ["Figma", "UI/UX Design", "Mobile App"],
        description: "Belajar Bersama HIMTIF is a mobile-first collaborative learning platform UI designed to digitize and elevate peer-to-peer study culture for Informatics students.",
        githubUrl: null,
        liveUrl: null,
        thumbnail: "/images/course.webp",
        getContent: async function () {
            const response = await fetch("/projects/course.md");
            return await response.text();
        }
    },
    {
        id: "8",
        title: "Movieku",
        category: "Development",
        year: "2025",
        client: "Personal Project",
        role: "Full-Stack Developer",
        tags: ["React", "Tailwind CSS", "TMDb API"],
        description: "A cinematic discovery web application powered by React and TMDb API, providing film enthusiasts with search functionality and watchlist tracking.",
        githubUrl: "https://github.com/toharimaolana/movieku",
        liveUrl: "https://github.com/toharimaolana/movieku",
        thumbnail: "/images/movieku.webp",
        getContent: async function () {
            const response = await fetch("/projects/movieku.md");
            return await response.text();
        }
    },
    {
        id: "10",
        title: "Hellena",
        category: "Design",
        year: "2024",
        client: "Personal Project",
        role: "UI/UX Designer",
        tags: ["Figma", "UI/UX Design", "B2B Landing"],
        description: "A B2B healthcare solution landing page UI design in Figma, bridging digital health technology workflows with trust-centric B2B conversion paths.",
        githubUrl: null,
        liveUrl: null,
        thumbnail: "/images/hellena.webp",
        getContent: async function () {
            const response = await fetch("/projects/hellena.md");
            return await response.text();
        }
    },
    {
        id: "11",
        title: "Bonsaify Store",
        category: "Design",
        year: "2024",
        client: "Personal Project",
        role: "UI/UX Designer",
        tags: ["Figma", "UI/UX Design", "E-Commerce"],
        description: "A luxury botanical e-commerce store UI design in Figma, balancing Japanese Zen minimalism with high-converting digital retail user experience.",
        githubUrl: null,
        liveUrl: null,
        thumbnail: "/images/bonsaify.webp",
        getContent: async function () {
            const response = await fetch("/projects/bonsaify.md");
            return await response.text();
        }
    },
    {
        id: "12",
        title: "PetaPetu",
        category: "Design",
        year: "2024",
        client: "Personal Project",
        role: "UI/UX Designer",
        tags: ["Figma", "UI/UX Design", "Travel Hub"],
        description: "An immersive travel booking and tourism landing page UI design, combining aerial hero layouts with destination discovery grids.",
        githubUrl: null,
        liveUrl: null,
        thumbnail: "/images/petapetu.webp",
        getContent: async function () {
            const response = await fetch("/projects/petapetu.md");
            return await response.text();
        }
    },
    {
        id: "13",
        title: "SiJago Course",
        category: "Design",
        year: "2023",
        client: "Personal Project",
        role: "UI/UX Designer",
        tags: ["Figma", "UI/UX Design", "E-Learning"],
        description: "An interactive mobile-first programming learning platform UI design focusing on gamified computer science lessons and student rankings.",
        githubUrl: null,
        liveUrl: null,
        thumbnail: "/images/sijago.webp",
        getContent: async function () {
            const response = await fetch("/projects/sijago.md");
            return await response.text();
        }
    }
];