
function countChar(val, lav){
	var len = val.value.length;
	var the_real_display = lav;
	if(len > 150){
		the_real_display.style.color = "#ff0000";
	}
	else{
		the_real_display.style.color = "#ffffff";
	}
	the_real_display.innerHTML = len + "/150";
}

var sendData = function(type, URL, formData, callBack){
  var xhr = new XMLHttpRequest();
  xhr.open(type, URL, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=ISO-8859-1')
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = xhr.responseText;
      callBack(response);
    }
  };
  if(type == "GET"){
    xhr.send();
  }
  if(type == "POST"){
    xhr.send(formData);
  }
};

function sendEMail(){
		var url = "../BackEnd/send-mail.php";

		var from = document.getElementById('fromname').value + "<" + document.getElementById('fromemail').value + ">";
		var to = "TO NAME <toname@todomain.totld>";
		var sub = "PnE subject";
		var msg = document.getElementById('msg').value;
		var formdata = "from="+from+"&to="+to+"&sub="+sub+"&msg="+msg+"";
		
		sendData("POST", url, formdata, function(r){
			console.log(r);
		});
}
