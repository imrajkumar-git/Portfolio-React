

import "./Header.css"

// npm install react-icons --save

import { AiFillLinkedin } from "react-icons/ai";

import { BsFacebook, BsGithub, BsInstagram, BsTwitter} from "react-icons/bs"

export const HeaderSocial = () =>{

    return (
        <div className="header__socials">
            <a href="" target={"_blank"}><BsTwitter /></a>

            <a href="https://www.linkedin.com/in/rajkumar-aryal-38b43a233/" target={"#"}><AiFillLinkedin /></a>
            <a href="https://www.instagram.com/rajkumar_aryal_official/" target={"#"}><BsInstagram /></a>
            <a href="https://www.facebook.com/rajkumararyal0977" target={"_blank"}><BsFacebook /></a>

        </div>
    )
}