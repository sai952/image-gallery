import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import axios from 'axios';
function Viewimage() {
    const [newslist, setNewsList] = useState([]);
    const [msg, setMsg] = useState("");
    const [users, upUser] = useState();

    let uid = sessionStorage.getItem('useremail')
    // console.log(uid);
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
    function viewNews() {
        return newslist.map((currentrow, index) => {

            return (
                <tr key={index}>
                    <td>{index} </td>
                    <td>{currentrow.title} </td>
                    <td>{currentrow.catagory} </td>
                    <td><img src={currentrow.img_path} width={250} alt={currentrow.title} /> </td>
                     <td><button onClick={() => removeRow(index)} className="btn btn-danger">Delete</button></td> 
                    
                </tr>
            )
        })
    };
    function removeRow(index) {
        var tempemplist = [...newslist]; // make a new copy of array instead of mutating the same array directly. 
        let removerow = tempemplist.splice(index, 1);
        console.log(removerow[0].authoremail)
        axios.delete('http://localhost:4500/emp/remove1/' + removerow[0].authoremail)
          .then(res => {
            setMsg('SUCCESSFULLY DELETED')
            setNewsList(tempemplist)
          })
          .catch(err => {
            console.log(err)
            setMsg('INVALID EMAIL ID')
          })
      }
    return (
        <div>
            <NavigationBar />
    
            {msg}
            <table>
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Title</th>
                        <th>Catagory</th>
                        <th>Image</th>
                        <th>Delete</th>
                        

                        
                    </tr>
                </thead>
                <tbody>
                    {viewNews()}
                </tbody>
            </table>
        </div>
    )
}
export default Viewimage