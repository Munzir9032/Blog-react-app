import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import "./topbar.css";

export default function TopBar() {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/";

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }
    return (
        <div className="top">
            <div className="topleft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topcenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">
                            HOME
                        </Link>
                    </li>


                    <li className="topListItem">
                        <Link className="link" to="/write">
                            WRITE
                        </Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topright">
                {user ? (
                    <Link to="/settings">
                        <img className="topimg" src={PF + user.profilePic} alt="" />
                    </Link>

                ) : <>
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login" >
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register" >
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                </>}
                <i className="topSearchIcon fas fa-search"></i>

            </div>
        </div >
    )
}