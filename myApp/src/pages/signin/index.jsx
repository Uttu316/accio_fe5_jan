import { useState } from "react";
import styles from "./signin.module.css";
import PageContainer from "../../components/pageContainer";
import signin from "../../services/authServices/signin";
import useAPIStatus from "../../hooks/useApiStatus";
import { useNavigate } from "react-router";

const inputs = {
  username: "",
  password: "",
  remember: false,
};
const Signin = () => {
  const navigate = useNavigate();
  const { isLoading, setStatus } = useAPIStatus();
  const [state, setState] = useState(inputs);

  const onInput = (e) => {
    let { name, value } = e.target;

    if (name === "remember") {
      value = !state.remember;
    }

    setState({ ...state, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      setStatus("loading");
      await signin(state);
      setStatus("done");
      navigate("/inbox", {
        replace: true,
      });
    } catch (e) {
      setStatus("error");
      alert("Invalid user");
    } finally {
      setState(inputs);
    }
  };

  return (
    <PageContainer id="signin" title="Login">
      <div className={styles.formWrapper}>
        <div className={styles.formtitle}>Sign in</div>
        <form onSubmit={onSubmit} className={styles.formContainer}>
          <div className={styles.inputItem}>
            <input
              value={state.username}
              onChange={onInput}
              name="username"
              className={styles.input}
            />
            <label htmlFor="username" className={styles.inputItemLabel}>
              Username
            </label>
          </div>
          <div className={styles.inputItem}>
            <input
              onChange={onInput}
              name="password"
              type="password"
              className={styles.input}
              value={state.password}
            />
            <label htmlFor="password" className={styles.inputItemLabel}>
              Password
            </label>
          </div>
          <div className={styles.checkboxInput}>
            <input
              onChange={onInput}
              value={state.remember}
              type="checkbox"
              name="remember"
            />
            <label htmlFor="remember"> Remember this</label>
          </div>
          <button disabled={isLoading} className={styles.btn}>
            Signin
          </button>
        </form>
      </div>
    </PageContainer>
  );
};
export default Signin;
