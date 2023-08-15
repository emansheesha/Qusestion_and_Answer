import React from 'react'
import { toast } from 'react-toastify'
import '../../node_modules/react-toastify/dist/ReactToastify.css';
const Notify = (msg) => {
    return toast(msg)
}

export default Notify
