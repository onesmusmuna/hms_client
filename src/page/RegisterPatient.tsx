import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function RegisterPatient() {
  const [email, setEmail] = useState("");
  const [plain, setPLain] = useState("");

  const notify = (text: string) => toast(text);

  const onRegister = (e: React.SyntheticEvent) => {
    e.preventDefault();

    fetch("http://localhost:3000/patient/register", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, plain }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "bad") {
          return notify(`${data.msg}`);
        }
        notify(`${data.msg}`);
      });
  };

  return (
    <>
      <div>
        <h1 className="text-xl mb-10">Register Patient</h1>

        <ToastContainer position="top-center" autoClose={1500} />

        <form
          onSubmit={onRegister}
          className="flex flex-col items-center gap-4"
        >
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2"
          />
          <input
            type="password"
            placeholder="password"
            value={plain}
            onChange={(e) => setPLain(e.target.value)}
            className="p-2"
          />

          <button type="submit">Register Patient</button>
        </form>
      </div>
    </>
  );
}
