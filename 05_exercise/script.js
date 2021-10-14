
let weekday = ['Sunday',
               'Monday',
               'Tuesday',
               'Wednesday',
               'Thursday',
               'Friday',
               'Saturday' ];
              

function getLastValue ( weekday )
{
    for ( let i =0; i < weekday.length; i++) {
        weekday.sort();
        console.log( `${ weekday[ weekday.length -1 ] }` );
    }
}
getLastValue(weekday);