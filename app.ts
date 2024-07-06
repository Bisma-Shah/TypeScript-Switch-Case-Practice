// SWITCH CASE IN TYPESCRIPT

let grade: string = 'A';

switch (grade) {
    case 'A':
        console.log('Your Performance is Excellent :)');
        break;
        case 'B':
            console.log('Your Performance is Good!');
            break;
            case 'C':
                console.log('You need to work hard on your studies.');
                break;
                case 'D':
                    console.log('Please study hard');
                    break;
                default: 
                console.log('Your grade is incorrect :(');
                break;
}                            // Answer Your Performance is Excellent :)

let marks: number = 77;

switch (true) {
    case marks > 80 && marks <= 100:
        console.log('Your grade is A');
        break;
        case marks > 70 && marks <= 80:
            console.log('Your grade is B');
            break;
            case marks > 60 && marks <= 70:
                console.log('Your grade is C');
                break;
                case marks > 50 && marks <= 60:
                    console.log('Your grade is D');
                    break;
                default:
                console.log('Your number is in-correct!');
                 break;
}                           // Answer Your grade is B

let daysName: string = 'Bisma';

switch(daysName) {
    case 'sunday':
        console.log('Its a Sunday ❤');
        break;
        case 'monday':
            console.log('Its a Monday 💛');
            break;
            case 'tuesday':
                console.log('Its a Tuesday 🧡');
                break;
                case 'wednesday':
                    console.log('Uts a Wednesday 🤍');
                    break;
                    case 'thursday':
                        console.log('Its a Thursday 💗');
                        break;
                        case 'friday':
                            console.log('Its a friday 💖');
                            break;
                            case 'saturday':
                                console.log('Its a saturday 💙');
                                break;
                            default:
                                console.log('Incorrect Day Name.😗');
                                break;
}                                             // Answer Incorrect Day Name.😗

