export function useTimeFromDOM(isGameWon, formattedCurrentDateTime) {
    let currentSessionTime = getTimeFromDOM();
    let status;
    if (isGameWon) {
        currentSessionTime = `${currentSessionTime}`;
        status = 'win';
    } else {
        currentSessionTime = `${currentSessionTime}`;
        status = 'lose';
    }

    return {
        id: crypto.randomUUID(),
        time: currentSessionTime,
        status: status,
        currentDateTime: formattedCurrentDateTime,
    };
}

const getTimeFromDOM = () => {
    const minutes = document.getElementById('minutes').textContent;
    const seconds = document.getElementById('seconds').textContent;
    return `${minutes} : ${seconds}`;
}
