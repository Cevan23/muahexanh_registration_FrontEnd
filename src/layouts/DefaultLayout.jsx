import Header from "./Header";
const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="h-full w-full">{children}</div>
    </>
  );
};

export default DefaultLayout;
