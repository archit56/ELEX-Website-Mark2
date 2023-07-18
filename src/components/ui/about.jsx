import React from "react"
import AddBtn from "../core/add_btn";
import { useState, useEffect } from "react";
import AboutTile from "../core/about_tile";

let isLogged = false;
let setDisplay = "none";

const loginURL = 'https://render-server-ep07.onrender.com/login';
const fetchURL = "https://render-server-ep07.onrender.com/apiAbouts";

// const loginURL = 'http://localhost:5000/login';
// const fetchURL = "http://localhost:5000/apiAbouts";

const About = () => {
    const [data, updateData] = useState([]);

    const fetchData = async () => {

        //!
        const response = await fetch(loginURL);
        const responseData = await response.json();
        isLogged = responseData[0].isLogged;
        console.log("useEffect"+ isLogged);
        if (isLogged) {
          console.log("under if"+isLogged);
          setDisplay = "";
        }
        //!
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
                    <AboutTile
                        Name={item.name}
                        Img={item.img}
                        Desig={item.desig}
                        Email={item.email}
                        Phone = {item.phone}
                        ResumeLink = {item.resumeLink}
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
            <AddBtn formAddress="/aboutForm" SetDisplay={setDisplay} />
            <div>
                {data.map(renderTile)}
            </div>

        </>
    );
};

export default About;

