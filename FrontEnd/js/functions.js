
var a =
`
.d8888b.\ \ 888\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ 888\n
d88P\ \ Y88b\ 888\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ 888\n
Y88b.\ \ \ \ \ \ 888\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ 888\ \ \ \ This\ is\ a\ browser\ feature\ intended\ for\n
"Y888b.\ \ \ 888888\ \ .d88b.\ \ 88888b.\ \ \ 888\ \ \ \ developers.\ If\ someone\ told\ you\ to\ copy\n
\ \ \ "Y88b.\ 888\ \ \ \ d88""88b\ 888\ "88b\ \ 888\ \ \ \ and\ paste\ something\ here\ to\ enable\ a\n
\ \ \ \ \ "888\ 888\ \ \ \ 888\ \ 888\ 888\ \ 888\ \ Y8P\ \ \ \ Facebook\ feature\ or\ "hack"\ someone's\n
Y88b\ \ d88P\ Y88b.\ \ Y88..88P\ 888\ d88P\ \ \ \ \ \ \ \ \ account,\ it\ is\ a\ scam\ and\ will\ give\ them\n
"Y8888P"\ \ \ "Y888\ \ "Y88P"\ \ 88888P"\ \ \ 888\ \ \ \ access\ to\ your\ Facebook\ account.\n
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ 888\n
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ 888\n
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ 888\n

See https://www.facebook.com/selfxss for more information.
`;
console.log(a);

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
