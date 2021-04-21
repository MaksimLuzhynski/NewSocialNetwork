import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css';

export const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}
