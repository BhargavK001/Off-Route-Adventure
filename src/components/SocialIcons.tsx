import React from "react";
import Image from "next/image";

export function InstagramColorIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <radialGradient id="ig-gradient" cx="30%" cy="107%" r="150%" fx="30%" fy="107%">
                    <stop offset="0%" stopColor="#fdf497" />
                    <stop offset="5%" stopColor="#fdf497" />
                    <stop offset="45%" stopColor="#fd5949" />
                    <stop offset="60%" stopColor="#d6249f" />
                    <stop offset="90%" stopColor="#285AEB" />
                </radialGradient>
            </defs>
            <rect x="1" y="1" width="22" height="22" rx="5" fill="url(#ig-gradient)" />
            <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" stroke="white" strokeWidth="2" />
            <circle cx="12" cy="12" r="3.2" stroke="white" strokeWidth="2" />
            <circle cx="16.5" cy="7.5" r="1.2" fill="white" />
        </svg>
    );
}

export function WhatsAppColorIcon(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
    return (
        <div className={`relative ${props.className || 'w-6 h-6'}`}>
            <Image
                src="/WhatsApp-removebg-preview.png"
                alt="WhatsApp"
                fill
                className="object-contain scale-[1.6]"
            />
        </div>
    );
}
