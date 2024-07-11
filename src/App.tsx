import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Items from "./components/Items";

function App() {
  return (
    <div className="wrapper">
      <Header />
        <Items />
      <Footer />
    </div>
  );
}

export default App;
