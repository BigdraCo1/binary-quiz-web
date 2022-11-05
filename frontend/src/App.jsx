import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./css/App.css";
import Navbar from "./components/Navbar";
import QuizLab8 from "./components/QuizLab8";
import QuizLab9 from "./components/QuizLab9";
import QuizShiftLeft from "./components/QuizShiftLeft";
import QuizSub from "./components/QuizSub";
import QuizXor from "./components/QuizXor";
import Footer from "./components/Footer";
import TabTitle from "./utils/TabTitle";

function App() {
  TabTitle("Binary Quiz");
  return (
    <div>
      <BrowserRouter>
        <div className="layout">
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/lab8" />} />
            <Route path="/lab8" element={<QuizLab8 />} />
            <Route path="/lab9" element={<QuizLab9 />} />
            <Route path="/sub" element={<QuizSub />} />
            <Route path="/shift" element={<QuizShiftLeft />} />
            <Route path="/xor" element={<QuizXor />} />
            <Route path="*" element={<Navigate to="/lab8" />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
