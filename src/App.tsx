import { BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Router from "./router/Router";
import ScrollToTop from "./components/common/ScrollToTop"; // <- 경로는 프로젝트에 맞게

function App() {
    return (
        <BrowserRouter>
            {/* 스크롤 제어는 라우터 컨텍스트 내부 최상단에서 1회만 */}
            <ScrollToTop />
            <div className="App min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    <Router />
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;