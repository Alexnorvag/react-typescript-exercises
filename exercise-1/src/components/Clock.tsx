import React, {FC, useCallback, useEffect, useState} from "react";

import "./Clock.css";

interface ClockProps {
    hour12?: boolean;
}

const Clock: FC<ClockProps> = ({hour12}) => {
    const [time, setTime] = useState<string>("");

    const getCurrentTime = useCallback(
        () =>
            new Date().toLocaleString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12
            }),
        [hour12]
    );

    useEffect(() => {
        const changeTime = () => {
            const currentTime = getCurrentTime();

            setTime(currentTime);
        };

        const clockInterval = setInterval(changeTime, 1000);
        return () => clearInterval(clockInterval);
    }, [getCurrentTime]);

    return <span className="time-text">{time}</span>;
};

Clock.defaultProps = {
    hour12: true
};

export default Clock;
