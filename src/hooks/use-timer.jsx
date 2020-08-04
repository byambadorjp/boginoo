import { useState } from 'react';
import { useEffect } from 'react';

export const useTimer = (seconds) => {
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        setTimeout(() => setFinished(true), seconds * 1000);
    }, [])

    return finished;
}