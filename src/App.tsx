import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Router from './router/Router';

function App() {
    return (
        <BrowserRouter>
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