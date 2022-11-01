import React,{ useEffect, useState } from "react";

const Cart = () => {

    const [users, setUsers] = useState([])

    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/carts");
      const data = await response.json()
      setUsers(data)
    //  console.log(data)
    }
  
    useEffect(() => {
      fetchData()
    }, [])
  
    return(
        <div>
        <h2 className="text-center">Cart Product List</h2>
            <table className="table border shadow">
                <tbody >
                {users.map((val,index) => {
                        console.log(val)
                            return(  
                                <tr style={{"text-align": "center"}}> 
      
                                    <td>{val.products[0]['productId']}</td>
                                </tr> 
                                )       
                        })}
                </tbody>
            </table>
        </div>
    )
}

export default Cart;