import React, { useEffect,createContext } from 'react';
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux";
import {inc,dec} from  "../reducer/userReducer";

const Logout =()=>
{
    var myState=useSelector((state)=>state.num);
    var dispatch = useDispatch(myState);
    const history=useHistory();

useEffect(()=>
{
fetch('/logout',
{
    method:"GET",
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
    },
    credentials:"include"
})
.then((res)=>{
    
    if(res.status!==200)
    {
        const error=new Error(res.error);
        throw error;
    }
    else{
        localStorage.setItem('jw',1);
    history.push("/");
    
}})
.catch(err=>{
    console.log(err);
})
});




    return (
        <>

            <h2></h2>

        </>
    )
}

export default Logout;