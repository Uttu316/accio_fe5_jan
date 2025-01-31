import PageContainer from "../../components/pageContainer";
import Todo from "../../components/todoList";
import Tours from "../../components/tours";
import UserList from "../../components/userList";

const Home = () => {
  return (
    <PageContainer id={"home"} title="Home">
      <h1>Home Page</h1>
      <Todo />
      <Tours />
    </PageContainer>
  );
};

export default Home;
