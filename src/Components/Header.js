import React from 'react';
import { AiOutlineCamera } from 'react-icons/ai';
import {FiSend} from 'react-icons/fi';
import {AiFillHome} from 'react-icons/ai';
import {FiSearch} from 'react-icons/fi';
import {BsPlusSquare} from 'react-icons/bs';
import {FaRegHeart} from 'react-icons/fa';
import profile from './profile.jpg';

function Header () {
    return (
        <div>

            <div style = {{width: "100% ", height: "50px", backgroundColor: "lightgrey", display: "flex"}}>
               <AiOutlineCamera style = {{height: "20px", width: "20px", margin: "15px"}}></AiOutlineCamera>
               <h2 style = {{fontFamily: "cursive", margin: "7px", flex: "10"}}>Instagram</h2>
                <FiSend style = {{height: "20px", width: "20px", float: "right", margin: "15px", flex: "1"}}></FiSend>
            </div>
            <div style = {{backgroundColor: "lightgrey", height:"50px",width: "100%", marginTop: "550px ", position: "fixed", display: "flex"}}>
                <AiFillHome style = {{height: "20px", width: "20px",  marginTop: "15px", marginLeft: "40%" }}></AiFillHome>
                <FiSearch style = {{height: "20px", width: "20px", marginLeft: "50px", marginTop: "15px"}}></FiSearch>
                <BsPlusSquare style = {{height:"20px", width: "20px", marginLeft: "50px", marginTop: "15px"}}></BsPlusSquare>
                <FaRegHeart style = {{height:"20px", width: "20px", marginLeft: "50px", marginTop: "15px"}}></FaRegHeart>
                <img src = {profile} style = {{borderRadius: "50%", width: "20px", height: "20px", margin: "15px 15px 15px 50px"}}></img>
            </div>

        </div>
    )
}

export default Header;