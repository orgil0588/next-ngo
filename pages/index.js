import Navbar from "./Components/Navbar";
import Home from "./Home"
export default function App() {
  return (
    <div className="w-full font-sans">
      <Navbar />
      <div className="container mx-auto">

        <Home/>
      </div>
    </div>
  );
}
