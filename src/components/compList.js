// import computer_data from "../computer_data.json";
import 'firebase/database'
import React from 'react'

import { db } from "../firebase.js";
import { onValue, ref } from "firebase/database";

var data = []

function CompList() {
  // === Computer List from JSON file ===
  // const listComputers = computer_data.map((data, key) => (
  //   <div key={key}>{data.id + " , " + data.room + " ," + data.slot}</div>
  // ));
  // console.log(computer_data);

  // === Computer List from Realtime Database ===

  const getCompData = ()=>{
    try {
      const dbRef = ref(db)
      onValue(dbRef, (snapshot)=>{
        var table = snapshot.val()

        for(var i=0; i<table.length; i++) {
          console.log(table[i].id)
        }
        console.log("--")
        data = table;
      })
    } catch (e) {
      console.error(e);
    }
  }

  console.log("frog:" + data[0]);

  //

  const listcomp =
    data.map((element) => <ul className="border flex flex-nowra justify-evenly p-2 m-2">
                            <li>ID: {element.id}</li>
                            <li>Rm#: {element.room}</li>
                            <li>Slot: {element.slot}</li></ul>)

  return (
    <div className="border border-red-900 rounded-lg">
      <h1>CompList</h1>
      <div>{getCompData()}</div>
      <div>{listcomp}</div>
    </div>
  );
}

export default CompList;
