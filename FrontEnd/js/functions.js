
function sendEMail(){

		var url = "../BackEnd/send-mail.php";

		var from = document.getElementById('fromname').value + "<" + document.getElementById('fromemail').value + ">";
		var to = "FROM NAME <fromname@fromdomain.tld>";
		var sub = document.getElementById('sub').value;
		var msg = document.getElementById('msg').value;
		var formdata = "from="+from+"&to="+to+"&sub="+sub+"&msg="+msg+"";
		console.log(formdata);

		var xhttp = new XMLHttpRequest();
		xhttp.open('GET',url+'?'+formdata,true);
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState === 4) {
				if (xhttp.status >= 200 && xhttp.status < 400) {
					console.log(xhttp.responseText);
					//document.getElementsByClassName('form')[0].innerHTML='successfully sent the electronic mail';
				} else {
					console.log(new Error('Response returned with non-OK status'));
				}
			}
		};
		xhttp.send();
}
