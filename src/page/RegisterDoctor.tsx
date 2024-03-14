import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function RegisterDoctor() {
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [plain, setPLain] = useState("");

  const notify = (text: string) => toast(text);

  const onRegister = (e: React.SyntheticEvent) => {
    e.preventDefault();

    fetch("http://localhost:3000/doctor/register", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, type, plain }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.status === "bad") {
          notify(`${data.msg}`);
          return;
        }

        if (data.status === "ok") {
          notify(`${data.msg}`);

          setInterval(() => {
            const a = document.getElementById("a") as HTMLAnchorElement;
            a.click();
          }, 3000);
        }

        const b = document.getElementById("b") as HTMLAnchorElement;
        b.click();
      });
  };

  return (
    <div>
      <a id="a" href="/doctor" className=""></a>
      <a id="b" href="/" className=""></a>

      <h1 className="text-xl mb-10">Register Doctor</h1>

      <ToastContainer position="top-center" autoClose={1500} />

      <form onSubmit={onRegister} className="flex flex-col items-center gap-4">
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2"
        />
        <input
          type="text"
          placeholder="type of doctor"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-2"
        />
        <input
          type="password"
          placeholder="password"
          value={plain}
          onChange={(e) => setPLain(e.target.value)}
          className="p-2"
        />

        <button type="submit">Register Doctor</button>
      </form>
    </div>
  );
}
