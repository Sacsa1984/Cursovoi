import React from "react";
import Style from "./Content_Zap.module.css";

export const Zapol_Pred=(props)=>{
    return(
        <div>
            <div className={Style.ContentNapol_Div}><img src='star.png'/>  <img src='star.png'/> <img
                src='star.png'/> <img className={Style.ContentNapol} src='egipet1.jpg'/>
                <div className={Style.text}>{props.message}</div>
            </div>
        </div>
    );
}