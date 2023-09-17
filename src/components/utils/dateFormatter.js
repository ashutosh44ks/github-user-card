export default function dateFormatter (date) {
    // 2020-09-11T08:43:18Z to YYYY-MM-DD
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    return `${year}-${month}-${day}`;
}