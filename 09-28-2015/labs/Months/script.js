// BIRTH MONTH

var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

console.log('My birth month');
console.log(month[3]);

console.log('My half-birth month');
var birthMonth = 3;
if(birthMonth < 7) {
	halfMonth = birthMonth + 6;
} else {
	halfMonth = birthMonth - 6;
}
console.log(month[halfMonth])