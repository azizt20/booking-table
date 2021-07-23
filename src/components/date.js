export const addDays = () => {
    const date = new Date();
    let datesCollection = []

    for (var i = 1; i < 30; i++) {
        const newDate = new Date(date.getTime() + i * 1000 * 60 * 60 * 24);
        datesCollection.push(newDate);
    }

    return datesCollection;
}
