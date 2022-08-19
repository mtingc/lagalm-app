import Header from '@components/Layout/Web/Header';
import Footer from '@components/Layout/Web/Footer';

const LayoutWeb = ({ children }) => {
  return (
    <div>
      <Header /> <div className="p-10"> {children} </div> <Footer />
    </div>
  );
};

export default LayoutWeb;
