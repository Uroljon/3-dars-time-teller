/* 
============
Vazifa №3
============
❓ Sahifaga kirgan odamga birinchi bolib alertda hozirgi vaqtga doir ma'lumotlar ko'rsatilishi kerak.

🟢 Sample Output: 
       - Today is: Wednesday
          Current Time is: 10 PM : 30 : 25
*/
let all = new Date();

let year = all.getFullYear();
let month = all.getMonth();
let months = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Setabr", "Otkabr", "Noyabr", "Dekabr"];
let weekDay = all.getDay();
let week = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "payshanba", "Juma", "Shanba"];
let date = all.getDate();
let hour = all.getHours();
hour = hour<12 ? (hour+ " AM") : (hour-12 +" PM");
let minute = all.getMinutes();
let second = all.getSeconds();

let milliseconds = all.getTime() //getTime() method returns the number of milliseconds since 1 January 1970. 
//console.log(milliseconds, Date.now()) //they're the same

alert (`🟢 Sample Output: 
    - Today is: ${week[weekDay]}
    Current Time is: ${hour} : ${minute} : ${second}`)


// alert!!! w3 says :  There is no need to use new Array().For simplicity, readability and execution speed, use the first one (the array literal method).