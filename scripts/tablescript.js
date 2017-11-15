/* Below codes are here to generate table by clicking the button */

var students = [];

		function Student(ID, firstName, lastName, userName){
			this.id = ID;
			this.fname = firstName;
			this.lname = lastName;
			this.username = userName; 
			this.print = function(){
				console.log("Student - " + "ID : " + this.id + "\n" + "First Name : " + this.fname + "\n" + "Last Name : " + this.lname + " \n" + "Username : " + this.username);
			}
		}

		students.push(new Student(1, "Beauty and the Beast", "Disney", "$1,263,521,126"));
		students.push(new Student(2, "The Fate of the Furious", "Universal", "$1,239,078,381"));
		students.push(new Student(3, "Despicable Me 3", "Universal", "$1,031,811,070"));
		students.push(new Student(4, "Spider-Man Homecoming", "Sony Pictures", "$880,104,581"));

		var btn = document.getElementById("show-students");
		var tableBody = document.getElementById("table-body");

		btn.addEventListener('click', ()=>{
			students.forEach((student)=>{
				var tableRow = document.createElement("tr");

				tableRow.innerHTML = "<th scope='row'>" + student.id + "</th><td>" + student.fname + "</td><td>" + student.lname + "</td><td>" + student.username + "</td>";	
				
				tableBody.appendChild(tableRow);
				student.print();
			});

		});