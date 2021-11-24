let id = 'no';
//localStorage.clear();
showData();
function manageData(){
	let person = document.getElementById('person').value;
	//console.log(person);
	if (person == '') {
		document.getElementById('msg').innerHTML='Please Enter Person name';
	}
	else{
		if (id == 'no') {
			let arr = getData();
			if (arr == null) {
				let arr =[person];
				setData(arr);
			}
			else{
				arr.push(person);
				setData(arr);
			}	
			document.getElementById('msg').innerHTML='Data Inserted';
		}
		else{
			let arr = getData();
			arr[id] = person;
			setData(arr);
			document.getElementById('msg').innerHTML='Data Updated';
			id = 'no';
		}
		//document.getElementById('msg').innerHTML='Data Inserted';
	}
	document.getElementById('person').value = '';
	showData();
}

function showData(){
	let arr = getData();
	//console.log(arr);
	if (arr != null) {
		let html = '';
        let sno = 1;
		for (let k in arr){
		html = html+`<tr><td>${sno}</td><td>${arr[k]}</td><td><a href="javascript:void(0)" onclick="editData(${k})">Edit  </a><a href="javascript:void(0)" onclick="deleteData(${k})">Delete</a></td></tr>`;
		sno++;
	 }
	 document.getElementById('tBody').innerHTML = html;
   }
	
}


function editData(rid){
	id = rid;
	let arr = getData();
	document.getElementById('person').value = arr[rid];
}


function deleteData(rid){
	let arr = getData();
	arr.splice(rid,1);
	setData(arr);
	showData();

}

function setData(arr){
	localStorage.setItem('person',JSON.stringify(arr));
}

function getData(){
	let arr = JSON.parse(localStorage.getItem('person'));
	return arr;
}