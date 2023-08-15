import { createContext, useState } from "react";
import { dataArray } from './data';
import { ToastContainer, toast } from 'react-toastify';

import Notify from "./Notify";
// 1
export const questionsContext = createContext();
// 2
export const DataContextProvider = ({ children }) => {
    const [dataQs, setDataQs] = useState(dataArray);
    let localStorageData = localStorage.getItem('items');
    const handleDeleteAll = () => {
        localStorage.removeItem('items');
        dataArray.splice(0, dataArray.length);
        setDataQs([]);
        Notify('تم مسح كل الاسئلة')

    }
    const handleDelete = (id) => {
        if (localStorageData != null) {
            const dataArray = JSON.parse(localStorageData)
            const itemIndex = dataArray.findIndex(item => item.id == id);
            dataArray.splice(itemIndex, 1);
            localStorage.setItem('items', JSON.stringify([...dataArray]))
            setDataQs([...dataArray]);
            Notify('تم مسح السؤال ')
            // if user delete all items =>  remove adelete button
            if (dataArray.length == 0) localStorage.removeItem('items')
        }
    }
    const handleAddData = (item) => {
        console.log(item);
        let data = localStorageData != null ? JSON.parse(localStorageData) : dataArray;
        data.push(item)
        localStorage.setItem('items', JSON.stringify([...data]))
        setDataQs([...data])

    }
    return (
        <questionsContext.Provider value={{ dataQs, handleDeleteAll, handleDelete, handleAddData }}>

            {children}

        </questionsContext.Provider>
    )

}