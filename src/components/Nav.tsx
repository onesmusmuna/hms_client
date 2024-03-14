import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="flex gap-5">
        <Link to="/patient/login">Login Patient</Link>
        <Link to="/patient/register">Register Patient</Link>
        <Link to="/doctor/login">Login Docotor</Link>
        <Link to="/doctor/register">Register Doctor</Link>
      </nav>
    </>
  );
}
