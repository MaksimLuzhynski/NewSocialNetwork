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

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Bob" id="1" />
                <DialogItem name="Victor" id="2" />
                <DialogItem name="Vasil" id="3" />
                <DialogItem name="Margo" id="4" />
                <DialogItem name="Max" id="5" />
                <DialogItem name="Ales" id="6" />
            </div>
            <div className={classes.messages}>
                <Message message="Yo" />
                <Message message="Hellow" />
                <Message message="How are you?" />
                <Message message="Hi" />
            </div>
        </div>
    )
}