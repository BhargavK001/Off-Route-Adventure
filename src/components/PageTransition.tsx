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
    const [transitionStage, setTransitionStage] = useState<"enter" | "exit">(
        "enter"
    );
    const previousPathname = useRef(pathname);

    useEffect(() => {
        if (pathname !== previousPathname.current) {
            setTransitionStage("exit");

            const timeout = setTimeout(() => {
                setDisplayChildren(children);
                setTransitionStage("enter");
                previousPathname.current = pathname;
                window.scrollTo(0, 0);
            }, 300);

            return () => clearTimeout(timeout);
        } else {
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
