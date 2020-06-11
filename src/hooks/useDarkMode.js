import {useState, useEffect} from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
    console.log('inital ', initialValue);
    const [value, setValue] = useLocalStorage("isDarkMode", initialValue);
    useEffect(() => {
        value? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode")
    },[value]);

    return[value, setValue]
};

export default useDarkMode;