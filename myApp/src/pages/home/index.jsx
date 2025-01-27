import PageContainer from "../../components/pageContainer";
import UserList from "../../components/userList";

const Home = () => {
  return (
    <PageContainer id={"home"} title="Home">
      <UserList />
    </PageContainer>
  );
};

export default Home;
