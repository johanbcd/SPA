//import Header from '../templates/Headers';
import Home from '../pages/Home';
import Beer from '../pages/Beer';
import Error404 from '../pages/Error404';
import About from '../pages/About';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes ={
    '/': Home,
    '/:id': Beer,
    '/about': About,
}

const router=async ()=>{
    const content = null || document.getElementById('content_loaded');

    let hash =getHash();
    let route= await resolveRoutes(hash);
    let render= routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
};
export default router;