export function useTimeFromDOM(isGameWon, formattedCurrentDateTime) {
    let currentSessionTime = getTimeFromDOM();
    console.log('formattedCurrentDateTime: ', formattedCurrentDateTime);
    let status;
    console.log('time in addSessionRecord: ', currentSessionTime);
    if (isGameWon) {
        currentSessionTime = `${currentSessionTime}`;
        status = 'win';
    } else {
        currentSessionTime = `${currentSessionTime}`;
        status = 'lose';
    }

    const currentSessionRecord = {
        id: crypto.randomUUID(),
        time: currentSessionTime,
        status: status,
        currentDateTime: formattedCurrentDateTime,
    };

    console.log('currentSessionRecord: ', currentSessionRecord);
    return currentSessionRecord;
}

const getTimeFromDOM = () => {
    const minutes = document.getElementById('minutes').textContent;
    const seconds = document.getElementById('seconds').textContent;
    return `${minutes} : ${seconds}`;
}
