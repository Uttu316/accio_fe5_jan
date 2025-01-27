import Footer from "../footer";
import Header from "../header";

const PageContainer = (props) => {
  const { children, isFooter = true, id, title } = props;
  return (
    <div id={id}>
      <Header logo={title} />
      {children}
      {isFooter && <Footer />}
    </div>
  );
};

export default PageContainer;
