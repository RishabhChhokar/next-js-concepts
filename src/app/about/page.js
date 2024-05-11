import Link from "next/link";

const details = [
  { id: "1", name: "Yash", role: "Senior Developer" },
  { id: "2", name: "Vaibhav", role: "Backend Developer" },
  { id: "3", name: "Suresh", role: "Frontend Developer" },
];

function AboutUs() {
  return (
    <div>
      <h1>About Us</h1>
      {details.map((member) => (
        <div key={member.id}>
          <Link href={`/about/${member.id}`}>
            {member.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AboutUs;
