
import React from "react"
import AddBtn from "../core/add_btn";
import { useState, useEffect } from "react";
import ResearchTile from "../core/research_tile";
import ResearchTop from "../core/researchTop";

let isLogged= false;
let SetDisplay="none";

// const loginURL = 'http://localhost:5000/login';
const loginURL = 'https://render-server-ep07.onrender.com/login';

const fetchURL = "https://render-server-ep07.onrender.com/apiResearch"
// const fetchURL = "http://localhost:5000/apiResearch"

const Research = () => {
    // const fetchURL = "https://render-server-ep07.onrender.com/apiResearch"
    
    const [data, updateData] = useState([]);

    const fetchData = async () => {
        const response = await fetch(loginURL);
        const responseData = await response.json();
        isLogged = responseData[0].isLogged;
        console.log("useEffect"+ isLogged);
        if (isLogged) {
          console.log("under if"+isLogged);
          SetDisplay = "";
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
                    <ResearchTile
                        Title={item.title}
                        Year={item.year}
                        Grant={item.grant}
                        SetDisplay={SetDisplay}
                        Investigator={item.investigator}
                        Agency={item.agency}
                        UniqueID={uniqueID}
                        Pos={pos}
                    />
                </div>
            </>
        );
    };

    return (
        <>
            <AddBtn formAddress="/researchForm" SetDisplay={SetDisplay} />
            <ResearchTop />
            <div>
                {data.map(renderTile)}
            </div>

        </>
    );
};

export default Research;

