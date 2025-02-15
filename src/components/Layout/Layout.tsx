import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import Navbar from '@/components/Navbar/Navbar';
import Pages from '@/components/Pages/Pages';
import './Layout.scss';

function Layout() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Pages />
      </BrowserRouter>
    </Provider>
  );
}

export default Layout;
