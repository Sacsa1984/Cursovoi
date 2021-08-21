import React from "react";
import Style from './Hedr_opis.module.css'

export const Hed_Opis=()=>
{
    return( <header className={Style.Hed}>
        <div className={Style.bloc3}>
            <div className={Style.Bloc_1 } >

                 ул.Почтова 27 работаем с 10 до 19
            </div>
            <div className={Style.Bloc_2}>
                2Блок
            </div>
            <div className={Style.Bloc_3}>
                3Блок
            </div>
        </div>

    </header>);
}