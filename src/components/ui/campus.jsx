
import React from "react"
import AddBtn from "../core/add_btn";
import { useState, useEffect } from "react";
import CampusTile from "../core/campus_tile";

let isLogged=false;
let setDisplay="none";

const Campus = () => {

    // const loginURL = 'http://localhost:5000/login';
    const loginURL = 'https://render-server-ep07.onrender.com/login';

  const fetchURL = "https://render-server-ep07.onrender.com/apiCampus";
//   const fetchURL = "http://localhost:5000/apiCampus";

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
                    <CampusTile
                        Title={item.title}
                        Para1={item.para1}
                        Para2={item.para2}
                        Para3={item.para3}
                        SetDisplay={setDisplay}
                        UniqueID={uniqueID}
                        Pos={pos}
                    />
                </div>
            </>
        );
    };

    return (
        <>
            <AddBtn formAddress="/campusForm" SetDisplay={setDisplay} />
            <div>
                {data.map(renderTile)}
            </div>

        </>
    );
};

export default Campus;


