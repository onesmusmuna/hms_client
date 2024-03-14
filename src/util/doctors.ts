export const getDoctors = async () => {
  const res = await fetch("http://localhost:3000/doctors");
  const r = await res.json();
  const data = r.data;
  return data;
};
