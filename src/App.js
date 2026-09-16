import Navbar from './components/layout/Navbar';
import AppRoutes from './applications/website/routes/router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>

    <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
