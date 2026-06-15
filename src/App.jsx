import "./styles/App.css";
import Home from "./screens/Home";
import Header from "./comps/Header";
import Footer from "./comps/Footer";

function App() {
  return (
    <div id="app">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
