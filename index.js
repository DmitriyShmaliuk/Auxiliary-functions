function getDateString(date){
    let hours = (date.getHours() < 13)? date.getHours(): date.getHours () - 12;
    hours = (hours < 10) ? "0" + hours: hours;

    let currentDate = new Date();
    let day = (date.getDate()< 10)?"0" + date.getDate() : date.getDate();

    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July','August', 'September','October','November', 'December'];

    if (date.getFullYear() === currentDate.getFullYear()) {
        if(date.getMonth() === currentDate.getMonth()){
            if(date.getDate() === currentDate.getDate()) {
                return "Today " + hours + ":" + ((date.getMinutes() < 10)?"0" : "") + date.getMinutes()
                    + ((date.getHours() < 13)? " AM":" PM");
            }
            else {
                return (currentDate.getDate() - date.getDate()) + " days ago " + hours + ":"
                    + ((date.getMinutes() < 10)?"0" : "") + date.getMinutes() + ((date.getHours() < 13)? " AM":" PM");
            }
        }
    }

    return `${day} ${months[date.getMonth()]} ${date.getFullYear()} ` + hours + ":"
        + ((date.getMinutes() < 10)?"0" : "") + date.getMinutes() + ((date.getHours() < 13)? " AM":" PM");;
}

export function getDateString;