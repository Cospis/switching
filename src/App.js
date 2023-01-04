import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import DataModal from "./DataModal";
import AirtimeModal from "./AirtimeModal";
import CableModal from "./CableModal";

function App() {
  const [Select, setSelect] = useState("");
  const [data, setdata] = useState(true);
  const [airtime, setairtime] = useState(false);
  const [cable, setcable] = useState(false);

  const changeSelect = (event) => {
    setSelect(event.target.value);
  };
  useEffect(() => {
    console.log(Select);
    if (Select === "Data") {
      setdata(true);
      setairtime(false);
      setcable(false);
    } else if (Select === "Airtime") {
      setdata(false);
      setairtime(true);
      setcable(false);
    } else if (Select === "Cable") {
      setdata(false);
      setairtime(false);
      setcable(true);
    } else {
      setdata(false);
      setairtime(false);
      setcable(false);
    }
  }, [Select]);

  return (
    <div className="select">
      <select onChange={changeSelect} defaultValue="select">
        <option value="select">Select...</option>
        <option value="Data">Data</option>
        <option value="Cable">Cable</option>
        <option value="Airtime">Airtime</option>
      </select>
      {data && <DataModal />}
      {airtime && <AirtimeModal />}
      {cable && <CableModal />}
    </div>
  );
}

export default App;
