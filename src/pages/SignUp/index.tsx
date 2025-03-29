import { useState } from "react";
import { useNavigate } from "react-router";
import useAuth from "../../hook/useAuth";
import styles from "./index.module.css"

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const { createUser, error, loading } = useAuth({
    onSuccess: () => {
      navigate("/");
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createUser(email, password, name);
    // dari logic useAuth 
  };
  return (
    <div className={styles.container}>
      <h1
        style={{
          color: "white",
          textAlign: "center",
        }}
      >
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className={styles.formWrapper}>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Input your email"
        />
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Input your Name"
        />

        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Input your password"
        />
        <button type="submit">{loading ? "Loading..." : "Sign Up"}</button>
        {error && <span className={styles.errorText}>{error}</span>}
      </form>
    </div>
  );
};

export default SignUp;
