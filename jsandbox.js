function showtime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if(hours > 12){
        hours = hours - 12;
    }
    if(minutes < 10){
        minutes = "0" + minutes
    };
    if(seconds < 10){
        seconds = "0" + seconds
    };
    if(hours < 10){
        hours = "0" + hours
    };

    let time = hours + " : " + minutes + " : " + seconds;


     document.getElementById("clock").textContent = time;
};
showtime();
setInterval(showtime, 1000);


///////////////////////////////////////

function binary(decimal) {
	let i = [];
	for (let int = 0; decimal > 0; int++) {
		decimal = Math.floor(decimal / 2);
		if(int++ * 2 > decimal){
			i.push(decimal - int * 2)
		}
	}
	i.reverse();
	return i;
}

