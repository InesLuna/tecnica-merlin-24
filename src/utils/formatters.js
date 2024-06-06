export const dateFormatter = (date) => {
    const dateF = new Date(date);

    const day = dateF.getUTCDate();
    const month = dateF.getUTCMonth() + 1;
    const year = dateF.getUTCFullYear();
    const formatedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;

    return formatedDate;
};

export const milliSecondsFormat = (milli) => {
    const seconds = milli / 1000;
    const hours = Math.floor(seconds / 3600);
    const minuts = Math.floor((seconds % 3600) / 60);
    const secondsRemaining = Math.floor(seconds % 60);

    return `${hours}:${minuts}:${secondsRemaining}`;
}