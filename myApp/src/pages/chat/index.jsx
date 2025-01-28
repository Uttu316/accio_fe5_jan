import { useParams } from "react-router";
import Inbox from "../../components/inbox";
import fetchUser from "../../services/userServices/fetchUser";
import { useEffect, useState } from "react";
import useAPIStatus from "../../hooks/useApiStatus";
import PageContainer from "../../components/pageContainer";
import ChatProvider from "../../context/chatProvider";

const Chat = () => {
  const { setStatus, isDone, isLoading, isError } = useAPIStatus();
  const [user, setUser] = useState(null);
  const { userid } = useParams();

  const inValiduser = isDone && !user;
  const validUser = isDone && !!user;

  const getUser = async () => {
    try {
      setStatus("loading");
      const data = await fetchUser(userid);
      setUser(data);
      setStatus("done");
    } catch (e) {
      setStatus("error");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <PageContainer id={"chat"} title="Chat">
      <ChatProvider userData={user}>
        {isLoading && <h2>Loading....</h2>}
        {validUser && <Inbox />}
        {inValiduser && <h2>User is not Valid</h2>}
        {isError && <h2>Something went wrong</h2>}
      </ChatProvider>
    </PageContainer>
  );
};

export default Chat;
