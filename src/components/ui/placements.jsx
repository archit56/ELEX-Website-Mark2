import React from "react";
import { useState, useEffect } from "react";
import AddBtn from "../core/add_btn";
import PlacementsTile from "../core/placements_tile";

let isLogged= false;
let setDisplay="none";

// const loginURL = 'http://localhost:5000/login';
const loginURL = 'https://render-server-ep07.onrender.com/login';

const fetchURL = "https://render-server-ep07.onrender.com/apiPlacements";
// const fetchURL = "http://localhost:5000/apiPlacements";

const Placements = () => {
  const [data, updateData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(loginURL);
    const responseData = await response.json();
    isLogged = responseData[0].isLogged;
    console.log("useEffect"+ isLogged);
    if (isLogged) {
      console.log("under if"+isLogged);
      setDisplay = "";
    }  
    const res = await fetch(
      fetchURL
    );
    const jsonData = await res.json();
    console.log(jsonData);
    updateData(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderTile = (item) => {
    const pos = {};
    pos.val1 = item._id;
    const uniqueID = item._id;

    return (
      <>
        <div>
          <PlacementsTile
            Id={item._id}
            Title={item.title}
            Desc={item.desc}
            Link={item.link}
            SetDisplay = {setDisplay}
            UniqueID = {uniqueID}
            Pos = {pos}
          />
        </div>
      </>
    );
  };

  return (
    <>
      <AddBtn formAddress="/placementsForm" SetDisplay = {setDisplay} />
      <div>
        {data.map(renderTile)}
      </div>
    </>
  );
};

export default Placements;
