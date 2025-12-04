"use client";

import { useState } from "react";

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/user/login`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      const jsonData = await response.json();
      localStorage.setItem("token", jsonData.token);
      alert(jsonData.message);
    } catch (error) {
      console.log(error);
      alert("로그인 실패");
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1 className="page-title">로그인</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          placeholder="메일 주소"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          name="password"
          placeholder="비밀번호"
          required
        />
        <button>로그인</button>
      </form>
    </div>
  );
};
export default Login;
