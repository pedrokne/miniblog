import React from "react";

import styles from "./Register.module.css";

import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas devem ser iguais!");
      return;
    }

    const res = await createUser(user);

    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  });

  return (
    <div className={styles.register}>
      <h1>Registre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <div></div>
        <label>
          Nome:
          <input
            type="text"
            name="displayName"
            required
            placeholder="Digite o nome do usuário"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
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
        <label>
          Confirmar senha:
          <input
            type="password"
            name="comfirmPassword"
            required
            placeholder="Confirme sua Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {!loading && <button className="btn">Cadastrar</button>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
