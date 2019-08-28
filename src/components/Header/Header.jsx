import React from "react";
import s from "./Header.module.css";


const Header = () => {
    return (
        
        <header className={s.header}>
            <img
                className="logo"
                src="https://image.freepik.com/free-vector/gradient-logo-template-with-abstract-shape_23-2148204210.jpg"
                alt="logo"
            />
        </header>
    );
}

export default Header;
