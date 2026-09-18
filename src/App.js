import AppRoutes from './applications/website/routes/router';
import VelnoxaRouter from './applications/velnoxa/routes/router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
            <AppRoutes />
            <VelnoxaRouter/>
    </BrowserRouter>
  );
}

export default App;
