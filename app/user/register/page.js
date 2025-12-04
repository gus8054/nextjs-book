"use client";

import { useState } from "react";

const Register = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/user/register`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (error) {
      console.log(error);
      alert("사용자 등록 실패");
    }
  };
  return (
    <div>
      <h1 className="page-title">사용자 등록</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={newUser.name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="이름"
          required
        />
        <input
          value={newUser.email}
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="메일 주소"
          required
        />
        <input
          value={newUser.password}
          onChange={handleChange}
          type="text"
          name="password"
          placeholder="비밀번호"
          required
        />
        <button>등록</button>
      </form>
    </div>
  );
};
export default Register;
