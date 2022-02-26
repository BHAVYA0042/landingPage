import Bar from "./components/upper_bar";
import Navigate from "./components/NavBar";
import Intro from "./components/intro";
import Mid from "./components/mid";
import Service from "./components/services";
import Footer from "./components/footer";
function App() {
  return (
    <div>
      <Bar />
      <Navigate />
      <Intro />
      <Mid />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
