function CompList() {
  const students = ["julia", "sara", "sammy"];
  const listStudents = students.map((student) => <li>{student}</li>);

  return (
    <div className="border border-red-900 rounded-lg">
      <h1>CompList</h1>
      <ul>{listStudents}</ul>
    </div>
  );
}

export default CompList;
