import Header from './components/Header.jsx'
import Foot from './components/Footer.jsx'
import Dashboard from './components/dashboard/index.jsx'

const App = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow">
      <div className="container mx-auto py-12">
        <Dashboard />
      </div>
    </main>
    <Foot />
  </div>
)

export default App
