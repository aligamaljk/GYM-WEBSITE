import { useState } from "react";
import "./Header.scss";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  // console.log(window.innerWidth);
  // const mobile = true
  const [menu, setMenu] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menu === false && mobile === true ? (
        <div
          style={{
            background: "var(--appColor)",
            padding: "8px",
            borderRadius: "5px",
          }}
          onClick={() => {
            setMenu(true);
          }}
        >
          <img src={Bars} alt="" style={{ width: "30px", height: "25px" }} />
        </div>
      ) : (
        <ul className="header-menu">
          <button className="clos"
            onClick={() => {
              setMenu(false);
            }}
          >
            x
          </button>
          <li
            // onClick={() => {
            //   setMenu(false);
            // }}
          >
            {" "}
            <a href="#home"
                        onClick={() => {
                          setMenu(false);
                        }}
            >Home</a>{" "}
          </li>
          <li
            // onClick={() => {
            //   setMenu(false);
            // }}
          >
            {" "}
            <a href="#programs"
                        onClick={() => {
                          setMenu(false);
                        }}
            >Programs</a>{" "}
          </li>
          <li
            // onClick={() => {
            //   setMenu(false);
            // }}
          >
            {" "}
            <a href="#reasons"
                        onClick={() => {
                          setMenu(false);
                        }}
            >Why us</a>{" "}
          </li>
          <li
            // onClick={() => {
            //   setMenu(false);
            // }}
          >
            {" "}
            <a href="#plans"
                        onClick={() => {
                          setMenu(false);
                        }}
            >Plans</a>{" "}
          </li>
          <li
            // onClick={() => {
            //   setMenu(false);
            // }}
          >
            {" "}
            <a href="#testimonilals"
                        onClick={() => {
                          setMenu(false);
                        }}
            >Testimonials</a>{" "}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
