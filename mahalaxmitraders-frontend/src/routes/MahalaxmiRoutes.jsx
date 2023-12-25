import { useRoutes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import HomePage from '../pages/HomePage/HomePage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';

const MahalaxmiRoutes = () => {

    const routes = useRoutes([
        {
            path: '/footer',
            element: <Footer />
        },
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: '/catalog',
            element: <CatalogPage />
        },
        {
            path: '*',
            element: <h1>404</h1>
        }
    ])
    return routes
}

export default MahalaxmiRoutes;