import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import AgeGateModal from './components/AgeGateModal';

function App() {
  const [isOver18, setIsOver18] = useState(false);

  return (
    <>
      {!isOver18 ? (
        <AgeGateModal onConfirm={() => setIsOver18(true)} />
      ) : (
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
