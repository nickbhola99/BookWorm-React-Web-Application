import './App.css'
import Library from './components/Library'
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Library/>} />
      </Routes>
    </>
  )
}

export default App
