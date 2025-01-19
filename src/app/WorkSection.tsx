'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import fillbasekt from "../assets/fillbasekt.png";

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "Web Development",
        image: fillbasekt,
        description: "Modern e-commerce solution with seamless user experience",
    },
    {
        id: 2,
        title: "Mobile Banking App",
        category: "App Development",
        image: fillbasekt,
        description: "Secure and intuitive banking application",
    },
    {
        id: 3,
        title: "Brand Identity Design",
        category: "Branding",
        image: fillbasekt,
        description: "Complete brand overhaul and identity design",
    },
];

const WorkSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-index'));
                        setActiveIndex(index);
                    }
                });
            },
            { root: null, threshold: 0.5 } // Adjust threshold for "center" detection
        );

        const items = containerRef.current?.querySelectorAll('.project-card');
        if (!items) return;

        items.forEach((item: Element) => observer.observe(item));

        return () => {
            items.forEach((item: Element) => observer.unobserve(item));
        };
    }, []);

    return (
        <section className="py-20 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our Featured Work
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto ">
                        Transforming ideas into digital excellence. Explore our latest projects that showcase our expertise and creativity.
                    </p>
                </div>

                <motion.div
                    className="flex space-x-8 w-max"
                    animate={{
                        x: ["0%", "-100%"],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 10,
                        ease: "linear",
                    }}
                    style={{
                        display: "flex",
                        width: `${projects.length * 600}px`, // Dynamic width based on the number of cards
                    }}

                   
                    ref={containerRef}
                >
                    {[...projects, ...projects].map((project, index) => (
                        <div
                            key={index}
                            className={`project-card group relative overflow-hidden rounded-xl flex-shrink-0 ${
                                activeIndex === index ? 'active' : ''
                            }`}
                            style={{ width: "600px" }}
                            data-index={index}
                        >
                            <div className="relative h-[400px] w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div
                                    className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${
                                        activeIndex === index ? 'opacity-100' : 'opacity-0'
                                    }`}
                                >
                                    <div className="absolute bottom-0 p-6 text-white">
                                        <span
                                            className={`text-sm font-medium text-purple-400 ${
                                                activeIndex === index ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        >
                                            {project.category}
                                        </span>
                                        <h3
                                            className={`text-xl font-bold mt-2 ${
                                                activeIndex === index ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        >
                                            {project.title}
                                        </h3>
                                        <p
                                            className={`text-gray-300 mt-2 ${
                                                activeIndex === index ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        >
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WorkSection;
