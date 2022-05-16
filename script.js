
//Function to display the date in the taskbar.

function timeDisplay(){
    const time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let timePeriod = ""; 

            if (hours >= 12) {
                hours = (hours - 12);
                timePeriod = "PM";

            } else if (hours < 12) {
                timePeriod = "AM";
            }

    
            if (hours === 0){
                hours = "00";
            }

            if (minutes < 10) {
                minutes = ("0") + minutes;
            }

    let displayedTime = (hours) + (":") + (minutes) + (" " + timePeriod);
          
    document.getElementById('timedisplay').innerHTML = displayedTime;
}

//Set interval of time display to refresh every second.
setInterval(timeDisplay, 1000);


//Function to hide the welcome modal by clicking the relevant icon in the taskbar.

function startModalHider(){
    document.getElementById('startModal').classList.toggle('active');

}





//Function to hide the start menu and adjust styling on start menu button.
function startMenuModal(){

   document.getElementById('startmenu').classList.toggle('active');
   document.getElementById('startbutton').classList.toggle('active');

}


    

        
        
    
    

        

