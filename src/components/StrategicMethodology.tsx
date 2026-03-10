import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Cpu, Database, Eye, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const strategies = [
    {
        id: 1,
        title: "Intelligent Backend Architecture",
        description: "Designing robust Python-based systems and REST APIs that serve as the backbone for scalable web and mobile applications.",
        icon: <Database className="w-8 h-8" />,
        color: "blue"
    },
    {
        id: 2,
        title: "Advanced Neural Networks",
        description: "Implementing cutting-edge Deep Learning and Computer Vision pipelines using PyTorch and TensorFlow for real-world impact.",
        icon: <Cpu className="w-8 h-8" />,
        color: "purple"
    },
    {
        id: 3,
        title: "Agentic AI Workflows",
        description: "Building autonomous AI agents and Generative AI systems that enhance productivity and automate complex decision-making.",
        icon: <Eye className="w-8 h-8" />,
        color: "green"
    },
    {
        id: 4,
        title: "Production-Grade Deployment",
        description: "Ensuring high availability through VPS deployment, Docker orchestration, and performance-optimized cloud infrastructure.",
        icon: <Globe className="w-8 h-8" />,
        color: "orange"
    }
];

export default function StrategicMethodology() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".method-header",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );

            if (gridRef.current) {
                gsap.fromTo(
                    gridRef.current.children,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: "top 75%",
                        }
                    }
                );
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 px-6 md:px-12 lg:px-24 bg-[#050505] text-white w-full relative z-30">
            <div className="flex flex-col items-center text-center mb-20 method-header">
                <p className="text-gray-400 uppercase tracking-widest text-sm mb-4 font-semibold">The Blueprint</p>
                <h2 className="text-5xl md:text-7xl font-bold font-serif italic max-w-4xl tracking-tight">Strategic AI Methodology</h2>
            </div>

            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
                {strategies.map((strategy) => (
                    <div
                        key={strategy.id}
                        className="interactable flex flex-col p-10 rounded-[2.5rem] border border-gray-900 bg-[#0a0a0a] hover:bg-[#111] transition-all duration-500 group"
                    >
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-gray-900 text-white group-hover:scale-110 transition-transform duration-500`}>
                            {strategy.icon}
                        </div>
                        <h3 className="text-3xl font-bold mb-6 group-hover:text-blue-200 transition-colors">
                            {strategy.title}
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed font-light">
                            {strategy.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
