
export const projects = [
    {
        id: "1",
        title: "E-commerce Projects",
        category: "Web Development",
        year: "2023",
        thumbnail: "/images/thumbnail-hellena.png",
        getContent: async function () {
            const response = await fetch("/projects/ecommerce-project.md");
            return await response.text();
        }
    },
    {
        id: "2",
        title: "Design Course",
        category: "UI Design",
        year: "2025",
        thumbnail: "/images/thumbnail-course.png",
        getContent: async function () {
            const response = await fetch("/projects/ecommerce-project.md");
            return await response.text();
        }
    },
    {
        id: "3",
        title: "",
        category: "UI Design",
        year: "2023",
        thumbnail: "/images/thumbnail-course.png",
        getContent: async function () {
            const response = await fetch("/projects/ecommerce-project.md");
            return await response.text();
        }
    },
];