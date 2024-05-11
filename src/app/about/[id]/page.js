const details = [
  { id: "1", name: "Yash", role: "Senior Developer" },
  { id: "2", name: "Vaibhav", role: "Backend Developer" },
  { id: "3", name: "Suresh", role: "Frontend Developer" },
];

function TeamMember({ params }) {
  const member = details.find((details) => details.id === params.id);
  if (!member) {
    return <h1>Developer doesn't exist</h1>;
  }

  return (
    <div>
      <h1>{member.name}</h1>
      <p>{member.role}</p>
    </div>
  );
}

export default TeamMember;
