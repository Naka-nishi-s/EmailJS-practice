import emailjs from "@emailjs/browser";
import React from "react";
import "./App.css";

function App() {
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, {
        publicKey: PUBLIC_KEY,
      })
      .then(() => console.log("送信成功"))
      .catch((e) => console.log("送信失敗。", e));
  };

  return (
    <form onSubmit={sendEmail}>
      <div>
        <label htmlFor="name">名前</label>
        <input type="text" name="name" id="name" autoComplete="name" />
      </div>

      <div>
        <label htmlFor="email">メールアドレス</label>
        <input type="email" name="reply_to" id="email" autoComplete="email" />
      </div>

      <div>
        <label htmlFor="message">メッセージ</label>
        <textarea name="message" id="message" />
      </div>

      <input type="submit" value="送る" />
    </form>
  );
}

export default App;
