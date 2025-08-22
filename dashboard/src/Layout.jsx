

const Layout = ({ children }) => {
  return (
    <div>
      <div className='contenidoLayout'>
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;