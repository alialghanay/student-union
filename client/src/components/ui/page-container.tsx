import { IPageContiner } from "general";
import Footer from "./footer";
import NavBar from "./navbar";

const PageContiner = async ({ children }: IPageContiner) => {
  return (
    <div dir="ltr">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageContiner;
