
let weekday = [ 1, 2, 3, 4, 5, 6, 7 ];

function weekNumbersToWords (weekday)
{
    switch ( weekday)
    {

        case 0:
        case 7:
            alert( "It's Sunday!" );
            break;
        case 1:
            alert( "It's Monday" );
            break;
        case 2:
            alert( "It's Tuesday" );
            break;
        case 3:
            alert( "It's Wednesday" );
            break;
        case 4:
            alert( "It's Thursday" );
            break;
        case 5:
            alert( "It's Friday" );
            break;
        case 6:
            alert( "It's Saturday" );
            break;
        default:
            alert( "Wrong input!" );
            break;

    }
}
weekNumbersToWords(weekday );