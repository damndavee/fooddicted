export function generateRandomRating(): string {
    const randomNumber = Math.random(); // Random number between 0 and 1

    switch (true) {
        case randomNumber < 0.10:
            return '5.0';
        case randomNumber < 0.20:
            return '4.5';
        case randomNumber < 0.30:
            return '4.0';
        case randomNumber < 0.40:
            return '3.5'
        case randomNumber < 0.50:
            return '3.0';
        case randomNumber < 0.60:
            return '2.5';
        case randomNumber < 0.70:
            return '2.0';
        case randomNumber < 0.80:
            return '1.5';
        case randomNumber < 0.90:
            return '1.0';
        default:
            return '0.5';
    }
}

export function generateRandomDate(start: Date, end: Date, startHour: number, endHour: number): Date {
    const startTime = start.getTime();
    const endTime = end.getTime();
    const randomTime = startTime + Math.random() * (endTime - startTime);
    
    const randomDate = new Date(randomTime);
    const randomHour = startHour + Math.random() * (endHour - startHour) | 0;
  
    randomDate.setHours(randomHour);
  
    return new Date(randomDate);
}

export const shortFormatDate = (date: Date) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }).replace(',', '');
    const [month, day, year] = formattedDate.split(' ');
    return `${day} ${month} ${year}`;
};