import axios from "axios";
import { useEffect, useState } from "react";

export default function Doctor() {
  const [doctor, setDoctor] = useState({
    email: "",
    type: "",
    appts: [],
  });

  const handleLogout = () => {
    axios("http://localhost:3000/doctor/logout", {
      method: "post",
      headers: { "Content-type": "application/json" },
      withCredentials: true,
    }).then((response) => response);
  };

  useEffect(() => {
    axios("http://localhost:3000/doctor", {
      method: "get",
      headers: { "Content-type": "application/json" },
      withCredentials: true,
    }).then((response) => {
      if (response.data.status !== "ok") {
        const a = document.getElementById("a") as HTMLAnchorElement;
        a.click();
        return;
      }
      setDoctor(response.data.load);
    });
  }, [doctor]);

  return (
    <>
      <a id="a" href="/doctor/login" className=""></a>
      <h1 className="text-2xl mb-4">Docotor's page</h1>

      <hr />

      <nav>
        <p className="text-lg">Hello {doctor.email} </p>
        <p className="text-lg">Type: {doctor.type} </p>

        <div className="flex justify-end">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <div className="flex gap-2">
        {doctor.appts.map((appt) => {
          return (
            <div
              key={appt.id}
              className="flex flex-col bg-slate-300 p-4 rounded-lg"
            >
              <p>{appt.prob} Needed on: </p>
              <br />
              <p>{appt.date}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
