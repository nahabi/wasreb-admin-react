import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header.jsx'
import Foot from './components/Footer.jsx'
import Dashboard from './components/dashboard/index.jsx'
import Map from './components/Map.jsx'

const App = () => (
  <div className="min-h-screen flex flex-col">
    <Header />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>

    {/* <main className="flex-grow">
      <Dashboard />
    </main> */}
    <Foot />
  </div>
)

export default App
