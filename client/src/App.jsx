import { Navbar, Welcome, Footer, Services, Transactions }from './components';

const App = () => {
  return (
    <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
        <p>hhi</p>
    </div>
  );
}

export default App;