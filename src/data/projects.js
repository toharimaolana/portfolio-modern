export const projects = [
    {
        id: "1",
        title: "E-Commerce Website",
        category: "Web Development",
        year: "2023",
        // --- TAMBAHAN DATA UNTUK SIDEBAR ---
        client: "Studi Kasus / Personal", 
        role: "Full-Stack Developer",
        githubUrl: "https://github.com/toharimaolana/e-commerce", // Opsional
        // -----------------------------------
        thumbnail: "/images/thumbnail-mystore.webp",
        getContent: async function () {
            // Pastikan nama file markdown benar sesuai yang ada di folder public/projects/
            const response = await fetch("/projects/web-ecommerce.md");
            return await response.text();
        }
    },
    {
        id: "3",
        title: "Website Pengaduan Masyarakat",
        category: "Web Development",
        year: "2025",
        client: "Personal Project",
        role: "Full-Stack Developer",
        thumbnail: "/images/thumbnail-pem.webp",
        getContent: async function () {
            const response = await fetch("/projects/web-pengaduan.md");
            return await response.text();
        }
    },
    {
        id: "2",
        title: "UI Design Health App",
        category: "UI Design",
        year: "2025",
        client: "Personal Project",
        role: "UI/UX Designer",
        thumbnail: "/images/thumbnail-helena.webp",
        getContent: async function () {
            const response = await fetch("/projects/ui-hellena.md");
            return await response.text();
        }
    },
    {
        id: "5",
        title: "UI Design Course",
        category: "UI Design",
        year: "2025",
        client: "Competition Project",
        role: "UI/UX Designer",
        thumbnail: "/images/thumbnail-course.webp",
        getContent: async function () {
            const response = await fetch("/projects/ui-course.md");
            return await response.text();
        }
    },
    {
        id: "4",
        title: "UI Design Bonsai Store",
        category: "UI Design",
        year: "2025",
        client: "Personal Project",
        role: "UI/UX Designer",
        thumbnail: "/images/thumbnail-bonsaify.webp",
        getContent: async function () {
            const response = await fetch("/projects/ui-bonsaify.md");
            return await response.text();
        }
    },
    // ... project lainnya
];