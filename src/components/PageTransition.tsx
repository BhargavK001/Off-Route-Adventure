"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function PageTransition({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState<"enter" | "exit">("enter");
    const previousPathname = useRef(pathname);

    useEffect(() => {
        if (pathname !== previousPathname.current) {
            // Start exit animation
            setTransitionStage("exit");

            const timeout = setTimeout(() => {
                // After exit animation, swap content and start enter animation
                setDisplayChildren(children);
                setTransitionStage("enter");
                previousPathname.current = pathname;
                // Scroll to top on page change
                window.scrollTo(0, 0);
            }, 300); // Match CSS animation duration

            return () => clearTimeout(timeout);
        } else {
            // Same route, just update children
            setDisplayChildren(children);
        }
    }, [pathname, children]);

    return (
        <div
            className={`page-transition ${transitionStage === "enter" ? "page-enter" : "page-exit"
                }`}
        >
            {displayChildren}
        </div>
    );
}
