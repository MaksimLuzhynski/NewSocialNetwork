import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import classes from './Dialogs.module.css';

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

let dialogsElements = dialogsData.map(item => <DialogItem name={item.name} id={item.id} />)
let messagesElements = messagesData.map(item => <Message message={item.message} />)

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}