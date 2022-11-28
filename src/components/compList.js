import computer_data from "../computer_data.json";

function CompList() {
  const listComputers = computer_data.map((data, key) => (
    <div key={key}>{data.id + " , " + data.room + " ," + data.slot}</div>
  ));
  console.log(computer_data);

  return (
    <div className="border border-red-900 rounded-lg">
      <h1>CompList</h1>
      <div>{listComputers}</div>
    </div>
  );
}

export default CompList;
