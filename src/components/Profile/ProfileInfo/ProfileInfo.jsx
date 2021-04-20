import classes from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://avatars.mds.yandex.net/get-zen_doc/1866022/pub_5dee2689e6cb9b00aee53512_5dee26f91a8608050f2a7c01/scale_1200"></img>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

