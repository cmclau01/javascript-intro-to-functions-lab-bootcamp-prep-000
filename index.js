//first test
function shout (string) {
  return string.toUpperCase();
}
//second test
function whisper (string2) {
  return string2.toLowerCase();
}
//third test
function logShout (string3) {
  console.log(string3.toUpperCase());
}
//fourth test
function logWhisper (string4) {
 console.log(string3.toLowerCase());
}
//fifth test
function sayHiToGrandma (string5) {
  var uppercase = "HELLO";
  var lowercase = "hello";
  var mixedCase = "Hi there!";
  if (lowercase.toLowerCase() === lowercase) {
    return "I can\'t hear you!";
  } else if (uppercase.toUpperCase() === uppercase) {
    return "YES INDEED!";
  } else {
    return "I "
  }
}