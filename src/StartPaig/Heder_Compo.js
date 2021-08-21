import React from "react";
import  Style from './Heder_Compo.module.css';

export const Heder = ()=>
{
    return (
        <header className={Style.Hed_Menu}>

            <div className={Style.Menu}>

                <div className={Style.Logo} >
                    <img src='Logotip.jpg'></img>

                </div>
                <div className={Style.contact}>

                    <img className={Style.Tel1} src='kyivstar.jpg'></img>
                    <div className={Style.Tel11}>+380971601613</div>
                    <img className={Style.Tel2} src='vodofon.png'></img>
                    <div className={Style.Tel22}>+380971601613 </div>
                    <img className={Style.Tel3} src='cal.png'></img>
                    <div className={Style.Zapol}> Позвони и мы подберём для тебя идиальный тур !!!!</div>

                </div>
                <div className ={Style.blocMenu}>
                    <button className ={Style.Button1}>
                        горящие
                    </button>
                    <button className ={Style.Button2}>
                        поиск тура
                    </button>
                    <button className ={Style.Button3}>
                        о нас
                    </button>
                    <button className ={Style.Button4}>
                        вход
                    </button>

                </div>

                <div className ={Style.podbor}>
                    <button className={Style.ButtonPodbor}> подбор тура


                        <img src='Oper.jpg'/></button>

                </div>
            </div>

        </header>);
}