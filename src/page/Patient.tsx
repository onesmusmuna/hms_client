import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Patient() {
  const [patient, setPatient] = useState({
    email: "",
    fName: "",
    lName: "",
    phone: "",
    dob: "",
  });

  const [prob, setProb] = useState("");
  const [date, setDate] = useState("");

  const notify = (text: string) => toast(text);

  const handleLogout = () => {
    axios("http://localhost:3000/patient/logout", {
      method: "post",
      headers: { "Content-type": "application/json" },
      withCredentials: true,
    }).then((response) => response);
  };

  useEffect(() => {
    axios("http://localhost:3000/patient", {
      method: "get",
      headers: { "Content-type": "application/json" },
      withCredentials: true,
    }).then((response) => {
      if (response.data.status !== "ok") {
        const a = document.getElementById("a") as HTMLAnchorElement;
        a.click();
        return;
      }
      setPatient(response.data.load);
    });
  }, [patient]);

  const onMakeAppointment = (e: React.SyntheticEvent) => {
    e.preventDefault();

    axios("http://localhost:3000/appointment", {
      method: "post",
      headers: { "Content-type": "application/json" },
      withCredentials: true,
      data: { date, prob },
    }).then((response) => {
      if (response.data.status === "bad") {
        return notify(response.data.msg);
      }
      notify(response.data.msg);
    });
  };

  return (
    <>
      <a id="a" href="/patient/login" className=""></a>

      <ToastContainer position="top-center" autoClose={1500} />

      <nav>
        <h1 className="text-lg">Hello {patient.email} </h1>
      </nav>

      <div className="flex justify-end">
        <button onClick={handleLogout}>Logout</button>
      </div>

      <hr />

      <div className="bg-slate-200 m-4 p-6 rounded-md shadow-md">
        <h2>Book an appointment with a Specialist</h2>

        <form
          onSubmit={onMakeAppointment}
          className="flex flex-col gap-2 justify-end p-4"
        >
          <select
            name="cars"
            id="cars"
            value={prob}
            onChange={(e) => setProb(e.target.value)}
          >
            <option value="Allergis">Allergis</option>
            <option value="anesthesiologists">Anesthesiologists</option>
            <option value="Cardiologists">Cardiologists</option>
            <option value="Dermatologists">Dermatologists </option>
            <option value="Endocrinologists">Endocrinologists </option>
            <option value="Physicians">Physicians </option>
            <option value="Gastroenterologists">Gastroenterologists </option>
            <option value="Geriatric">Geriatric </option>
            <option value="Hematologists">Hematologists </option>
            <option value="Internists">Internists </option>
            <option value="Geneticists">Geneticists </option>
            <option value="Nephrologists">Nephrologists </option>
            <option value="Neurologists">Neurologists </option>
            <option value="Gynecologists">Gynecologists </option>
            <option value="Oncologists">Oncologists </option>
            <option value="Osteopaths">Osteopaths </option>
            <option value="Otolaryngologists">Otolaryngologists </option>
            <option value="Podiatrists">Podiatrists </option>
            <option value="Physiatrists">Physiatrists </option>
            <option value="Psychiatrists">Psychiatrists </option>
            <option value="Radiologists">Radiologists </option>
            <option value="Pulmonologists">Pulmonologists </option>
            <option value="Rheumatologists">Rheumatologists </option>
          </select>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <button type="submit">Make Appointment</button>
        </form>
      </div>
    </>
  );
}
