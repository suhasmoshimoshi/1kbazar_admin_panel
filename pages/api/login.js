// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const array = [
  {
    ID: "1",
    Job_Title: "Senior UX Designer",
    Department: "Sr UX Designer ",
    Location: "Delhi",
  },
];
export default function handler(req, res) {
  console.log("from backend", req.body);
  array.push(req.body);
  res.status(200).json(array);
}
