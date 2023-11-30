import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Seo from "../Header/Seo";

export default function Layout({ children }) {
  return (
    <>
      <Seo />
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
