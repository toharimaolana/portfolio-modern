export const projects = [
    {
        id: "1",
        title: "Project MyTOKO", // Judul disamakan dengan Markdown
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
        id: "2",
        title: "Design Course",
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
    // ... project lainnya
];