import { useRoutes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';


const MahalaxmiRoutes = () => {

    const routes = useRoutes([
        {
            path: '/',
            element: "<Home />"
        },
        {
            path: '/footer',
            element: <Footer />
        },
    ])
    return routes
}

export default MahalaxmiRoutes;