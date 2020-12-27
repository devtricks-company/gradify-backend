import React from 'react';
import flag from '../../assests/images/flag.png';
import shape from '../../assests/images/shape.png';
import {RiNotification4Line,RiSettings5Line} from 'react-icons/ri';
import jay from '../../assests/images/jay.png';



const Navbar = () => {
    return (
        <div className="navbar">
                <a href="#" className="navbar_flag">
                    <img src={flag} alt="flag"/>
                </a>
            <span className="navbar_icons-window">
                <a href="#">
                    <img src={shape} alt="shape_icon"/>
                </a>
            </span>
            <div className="navbar_nortify">
                <a href="#">
                   <RiNotification4Line size={25} />
                   <span className="badge">3</span>
                </a>
            </div>
            <div className="navbar_picture">
                <img src={jay} alt="jay"/>
            </div>
            <div className="navbar_student_name">
                <a href="#">
                    Jay.S
                </a>
            </div>
            <div className="navbar_setting">
                <RiSettings5Line size={25} color="#555b6d" />
            </div>
        </div>
    )
}

export default Navbar
