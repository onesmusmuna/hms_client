import axios from "axios";
import { useEffect, useState } from "react";

export default function Doctor() {
  const [doctor, setDoctor] = useState({
    email: "",
    type: "",
  });

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
      </nav>
    </>
  );
}
