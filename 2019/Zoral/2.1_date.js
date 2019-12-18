Date.prototype.daysTo = function daysTo(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

let date1 = Date.prototype.daysTo(new Date(2000, 0, 1), new Date()); 
let date2 = Date.prototype.daysTo(new Date(2000, 0, 1), new Date()); 
  
let passedTime = date2.getTime() - date1.getTime(); 
let passedDays = passedTime / (1000 * 3600 * 24); 
  
console.log("Days passed from <br>"
               + date1 + "<br> to <br>" 
               + date2 + ": <br> " 
               + passedDays.toFixed(1) + " days.");

document.write("Days passed from "
               + date1 + " to <br>" 
               + date2 + ":<br>" 
               + passedDays.toFixed(1) + " days.");