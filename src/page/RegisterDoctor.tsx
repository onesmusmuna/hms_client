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
          return;
        }

        // const b = document.getElementById("b") as HTMLAnchorElement;
        // b.click();
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
          required
        />
        {/* <input
          type="text"
          placeholder="type of doctor"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-2"
        /> */}

        <select
          name="type"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        >
          <option value="allergis">Select you Speciality</option>
          <option value="allergis">Allergis</option>
          <option value="anesthesiologists">Anesthesiologists</option>
          <option value="cardiologists">Cardiologists</option>
          <option value="dermatologists">Dermatologists </option>
          <option value="endocrinologists">Endocrinologists </option>
          <option value="physicians">Physicians </option>
          <option value="gastroenterologists">Gastroenterologists </option>
          <option value="geriatric">Geriatric </option>
          <option value="hematologists">Hematologists </option>
          <option value="internists">Internists </option>
          <option value="geneticists">Geneticists </option>
          <option value="nephrologists">Nephrologists </option>
          <option value="neurologists">Neurologists </option>
          <option value="gynecologists">Gynecologists </option>
          <option value="oncologists">Oncologists </option>
          <option value="osteopaths">Osteopaths </option>
          <option value="otolaryngologists">Otolaryngologists </option>
          <option value="podiatrists">Podiatrists </option>
          <option value="physiatrists">Physiatrists </option>
          <option value="psychiatrists">Psychiatrists </option>
          <option value="radiologists">Radiologists </option>
          <option value="pulmonologists">Pulmonologists </option>
          <option value="rheumatologists">Rheumatologists </option>
        </select>

        <input
          type="password"
          placeholder="password"
          value={plain}
          onChange={(e) => setPLain(e.target.value)}
          className="p-2"
          required
        />

        <button type="submit">Register Doctor</button>
      </form>
    </div>
  );
}
