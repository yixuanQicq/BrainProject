/* eslint-disable */
import { useState } from 'react';

export default function useAlert() {
    const contactStatus = {
        IDLE: 'idle',
        SUCCESS: 'success',
        FAILURE: 'failure',
    };

    // State: contact
    const [alert, setAlert] = useState(contactStatus.IDLE);
    const [message, setMessage] = useState("");

    // check
    const isIdle = () => {
        return alert === contactStatus.IDLE;
    };

    const isSuccess = () => {
        return alert === contactStatus.SUCCESS;
    };

    const isFailure = () => {
        return alert === contactStatus.FAILURE;
    };

    // switch
    const switchToIdle = (msg) => {
        setAlert(contactStatus.IDLE);
        setMessage(msg);
    };

    const switchToSuccess = (msg) => {
        setAlert(contactStatus.SUCCESS);
        setMessage(msg);
    };

    const switchToFailure = (msg) => {
        setAlert(contactStatus.FAILURE);
        setMessage(msg);
    };

    return { alert, message, isIdle, isSuccess, isFailure, switchToIdle, switchToSuccess, switchToFailure };
}
