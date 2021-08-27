
function getTime(){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" +   today.getSeconds();
    var timeString = time;
    var H = +timeString.substr(0, 2);
    var h = H % 12 || 12;
    var ampm = (H < 12 || H === 24) ? " AM" : " PM";
    timeString = h + timeString.substr(1, 3) + ampm;
    console.log(timeString);
    document.getElementById("currenttime").value = timeString;
};



function saveInput(){
    var pagenotfound = document.getElementById("ay").innerHTML  = "404 could not fetch the results.."
}


// api url
const api_url =
	"https://employeedetails.free.beeceptor.com/my/api/path";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader

// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>Name</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data) {
		tab += `<tr>
	<td>${r.name} </td>	
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("currenttime").innerHTML = tab;
}


show();

