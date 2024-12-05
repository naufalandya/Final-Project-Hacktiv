import { Outlet, useLocation } from 'react-router-dom';
import Products from '../organisms/Products';

const Content: React.FC = () => {
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <div className="container mx-auto p-4">
      {isHome ? <Products /> : <Outlet />}
    </div>
  );
};

export default Content;
