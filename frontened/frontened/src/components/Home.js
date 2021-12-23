import '../App.css';
import React, {useState, useEffect} from 'react'
import NavigationBar from './NavigationBar';
import mypic1 from '../image/div1.jpg';
import mypic2 from '../image/div2.jpg';
import mypic3 from '../image/div3.jpg';
import mypic4 from '../image/div4.jpg';
import mypic5 from '../image/div5.jpg';
import mypic6 from '../image/div6.jpg';
import mypic7 from '../image/div7.jpg';
import mypic8 from '../image/div8.jpg';
import mypic9 from '../image/div9.jpg';
import mypic10 from '../image/div10.jpg';
import mypic11 from '../image/div11.jpg';
import mypic12 from '../image/div12.jpg';
import mypic13 from '../image/div13.jpg';
import mypic14 from '../image/div14.jpg';
import mypic15 from '../image/div15.jpg';
import mypic16 from '../image/div16.jpg';
import mypic17 from '../image/div17.jpg';
import mypic18 from '../image/div18.jpg';
import mypic19 from '../image/div19.jpg';
import mypic20 from '../image/div20.jpg';
import mypic21 from '../image/div21.jpg';
import mypic22 from '../image/div22.jpg';
import mypic23 from '../image/div23.jpg';
import mypic24 from '../image/div24.jpg';
import axios from 'axios';



const Home = () => {
    const [userName, setUserName] = useState('');
    const [userImage, setUserImage] = useState([]);
    const [show, setShow] = useState(false);

    const userHomePage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            // console.log(data);
            setUserName(data.name);
            setShow(true);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        userHomePage();
        axios.get('http://localhost:4500/emp/image')
        .then(res => {
            setUserImage(res.data)
        })
        .catch(err=>{
            console.log(err)

        })
    }, []);

    function Image(){
        return userImage.map((cr,ind)=>{
            return(
                
            <div className="column"key={ind}>
                     <img src={cr.img_path}/>
                     </div>
            
            )
        })
    }
    return (
        
        <>
        <NavigationBar />
        <br/>
        <div className="home-page" className="row">
        {Image()}
        </div>
            <div className="home-page" className="row">
            <div className="column">
                     <img src={mypic1}/>
                     </div>
                     <div className="column">
                     <img src={mypic2}/>
                     </div>
                     <div className="column">
                     <img src={mypic3}/>
                     </div>
                     <div className="column">
                     <img src={mypic4}/>
                     </div>
                     <div className="column">
                     <img src={mypic5}/>
                     </div>
                     
                     <div className="column">
                     <img src={mypic6}/>
                     </div>
                     <div className="column">
                     <img src={mypic7}/>
                     </div>
                     <div className="column">
                     <img src={mypic8}/>
                     </div>
                     <div className="column">
                     <img src={mypic9}/>
                     </div>
                     <div className="column">
                     <img src={mypic10}/>
                     </div>
                     <div className="column">
                     <img src={mypic11}/>
                     </div>
                
                     <div className="column">
                     <img src={mypic12}/>
                     </div>
                     <div className="column">
                     <img src={mypic13}/>
                     </div>
                     <div className="column">
                     <img src={mypic14}/>
                     </div>
                     <div className="column">
                     <img src={mypic15}/>
                     </div>
                     <div className="column">
                     <img src={mypic16}/>
                     </div>
                     <div className="column">
                     <img src={mypic17}/>
                     </div>
                     <div className="column">
                     <img src={mypic18}/>
                     </div>
                     <div className="column">
                     <img src={mypic19}/>
                     </div>
                     <div className="column">
                     <img src={mypic20}/>
                     </div>
                     <div className="column">
                     <img src={mypic21}/>
                     </div>
                     <div className="column">
                     <img src={mypic22}/>
                     </div>
                     <div className="column">
                     <img src={mypic23}/>
                     </div>
                     <div className="column">
                     <img src={mypic24}/>
                     </div>









            </div>
            
        </>
    )
}

export default Home;