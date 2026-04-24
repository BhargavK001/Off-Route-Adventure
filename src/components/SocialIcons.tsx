import React from "react";

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
    const { className, ...svgProps } = props;
    return (
        <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
            {...svgProps}
        >
            <circle cx="16" cy="16" r="16" fill="#25D366" />
            <path
                d="M23.5 8.5A10.44 10.44 0 0 0 16 5.5a10.5 10.5 0 0 0-9.1 15.7L5.5 26.5l5.5-1.4A10.5 10.5 0 0 0 26.5 16a10.44 10.44 0 0 0-3-7.5zm-7.5 16.1a8.7 8.7 0 0 1-4.5-1.2l-.3-.2-3.2.85.85-3.1-.2-.35A8.72 8.72 0 1 1 16 24.6zm4.8-6.55c-.26-.13-1.55-.77-1.79-.85s-.41-.13-.59.13-.67.85-.82 1.02-.3.19-.56.06a7.1 7.1 0 0 1-2.1-1.3 7.9 7.9 0 0 1-1.45-1.8c-.15-.27 0-.41.11-.54s.27-.3.4-.46a1.8 1.8 0 0 0 .27-.45.5.5 0 0 0-.02-.47c-.06-.13-.59-1.42-.81-1.94s-.43-.44-.58-.45h-.5a1 1 0 0 0-.71.33 2.94 2.94 0 0 0-.92 2.19 5.12 5.12 0 0 0 1.07 2.71 11.7 11.7 0 0 0 4.49 3.97c.63.27 1.12.43 1.5.55a3.6 3.6 0 0 0 1.66.1 2.7 2.7 0 0 0 1.77-1.25 2.2 2.2 0 0 0 .15-1.25c-.06-.11-.23-.17-.49-.3z"
                fill="#fff"
            />
        </svg>
    );
}
