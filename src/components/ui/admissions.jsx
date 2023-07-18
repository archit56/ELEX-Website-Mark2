import React from "react"
import AdmissionTile from "../core/admission_tile";
import AddBtn from "../core/add_btn";
import { useState, useEffect } from "react";

let isLogged = false;
let setDisplay = "none";

// const loginURL = 'http://localhost:5000/login';
const loginURL = 'https://render-server-ep07.onrender.com/login';

// const fetchURL = "http://localhost:5000/apiAdmissions"
const fetchURL = "https://render-server-ep07.onrender.com/apiAdmissions"

const Admissions = () => {
    const [data, updateData] = useState([]);

    const fetchData = async () => {
        const response = await fetch(loginURL);
        const responseData = await response.json();
        isLogged = responseData[0].isLogged;
        console.log("useEffect" + isLogged);
        if (isLogged) {
            console.log("under if" + isLogged);
            setDisplay = "";
        }

        const res = await fetch(fetchURL);
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
                    <AdmissionTile
                        Title={item.title}
                        Desc1={item.desc1}
                        Desc2={item.desc2}
                        Link1={item.link1}
                        Link2={item.link2}
                        Link3={item.link3}
                        Link4={item.link4}
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
            <AddBtn formAddress="/admissionForm" SetDisplay={setDisplay} />
            <div>
                {data.map(renderTile)}
            </div>

        </>
    );
};

export default Admissions;
