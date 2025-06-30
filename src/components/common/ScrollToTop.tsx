import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // 페이지 이동할 때마다 스크롤을 최상단으로
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;