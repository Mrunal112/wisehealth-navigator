import { useState, useEffect } from "react";

export function GetTime() {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            const currentTime = new Date();
            setDateTime(currentTime);
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    const options = {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };

    const formattedDateTime = dateTime.toLocaleString(undefined, options);

    return (
        <div className="text-2xl font-semibold text-center text-gray-800 pt-4">
            {formattedDateTime}
        </div>
    );
}
