import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./css/App.css";
import Navbar from "./components/Navbar"
import TabTitle from "./utils/TabTitle";
import QuizLab8 from "./pages/QuizLab8";
import QuizLab9 from "./pages/QuizLab9";
import QuizSub from "./pages/QuizSub";
import QuizShiftLeft from "./pages/QuizShiftLeft";
import QuizXor from "./pages/QuizXor";
import QuizBinHex from "./pages/QuizBinHex";
import Footer from "./components/Footer";

const App = () => {
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
            <Route path="/binhex" element={<QuizBinHex />} />
            <Route path="*" element={<Navigate to="/lab8" />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
