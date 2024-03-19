import Header from "./Header";
import Footer from "./Footer";
const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="h-full w-full">{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
