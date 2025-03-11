import React from "react";

import styles from "./Login.module.css";

import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);

    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  });

  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça o login para utilizar o sistema</p>
      <form onSubmit={handleSubmit}>
        <label>
          E-mail:
          <input
            type="email"
            name="email"
            required
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            name="password"
            required
            placeholder="Inira sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {!loading && <button className="btn">Entrar</button>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
