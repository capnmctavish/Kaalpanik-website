import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'aos/dist/aos.css';
import Home from './pages/home';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AiOps from "./pages/AiOps";
import AiAgents from "./pages/AiAgents";
import GenAiServices from "./pages/GenAiServices";
import CloudCapability from "./pages/CloudCapability";
import DataAnalytics from "./pages/DataAnalytics";
import IoT from "./pages/IoT";
import IoTOptimizer from "./pages/IoT/IoTOptimizer";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aiops" element={<AiOps />} />
        <Route path="/ai-agents" element={<AiAgents />} />
        <Route path="/gen-ai" element={<GenAiServices />} />
        <Route path="/cloud" element={<CloudCapability />} />
        <Route path="/data-analytics" element={<DataAnalytics />} />
        <Route path="/iot" element={<IoT />} />
        <Route path="/iot-optimizer" element={<IoTOptimizer />} />
      </Routes>
      <Footer />
 </>

  );
}

export default App;
