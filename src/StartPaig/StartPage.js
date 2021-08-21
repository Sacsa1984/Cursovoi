import React from "react";
import'./StartPage.css'
import {Heder} from "./Heder_Compo";
import {Hedr_Baner} from "./Hedr_Baner_Component";
import {Hed_Opis} from "./Hedr_opis_component"
import {Con} from "./Content_Component";

export const Start_Page =()=>
{
    return( 

    <div className='Start_Page'>
       <Heder></Heder>
        <Hedr_Baner></Hedr_Baner>
        <Hed_Opis></Hed_Opis>
       <Con></Con>


    </div>
    );
}