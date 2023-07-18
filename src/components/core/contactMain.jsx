
import React from "react"
import { useState, useEffect } from "react";
import ContactTile from "./contact_tile";
import AddBtn from "./add_btn";

let isLogged= false;
let SetDisplay="none";

// const loginURL = 'http://localhost:5000/login';
// const fetchURL = "http://localhost:5000/apiContacts";

const loginURL = 'https://render-server-ep07.onrender.com/login';
const fetchURL = "https://render-server-ep07.onrender.com/apiContacts";

const ContactMain = () => {
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
                    <ContactTile
                        Mobile1={item.mobile1}
                        Mobile2={item.mobile2}
                        Email1={item.email1}
                        Email2={item.email2}
                        SetDisplay={SetDisplay}
                        UniqueID={uniqueID}
                        Pos={pos}
                    />
                </div>
            </>
        );
    };

    return (
        <>
            <div>
            {/* <AddBtn formAddress="/contactInfoForm" /> */}
            <div>
                {data.map(renderTile)}
            </div>
            </div>

        </>
    );
};

export default ContactMain;

