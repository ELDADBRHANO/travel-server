const getAge=(birthYear)=>{
  let year_born = birthYear.slice(-4);
  let date = new Date();
  let n = date.getFullYear();
	let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    age = currentYear - year_born;
    return age;
}
module.exports= getAge;

