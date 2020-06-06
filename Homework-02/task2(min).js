//let employeeSalaries = {}; 

let employeeSalaries = {
	Bodya : 3200,
	Olya : 5500,
	Sasha : 4300
};

if(Object.keys(employeeSalaries).length == 0){
	console.log(0)
}else {
	console.log('Sum of employee salaries: ')
	console.log(employeeSalaries.Bodya + employeeSalaries.Olya + employeeSalaries.Sasha)
}


