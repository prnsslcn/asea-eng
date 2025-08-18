import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, search, hash } = useLocation();

    // 1) 자동 스크롤 복원 끄기
    useEffect(() => {
        try {
            window.history.scrollRestoration = "manual";
        } catch {
            /* 일부 브라우저에서는 지원 안 할 수 있음 */
        }
    }, []);

    // 2) 라우트 변경 시 스크롤 처리
    useLayoutEffect(() => {
        if (hash) {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    const el = document.querySelector(hash);
                    if (el) {
                        (el as HTMLElement).scrollIntoView({
                            block: "start",
                            inline: "nearest",
                        });
                        return;
                    }
                    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                });
            });
            return;
        }

        requestAnimationFrame(() => {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        });
    }, [pathname, search, hash]);

    // 3) 하드 리로드/초기 진입 직후도 Top으로
    useEffect(() => {
        const onLoad = () => {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        };

        const onPageShow = (e: PageTransitionEvent) => {
            if (e.persisted) {
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
            }
        };

        window.addEventListener("load", onLoad, { once: true });
        window.addEventListener("pageshow", onPageShow);

        return () => {
            window.removeEventListener("pageshow", onPageShow);
        };
    }, []);

    return null;
}