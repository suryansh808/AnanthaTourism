import { BrowserRouter, Routes, Route } from "react-router-dom";
import PackageDetails from "./Page/PackageDetails";
import Home from "./Page/Home";
// import Footer from "./Components/Footer";
import ScrollToTop from "./ScrollToTop";


const App = () => {
  return (
    <main className="min-h-screen bg-background">
       <BrowserRouter>
         <ScrollToTop />

      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/page/:id" element={<PackageDetails/>} />
      </Routes>

      
    </BrowserRouter>
    </main>
  )
}

export default App
