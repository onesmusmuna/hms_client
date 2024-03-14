import axios from "axios";
import { useEffect, useState } from "react";

export default function Patient() {
  const [patient, setPatient] = useState({
    email: "",
    fName: "",
    lName: "",
    phone: "",
    dob: "",
  });

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

  return (
    <>
      <a id="a" href="/patient/login" className=""></a>

      <nav>
        <h1 className="text-lg">Hello {patient.email} </h1>
      </nav>
    </>
  );
}

// interface IPatient {
//   email: string;
//   fName: string;
//   lName: string;
//   phone: string;
//   dob: string;
// }
