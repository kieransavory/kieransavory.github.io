# kieransavory.github.io
Windows 95 based portfolio project. 
During this README document, I will be documenting the creation of this portfolio, and issues that I overcame. 

16/5/22:
On this day, I decided the website would benefit from a pseudo-login screen reminiscent of the login screens first seen on Windows 95, taking a user inputted name
and utilising it as a variable in order to enhance site useability and interactivity. However, creation of a separate login page meant that the variable could not 
be stored. In order to remedy this, I decided to create the login page in the index.html file, being a viewport-wide div with a higher z-index than the other elements
that would have an input field, submit button, and basic javascript input checking to detect whether the user had input their name in a string, or an exclamation 
mark symbol if they did not want to input their name, which fires and else if statement and nullifies the innerHTML input activated upon successful completion of the 
input form. 

17/5/22: 
Today, I tackled existing bugs relative to the about me modal window or (in this instance) pseudo executable file. classList.toggle.('active') was providing 
unwarranted results upon onclick events firing at various locations. To combat this, and not have the element removed from the node tree completely, I decided 
to utilise visibility: hidden; and visibility: visible; so that the elements were callable when required. 
