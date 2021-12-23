import React, { useState } from 'react'
import axios from 'axios';
import NavigationBar from './NavigationBar';


function UploadImage() {

    let authuser = sessionStorage.getItem('useremail');
    let name = sessionStorage.getItem('username');
    // let uid = sessionStorage.getItem('uid');

    const [title, setTitle] = useState("");
    const [catagory, setCatagory] = useState("");
    // const [descrip, setDescrip] = useState("");
    const [img_path, setImg_path] = useState("");
    const [msg, setMessage] = useState("");

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
        setMessage("");
    }
    const onChangeCatagory = (e) =>{
        setCatagory(e.target.value);
        setMessage("");
    }
    const handleImage = async e => {
        e.preventDefault()
        let img = e.target.files[0]
        if (!img) return alert("File not exist.")
        //5242880 == 5 mb
        if (img.size > 1024 * 1024 * 10) return alert("Size too large!")
        if (img.type !== 'image/jpeg' && img.type !== 'image/png') return alert("File format is incorrect.")

        let data = new FormData()
        data.append('file', img)
        data.append('upload_preset', "saikat")
        data.append('cloud_name', "saikat123")
        fetch('https://api.cloudinary.com/v1_1/saikat123/image/upload', {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setImg_path(data.url)
                console.log(data.url)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const image = {
            title: title,
            catagory: catagory,
            img_path: img_path,
            authorname: name,
            authoremail: authuser,
        }

        axios.post('http://localhost:4500/emp/upload',image)
        .then(res=>{
            console.log(res.data);
            setMessage("Image Added Successfully!!");
        })
        .catch(err=>{
            console.log(err);
        })

        setTitle("");
        // setDescrip("");
        setImg_path("");
        setCatagory("");
        // setAuthor("");

    }

    return (
        <center> <div>
            {/* <NavigationBar /> */}
            <NavigationBar />
            <br />
            {msg}
            <h3>Upload Image</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={catagory} onChange={onChangeCatagory} placeholder="Catagory"
                    required />
                <br /><br />

                <input type="text" value={title}
                    placeholder="Title "
                    onChange={onChangeTitle}
                    required />
                <br /><br />

                <input type="email" value={authuser}
                    placeholder="Enter Email"
                    disabled />
                <br /><br />

                <div className="form-group">
                    <label></label>
                    <input type="file" className="form-control-file" name="img" required onChange={handleImage} />
                </div>

                <input type="submit" value="SEND" />

            </form>
        </div></center>
    )
}


export default UploadImage;