import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

export const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>)
}

let dialogsData = [
    { id: 1, name: "Bob" },
    { id: 2, name: "Victor" },
    { id: 3, name: "Vasil" },
    { id: 4, name: "Margo" },
    { id: 5, name: "Max" },
    { id: 6, name: "Ales" },
];

let messagesData = [
    { id: 1, message: "How are you?" },
    { id: 2, message: "Yo!!!" },
    { id: 3, message: "Hellow " },
    { id: 4, message: "Hi" },

]

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
            </div>
        </div>
    )
}