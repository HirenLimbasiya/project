import { Route, Routes } from "react-router-dom";
import AddTopic from "./components/AddTopic";
import Home from "./components/Home";
import Topics from "./components/Topics";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/addtopic" element={<AddTopic />} />
      </Routes>
    </div>
  );
}

export default App;
