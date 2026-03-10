import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const skills = [
    "Python", "React", "Machine Learning", "Deep Learning", "Artificial Intelligence",
    "Agentic AI", "Generative AI", "NLP", "Computer Vision", "Data Science",
    "REST APIs", "MongoDB", "PyTorch", "TensorFlow", "Scikit-Learn",
    "Docker", "AWS Cloud", "GCP", "Power BI"
];

export default function TechStack() {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return;

        // Clone the content for seamless loop
        const content = marquee.querySelector('.marquee-content');
        if (content) {
            const clone = content.cloneNode(true);
            marquee.appendChild(clone);
        }

        const totalWidth = marquee.scrollWidth / 2;

        const loop = gsap.to(marquee, {
            x: -totalWidth,
            duration: 30,
            ease: "none",
            repeat: -1,
            onReverseComplete: () => {
                loop.totalTime(loop.rawTime() + loop.duration() * 100);
            }
        });

        return () => {
            loop.kill();
        };
    }, []);

    return (
        <section className="py-12 bg-black border-y border-gray-900 overflow-hidden relative z-30">
            <div ref={marqueeRef} className="flex whitespace-nowrap">
                <div className="marquee-content flex items-center gap-12 px-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-12">
                            <span className="text-3xl md:text-5xl font-bold text-gray-700 hover:text-white transition-colors duration-500 cursor-default uppercase tracking-tighter">
                                {skill}
                            </span>
                            <span className="w-3 h-3 bg-gray-800 rounded-full"></span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
