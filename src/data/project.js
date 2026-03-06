export const projects = [
    {
        id: 1,
        slug: "atal-optical-ecommerce",
        title: "Atal Optical E-Commerce",
        shortDesc: "E-commerce platform similar to Lenskart",
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
        description:
            "A complete eyewear e-commerce platform built with a scalable MERN architecture. The system includes customer, vendor, and admin dashboards allowing full management of products, orders, and users. Customers can browse frames, lenses, and accessories while vendors manage inventory and pricing through a dedicated panel.",
        client: "Atal Optical",
        featured: true,
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        whyTech: [
            "React for building scalable and reusable UI components",
            "Node.js and Express.js for fast REST API development",
            "MongoDB for flexible product and order data storage",
            "Tailwind CSS for modern and responsive UI design"
        ],
        specifications: [
            "Role-based authentication (Admin, Vendor, Customer)",
            "Product catalog and inventory management",
            "Secure checkout and payment gateway integration",
            "Order tracking system",
            "Admin dashboard analytics",
            "Mobile responsive design"
        ],
        liveLink: "https://ataloptical.org",
    },

    {
        id: 2,
        slug: "real-estate-listing-platform",
        title: "Real Estate Listing Platform",
        shortDesc: "Property listing and booking platform",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
        description:
            "A full-featured real estate platform where property owners and agents can list properties while users can browse, filter, and inquire about listings. The platform includes advanced search filters, property galleries, and an admin dashboard to manage listings and inquiries.",
        client: "UrbanNest Realty",
        featured: true,
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Tailwind CSS"],
        whyTech: [
            "React enables fast dynamic rendering of property listings",
            "Node.js handles high traffic API requests efficiently",
            "MongoDB stores flexible property metadata",
            "Cloudinary manages optimized property images"
        ],
        specifications: [
            "Property listing with image gallery",
            "Advanced property search filters (location, price, type)",
            "Agent and owner account management",
            "Inquiry and contact system",
            "Admin dashboard for listing approval",
            "Responsive UI optimized for mobile property browsing"
        ],
        liveLink: "",
    },

    {
        id: 3,
        slug: "restaurant-ordering-system",
        title: "Restaurant Online Ordering System",
        shortDesc: "Online food ordering and restaurant management system",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        description:
            "A modern restaurant ordering platform that allows customers to browse menus, place orders, and track delivery status. Restaurant owners can manage menus, orders, and customer data through an admin panel while analytics provide insights into sales performance.",
        client: "Spice Garden Restaurant",
        featured: true,
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "Stripe", "Tailwind CSS"],
        whyTech: [
            "React for interactive menu browsing experience",
            "Node.js APIs handle order processing efficiently",
            "MongoDB stores menu items and order history",
            "Stripe integration for secure online payments"
        ],
        specifications: [
            "Dynamic menu management",
            "Online food ordering and checkout",
            "Payment gateway integration",
            "Order tracking and notifications",
            "Restaurant dashboard for order management",
            "Customer order history"
        ],
        liveLink: "",
    },

    {
        id: 4,
        slug: "portfolio-website",
        title: "Portfolio Website",
        shortDesc: "Personal portfolio site",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
        description:
            "A modern developer portfolio website designed to showcase projects, technical skills, and services. The website focuses on performance, SEO optimization, and clean UI to provide a professional online presence.",
        client: "Personal",
        featured: false,
        technologies: ["React", "Tailwind CSS"],
        whyTech: [
            "React for component-based architecture",
            "Tailwind CSS for fast UI styling",
            "Optimized structure for SEO and performance"
        ],
        specifications: [
            "Responsive design for all devices",
            "Project showcase with dynamic routing",
            "SEO optimized structure",
            "Smooth animations and transitions"
        ],
        liveLink: "",
    },
];