import "./css/main.css";
import { Route, Routes } from "react-router-dom";
import Index from "./../webpages/index";
import About from "./../webpages/about";

export default function Main() {
  return (
    <div className="base">
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}
