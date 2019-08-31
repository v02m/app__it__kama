import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
  return (
      <div className={s.dialog + ' ' + s.active}>
          <NavLink
              to={path}>
                {props.name}
          </NavLink>
      </div>
  );
};

const Message = (props) => {
    return (
        <div
            className={s.dialog}>
                {props.message}
        </div>
    )
};


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
               <DialogItem name="Dimych" id="1"/>
               <DialogItem name="Andrey" id="2"/>
               <DialogItem name="Sveta" id="3"/>
               <DialogItem name="Sasha" id="4"/>
               <DialogItem name="Viktor" id="5"/>
               <DialogItem name="Valera" id="6"/>
            </div> {/* end dialogs__item*/}

            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you it-kama"/>
                <Message message="Yo"/>
            </div>
        </div>
    );
};

export default Dialogs;