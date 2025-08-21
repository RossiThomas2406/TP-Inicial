import Header from './components/Header';
import './Layout.css';
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='contenidoLayout'>
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;