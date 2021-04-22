import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import classes from './Dialogs.module.css';

export const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(item => <DialogItem name={item.name} id={item.id} />)
    let messagesElements = props.messagesData.map(item => <Message message={item.message} />)

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