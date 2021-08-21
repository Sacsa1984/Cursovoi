import React from "react";
import Style from "./Content_Compo.module.css"
import {Zapol_Pred} from"./Content_Zapol"

 export const Con=()=> {

    return(

    <div  className={Style.Div_Content}>
       <Zapol_Pred message="Rexana" ></Zapol_Pred>
        <Zapol_Pred></Zapol_Pred>

    </div>
    );
}