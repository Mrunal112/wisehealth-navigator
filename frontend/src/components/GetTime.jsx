import { useState } from "react"

export function GetTime() {
    const [time, setTime] = useState();

    setInterval(() => {
        const date = new Date;
        setTime(date);
    }, 1000);
    
    return <div>
        {time }

    </div>
}