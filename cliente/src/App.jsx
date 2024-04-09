import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import TaskFormPage from "./pages/TaskFormPage";
import Navigations from "./components/Navigations";

function App() {
  return (
    <BrowserRouter>
      <Navigations />
      <Routes>
        <Route path="/" element={<Navigate to={"/tasklist"} />} />
        <Route path="tasklist" element={<TaskPage />} />
        <Route path="taskpost" element={<TaskFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
