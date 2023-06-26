let cars = ["hoi", "joi", "toi", "poi"];
let me = "";
for (let x of cars){
    me += x ;
}
console.log(me);


function calcAge(age) {
	return age*(365)
}
let age_in_days = calcAge(21);
console.log(age_in_days + " days old");



const box = {
    width:100,
    height:200,
    color:"Red",
    


}
let shade_ = box.color
console.log(shade_);