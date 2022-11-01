import axios from "axios";
import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {


    const [img, setImg] = useState();

  const fetchImage = async () => {

    const res = await fetch("https://picsum.photos/200/300");
    const image = await res.blob();
    const imageUrl = URL.createObjectURL(image);
    setImg(imageUrl);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchData()
  }, [])


    return(
        <div>
            <img src={img} alt="icons" style={{width: "1345px",  height: "400px"}} />
            
            <h2 className="text-center">List of categories</h2>
            
            <table className="table border shadow ">
                <tbody >
                {users.map((val,index) => {
                            return( 
                                <tr style={{"text-align": "center"}}> 
                                    <td>{val.category}</td>
                                </tr> 
                                )       
                        })}
                </tbody>
            </table>
       </div>
    )
}

export default Home;