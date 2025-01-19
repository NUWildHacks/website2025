import "./EmailList.scss";
import React from "react";

interface ISplashScreenButton {
    id: string;
    children: React.ReactNode;
    onClick: () => any;
}

export const SplashScreenButton: React.FC<ISplashScreenButton> = ({id, children, onClick}) => {
    return (
        <button className="splash__button" id={id} onClick={onClick}>
            {children}
        </button>
    );
};

export default SplashScreenButton;
