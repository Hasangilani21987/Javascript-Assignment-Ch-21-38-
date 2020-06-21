//                                                   Chapter 21-25
//                                                     Q # 1  


// var firstname = prompt("Enter First Name")
// var secondname = prompt("Enter Second Name")
// var fullname =firstname + " " + secondname

// document.write(fullname)



//                                                     Q # 2


// var mobile = prompt("Enter Your favourite Phone Model")
// document.write("My Favourite Phone Modal " + mobile + "<br>")
// var len = mobile.length
// document.write("Length of string: "+ len)



//                                                     Q # 3


// var a = 'Pakistan'
// var found = a.indexOf('n')
// document.write("Index of n: "+ found)


//                                                     Q # 4


// var b = 'Hello World'
// var found = b.lastIndexOf('l')
// document.write("Last Index of  l: "+ found)



//                                                     Q # 5


// var b = 'Pakistani'
// document.write("String: "+ b + "<br>")
// var found = b.charAt(3)
// document.write("Character at index 3: "+ found)


//                                                     Q # 6



// var firstname = prompt("Enter First Name")
// var secondname = prompt("Enter Second Name")
// var fullname = firstname.concat(secondname)

// document.write(fullname)


//                                                     Q # 7


// var city = 'Hyderabad'
// var replace  = city.replace('Hyder', 'Islam');  //  It will replace only first ocuuring
// document.write("City: " + city + "<br>")
// document.write("After Replacement: "+ replace)


//                                                     Q # 8


// var message = 'Ali and Sami are best friends. They play cricket and football together.'
// var replace = message.replace(/and/g, "&");  //  It will replace all the word and with & in the whole sentence
// document.write(replace)



//                                                     Q # 9


// var a = "472"
// document.write("Value: " + a + "<br>")
// document.write("Type: " + typeof(a) + "<br>")
// var b = parseInt(a)
// document.write("Value: " + a + "<br>")
// document.write("Type: " + typeof(b) + "<br>")


//                                                     Q # 10


// var a = prompt("Enter anything")
// document.write("User Input: " + a + "<br>")
// document.write("Upper Case: " + a.toUpperCase())



//                                                     Q # 11


// var a = prompt("Enter anything")
// document.write("User Input: " + a + "<br>")
// var b = a.charAt(0).toUpperCase();
// document.write("Title Case "+ b + a.slice(1,a.length).toLowerCase())


//                                                     Q # 12


// var num = 35.36;
// var b = num.toString().replace('.', ' ');
// document.write("Number: " + num + "<br>")
// document.write("Result: " + b + "<br>")


//                                                     Q # 13


// var username = prompt("Enter Username: ")
// for (let i = 0; i < username.length; i++) {
//     if (username.charCodeAt([i])==33 || username.charCodeAt([i])==44 || username.charCodeAt([i])== 46 || username.charCodeAt([i])==64) {
//         alert("Please enter a valid username")
//         break;
//     }
// }


//                                                     Q # 14


// A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']

// var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
// var found = false;

// for (var i = 0; i < search.length; i++) {
//     if (search.toLowerCase() === A[i] || search.toUpperCase() === A[i]) {
//         found = true;
//         break;
//     }
// }

// if (found == true) {
//     document.write(search + " is avialable at index " + i + " in our Bakkery <br>")
// } else {
//     document.write("We are sorry. " + search + " is not available in our Bakkery")
// }


//                                                     Q # 15


// var pass = prompt("Enter The Password: ")
// var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var flag = false

// for (var i = 0; i < pass.length; i++) {
//     if ((pass.charCodeAt([i])>=65 && pass.charCodeAt([i])<=90) || (pass.charCodeAt([i])>=97 && pass.charCodeAt(i)<=122) || (pass.length < 6) || pass.charAt(0) != nums[i]) {
//         flag = true;
//         break;
//     }
// }

// if (flag==false) {
//     alert("Please enter a valid password")
// }


//                                                     Q # 16


// var university = 'University of Karachi';
// var b  = university.split("")
// for (let i = 0; i < b.length; i++) {
//     document.write(b[i].slice(0,1) + "<br>")   
// }


//                                                     Q # 17


// var input = prompt("Enter the Input: ")
// document.write("User Input: " + input + "<br>")
// document.write("Last Character of input: " + input.charAt(input.length-1))



//                                                     Q # 18


// var string = "The quick brown fox jumps over the lazy dog"
// var str = string.toLowerCase()
// var ch = 'the'
// var count = str.split(ch).length - 1
// document.write("Text: " + string + "<br>")
// document.write("There are " + count + " occurences of the word The")



//                                                 Chapter 26-30
//                                                     Q # 1  


// var num = prompt("Enter Positive Integer: ")


// //                                                   Part (a)


// document.write("Number: " + num + "<br>")


// //                                                   Part (b)


// document.write("Round off Number: " + Math.round(num) + "<br>")


// //                                                   Part (c)


// document.write("Ceil Number: " + Math.ceil(num) + "<br>")


// //                                                   Part (d)


// document.write("Floor Number: " + Math.floor(num))


// //                                                     Q # 2  


// var num = prompt("Enter Negative Floating Point Number: ")


// //                                                   Part (a)


// document.write("Number: " + num + "<br>")


// //                                                   Part (b)


// document.write("Round off Number: " + Math.round(num) + "<br>")


// //                                                   Part (c)


// document.write("Ceil Number: " + Math.ceil(num) + "<br>")


// //                                                   Part (d)


// document.write("Floor Number: " + Math.floor(num))



//                                                      Q # 3 


// var num = prompt("Enter any number: ")

// document.write("The Absolute value of " + num + " is " + Math.abs(num))


//                                                      Q # 4


// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 6) + 1;
// var numberOfStars = Math.floor(improvedNum);

// document.write("random dice value: " + numberOfStars + "<br>")
// document.write("random dice value: " + numberOfStars + "<br>")



//                                                      Q # 5


// var coin = Math.random();
// var improvedNum = (coin * 2) + 1;
// var numberofcoin = Math.floor(improvedNum);

// document.write(numberofcoin + "<br>")


// if (numberofcoin === 1 ) {
//     document.write("random coin value: Tails")
// } else {
//     document.write("random coin value: Head")
// }


//                                                      Q # 6


// var num = Math.random();
// var improvedNum = (num * 100) + 1;
// var numberofcoin = Math.floor(improvedNum);


// document.write("Random Number Between 1 and 100: " + numberofcoin + "<br>")



//                                                      Q # 7


// var weight = prompt("Enter Your Weight in Kilograms")
// var parse = parseInt(weight);

// document.write("The Weight of User is " + parse + " kilograms")


//                                                      Q # 8

// var number = +prompt("Enter a number between 1 and 10")

// var num = Math.random();
// var improvedNum = (num * 10) + 1;
// var secretnum = Math.floor(improvedNum);


// if (secretnum === number) {
//     alert("Congratulations, You have guessed the Number")
// } else  {
//     alert("Try Again")
// }



//                                                  Chapter 31-34
//                                                     Q # 1  


// var rightNow = new Date();
// document.write(rightNow)


//                                                     Q # 2

// var Month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
// var date = new Date();
// var month = date.getMonth()
// var monthformat = Month[month]

// document.write("Current Month: " + monthformat) 


//                                                     Q # 3


// dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var day = date.getDay()
// var dayformat = dayNames[day]

// document.write("Today is " + dayformat)


//                                                     Q # 4


// dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var day = date.getDay()
// var dayformat = dayNames[day]
// if (dayformat==dayNames[0] || dayformat == dayNames[6]) {
//     alert("It's Fun day")
// }


//                                                     Q # 5


// var date = new Date();
// var dayofmonth = date.getDate()

// if (dayofmonth<16) {
//     document.write('First Fifteen Days of Month')
// }else {
//     document.write("Last Days of Month")
// }


//                                                     Q # 6


// var d = new Date();
// document.write("Current Date: " + d + "<br>")
// var millisec = d.getTime()
// document.write("Elasped Milliseconds since Janurary 1 , 1970: " + millisec + "<br>")
// var minutes = millisec/(1000 * 60).toFixed()
// document.write("Elasped Milliseconds since Janurary 1 , 1970: " + minutes + "<br>")



//                                                     Q # 7


var d = new Date();
var hours = d.getHours()
if (hours>=0 && hours<=12) {
    alert('Its AM')
} else {
    alert('Its PM')
}



//                                               Chapter # 35-38
//                                                  Q # 1



// function currentdate() {
//     var date = new Date();
//     document.write(date)
// }

// currentdate();



//                                                  Q # 2



// function name(a,b) {
//     document.write(a + " " + b);
// }
// name('Ali', 'Hassan')


//                                                  Q # 3


// function add() {
//     var num1 = +prompt("Enter first number")
//     var num2 = +prompt("Enter Second number")
//     return num1 + num2
// }

// var sum = add();
// document.write(sum)


//                                                  Q # 4


// function operation (num1,num2,operator) {
//     return num1 / num2;
// }
// var res = operation(25,5,'/')
// document.write(res)



//                                                  Q # 5


// function square(num) {
//     return num**2;
// }

// var res = square(10)
// document.write(res)


//                                                  Q # 6


// function factorial(num) {
//     if (num === 0 || num === 1)
//         return 1;


//     for (var i = num - 1; i >= 1; i--) {
//         num = num * i
//     } return num
// }

// var res = factorial(5)
// document.write(res)


//                                                  Q # 7


// function conting () {
//     var start = +prompt("Enter Starting Number")
//     var end = +prompt("Enter Ending Number")
//     var ans = start;
//     for (let i = start; i < end; i++) {
//         ans = ans + 1
//         document.write(i + "+" + "1" + "=" + ans + "<br>")
//     }
// } 

// conting()


//                                                  Q # 8


// function hypotenuse(base, perpendicular) {
//     function square() {
//         return (base)**2 + (perpendicular)**2;
//     }

//     document.write("Hypotenuse: " + Math.sqrt(square()).toFixed(4))
// }

// hypotenuse(5,5)


//                                                  Q # 9
//                                                 Part (1)


// function area(width,height) {
//     document.write("Width: " + width + "<br>")
//     document.write("Height: " + height + "<br>")
//     return width * height
// }

// var res = area(15,20)
// document.write("Area: " + res)



//                                                 Part (2)




// function area(width = 15, height = 10) {
//     return width * height;
// }

// var res = area()
// document.write("Area: " + res)


//                                                  Q # 11


// function titleCase(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//     }
//     return splitStr.join(' '); 
//  }

//  var res = titleCase('the quick brown fox')
//  document.write(res)


//                                                  Q # 12



// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     // var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];
//     var longestWord = [0];
  
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord.length){ 
//       longestWord = strSplit[i] 
//        }
//     }

//     return longestWord;
//   }
  
//   var res = findLongestWord("Web Development Tutorial");
//   document.write("EXAMPLE STRING : Web Development Tutorial <br>")
//   document.write("EXPECTED OUTPUT : " + res)


//                                                  Q # 13

// var str = 'JSResourceS.com'
// var chr = 'o'
// function count (str, chr) {
//     var letter_count = 0
//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt([i]) == chr) {
//            letter_count+=1 
//         }
//     }
//     return letter_count;
// }

// var res = count('JSResourceS.com', 'o')
// document.write('Ocurrence of ' + chr + " in " + str + " is: " + res)



//                                                  Q # 14
//                                                  Part(a)



// function calcCircumference(radius) {
//    var circumference = (2*3.14*radius)
//    return circumference.toFixed(2);
// }

// var res = calcCircumference(5)
// document.write("The CircumFerence is " + res)


//                                                  Part(b)


// function calcArea(radius) {
//     var Area = (3.14 * (radius)**2)
//     return Area.toFixed(2);
//  }
 
//  var res = calcArea(5)
//  document.write("The Area is " + res)


