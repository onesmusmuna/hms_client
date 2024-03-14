import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function LoginPatient() {
  const [email, setEmail] = useState("");
  const [plain, setPLain] = useState("");

  const notify = (text: string) => toast(text);

  const onLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();

    axios("http://localhost:3000/patient/login", {
      method: "post",
      headers: { "Content-type": "application/json" },
      withCredentials: true,
      data: { email, plain },
    }).then((response) => {
      if (response.data.status === "bad") {
        return notify(response.data.msg);
      }
      //   let a = response.headers["set-cookie"];
      // document.cookie.push(response.headers["set-cookie"]);
      console.log(response.data.msg);
      const a = document.getElementById("a") as HTMLAnchorElement;
      a.click();
    });
  };

  return (
    <div>
      <a id="a" href="/patient" className=""></a>
      <h1>Patient Login</h1>
      <ToastContainer position="top-center" autoClose={1500} />

      <form onSubmit={onLogin} className="flex flex-col items-center gap-4">
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={plain}
          onChange={(e) => setPLain(e.target.value)}
        />

        <button type="submit">Patient Login</button>
      </form>
    </div>
  );
}
