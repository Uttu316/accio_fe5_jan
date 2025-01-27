import { useState } from "react";

const useAPIStatus = () => {
  const [status, setStatus] = useState("");

  const isLoading = status === "loading";
  const isError = status === "error";
  const isDone = status === "done";

  return {
    status,
    setStatus,
    isLoading,
    isError,
    isDone,
  };
};

export default useAPIStatus;
