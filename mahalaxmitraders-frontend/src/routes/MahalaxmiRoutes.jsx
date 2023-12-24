import { useRoutes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import HomePage from '../pages/HomePage/HomePage';


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
            path: '*',
            element: <h1>404</h1>
        }
    ])
    return routes
}

export default MahalaxmiRoutes;