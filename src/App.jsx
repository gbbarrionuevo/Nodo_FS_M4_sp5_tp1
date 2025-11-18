import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      
      <main className="container mx-auto p-4">
        <AppRouter />
      </main>

      <Footer />
    </div>
  );
}

export default App;
