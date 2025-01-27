import { useNavigate } from "react-router";
import PageContainer from "../../components/pageContainer";

const NotFound = () => {
  const navigate = useNavigate();

  const onGotoHome = () => {
    navigate("/");
  };
  return (
    <PageContainer isFooter={false} id={"about"} title="About">
      <h1>Ooops! Wrong Page</h1>

      <button onClick={onGotoHome}>Go to Home</button>
    </PageContainer>
  );
};
export default NotFound;
