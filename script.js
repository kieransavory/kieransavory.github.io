function loginFunction(){

    let userName = document.getElementById('logininput').value;
    let userNameCapitalised = userName.charAt(0).toUpperCase() + userName.slice(1);
        
        if (userName === "") {
            alert("Please input a name. If you do not wish to input a name, please input an exclamation mark. (!)")
            return;
        } 
        
        else if (userName === "!") {
            document.getElementById('loginscreen').classList.toggle('active');
            document.getElementById('userNameInput').innerHTML = ("")
        }

        else {
            document.getElementById('loginscreen').classList.toggle('active');
            document.getElementById('userNameInput').innerHTML = (" ," + userNameCapitalised + ".")
        } 

}






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
    document.getElementById('welcomeBar').classList.toggle('active');

}

function startMenuWelcome(){
    document.getElementById('welcomeBar').style.visibility="visible";
    document.getElementById('startModal').style.visibility="visible";
    
}

function startModalRemover(){
    document.getElementById('welcomeBar').style.visibility="hidden";
    document.getElementById('startModal').style.visibility="hidden";
}





//Function to hide the start menu and adjust styling on start menu button.
function startMenuModal(){

   document.getElementById('startmenu').classList.toggle('active');
   document.getElementById('startbutton').classList.toggle('active');

}



    

        
        
    
    

        

