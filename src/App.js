import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
