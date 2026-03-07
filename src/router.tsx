import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import WhoWeServe from './pages/WhoWeServe';
import Philosophy from './pages/Philosophy';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'who-we-serve', element: <WhoWeServe /> },
      { path: 'philosophy', element: <Philosophy /> },
      { path: 'resources', element: <Resources /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);
