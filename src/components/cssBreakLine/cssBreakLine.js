import * as React from "react";
import * as style from "./cssBreakLine.module.css";

const CSS = () => {
    return (
        <div
            className={style.container}
        >
            <div>Assignments</div>
            <div>Work History</div>
            <div>Notes</div>
            <div>
                {/*<Box>*/}
                    Messages
                {/*    {unreadSMSCount && unreadSMSCount > 0 ? (*/}
                {/*        <Chip label={unreadSMSCount} variant="outlined" size="small" color="error" />*/}
                {/*    ) : null}*/}
                {/*</Box>*/}
            </div>
            <div>Paperwork</div>
            <div>Background Checks</div>
            <div>Drug Screening</div>
            <div>Activity Log</div>
        </div>
    );
};

export default CSS;
