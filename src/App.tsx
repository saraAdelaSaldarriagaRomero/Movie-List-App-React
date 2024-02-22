
import "./App.css";
import MovieList from "./components/MovieList.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail.tsx";




function App() {
  
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/detail/:id" element={<MovieDetail />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;















