
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import axios from 'axios';
import { Redirect } from "react-router-dom";


function UserAfterLogin() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  console.log(authuser)
    let uid = sessionStorage.getItem('useremail')
    const [newslist, setNewsList] = useState([]);
    const [msg, setMsg] = useState("");
    const [users, upUser] = useState();
        useEffect(() => {
        axios.get('http://localhost:4500/emp/viewall/' + uid)
            .then(response => {
                setNewsList(response.data);
                // console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
  
  if (authuser == null) {
    return (<Redirect to="/login" />)
  }
  else {
    let name = sessionStorage.getItem('username')
    console.log(name)
    


    function viewNews() {
        return newslist.map((currentrow, index) => {

            return (
                <tr key={index}>
                    <td>{index} </td>
              
                    <td><img src={currentrow.img_path} width={250} alt={currentrow.title} /> </td>
                    
                    {/* <td><textarea cols="50" rows="10" disabled value={currentrow.descrip}></textarea>  </td> */}
                    
                    {/* <td>{(currentrow.status)}</td> */}
                    {/* <td><SimpleDateTime dateFormat="DMY" dateSeparator="/" timeSeparator=":">{currentrow.createdAt}</SimpleDateTime> </td> */}
                </tr>
            )
        })
    };

    return (
      <div>
        <NavigationBar />
        <br />
        <h3>WELCOME {name}</h3>
        <h3>THIS IS USER DASH BOARD</h3>
        <div>
                    <table>
                <thead>
                    <tr>

                        <th>Image</th>
                        
                        

                        
                    </tr>
                </thead>
                <tbody>
                    {viewNews()}
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}

export default UserAfterLogin
