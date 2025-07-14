import {useState} from "react";

export function useDebounce(func :Function, delay :number) {
    const [timer, setTimer] = useState<number>();

    return function () {
        clearTimeout(timer);
        let timerTimeout = setTimeout(func, delay);
        setTimer(timerTimeout);
    };
}