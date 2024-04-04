//کد های مربوط به کامبوننت هدر
//از ریداکس استفاده شده است
import { CAvatar } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilHamburgerMenu, cilAccountLogout } from "@coreui/icons";
import { login, logout } from "../../redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { menuActive, menuDeActive } from "../../redux/Store";
import { UseDispatch } from "react-redux";
import "./header.css";
import { useState } from "react";
//وقتی روی ایکون همبرگرمنو کلیلک میشود میتوان ساید بار را با ان نمایش و بنهان کرد
//وقتی روی ایکون خروج کلیک میشود لاگ اون انجام میشود
const Header = () => {
  const dispath = useDispatch();
  const selector = useSelector((state) => state.user.username);
  const [activem, setActivem] = useState(true);
  const navigate = useNavigate();
  
  const handleLogout = (e) => {
    dispath(logout());
    navigate("/");
  };
  const a = () => {
    dispath(!menuActive);
  };
  return (
    <div className="rounded-4" id="header">
      <CIcon
      
        id="menuic"
        icon={cilHamburgerMenu}
        size="xl"
        // onClick={}
      />
      <CAvatar
        src={
          "data:image/jpeg;base64,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"
        }
      />
      <p id="wlcom">{selector} خوش امدید</p>

      <CIcon
        id="logout"
        onClick={(e) => handleLogout(e)}
        icon={cilAccountLogout}
        size="xl"
      />
    </div>
  );
};

export default Header;
