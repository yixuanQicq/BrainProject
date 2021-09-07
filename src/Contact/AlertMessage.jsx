/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Alert} from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    alertMessage: {
    },
}));

export default function AlertMessage({ className, alertHook }) {
    const classes = useStyles();

    return (
        <div className={classes.alertMessage}>
            {
                alertHook.isSuccess() ?
                    <Alert severity="success" onClose={() => {alertHook.switchToIdle("")}}>{alertHook.message}</Alert>
                    : alertHook.isFailure() ?
                    <Alert severity="warning" onClose={() => {alertHook.switchToIdle("")}}>{alertHook.message}</Alert>
                    :
                    <p></p>
            }
        </div>
    );
}
