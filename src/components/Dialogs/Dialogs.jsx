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

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ];

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you it-kamaA'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 6, message: 'YoV'},
        {id: 5, message: 'YoV'},
    ];


    let dialogsElemets = dialogs
        .map( (d) => {
            return (
                <DialogItem name={d.name} id={d.id}/>
            )

    } );


    let messagesElemets = messages.map( message => <Message message={message.message}/>);
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElemets}
                {/*<DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Sasha" id="4"/>
                <DialogItem name="Viktor" id="5"/>
                <DialogItem name="Valerius" id="6"/>*/}

            </div> {/* end dialogs__item*/}

            <div className={s.messages}>
                {messagesElemets}
                <Message message={messages[0].message}/>
                <Message message={messages[1].message}/>
                <Message message={messages[2].message}/>
                <Message message="qu"/>
                <Message message="Yo"/>
            </div>
        </div>
    );
};

export default Dialogs;