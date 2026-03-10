import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ResearchAndAI() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(textRef.current,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    }
                }
            );

            gsap.fromTo(".research-card",
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    stagger: 0.3,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: ".research-grid",
                        start: "top 80%",
                    }
                }
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 px-6 md:px-12 lg:px-24 bg-black text-white relative z-30 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500 rounded-full blur-[120px]"></div>
            </div>

            <div ref={textRef} className="mb-20">
                <p className="text-gray-400 uppercase tracking-widest text-sm mb-4 font-semibold">Academic Excellence</p>
                <h2 className="text-5xl md:text-8xl font-bold font-serif italic leading-tight">Research &<br />AI Innovation</h2>
            </div>

            <div className="research-grid grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Publication Card */}
                <div className="research-card group interactable bg-[#0a0a0a] border border-gray-800 p-10 rounded-3xl hover:border-gray-400 transition-all duration-700">
                    <span className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-6 block">Publication — JETIR 2025</span>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-blue-200 transition-colors">ToneCraft: AI-Driven Professional Tone Enhancement System</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Co-authored a peer-reviewed research publication proposing a system that enhances communication tone using advanced NLP techniques and Generative AI.
                    </p>
                    <div className="flex gap-4">
                        <span className="px-4 py-2 bg-gray-900 rounded-full text-xs font-semibold text-gray-300">NLP</span>
                        <span className="px-4 py-2 bg-gray-900 rounded-full text-xs font-semibold text-gray-300">Generative AI</span>
                    </div>
                </div>

                {/* AI Capabilities Card */}
                <div className="research-card group interactable bg-[#0a0a0a] border border-gray-800 p-10 rounded-3xl hover:border-gray-400 transition-all duration-700">
                    <span className="text-purple-400 text-sm font-bold uppercase tracking-widest mb-6 block">Expertise</span>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-purple-200 transition-colors">Neural Architecture & Scalable AI</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Specializing in the design and deployment of production-ready Deep Learning models, Real-time Computer Vision pipelines, and Agentic AI workflows.
                    </p>
                    <ul className="grid grid-cols-2 gap-4 text-sm text-gray-500 font-semibold uppercase">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Deep Learning</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Agentic AI</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Computer Vision</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> System Ops</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
