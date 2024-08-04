import React, { useState, useEffect } from 'react';

export default function Footer() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');

    return (
        <footer>
            <p>Copyright {time.getFullYear()} | Emircan Gürbüz</p>
            <p>
                Current Time: {hours}:{minutes}:{seconds}
            </p>
        </footer>
    );
}
