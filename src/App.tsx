import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "./components";
import Navigation from "./navigation/Navigation";

function App() {
  return (
    <Router>
      <main className="min-w-[320px] max-w-[1440px]">
        <Navigation />
        <Footer />
      </main>
    </Router>
  );
}

export default App;
