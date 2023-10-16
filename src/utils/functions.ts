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