function encrypt() {
				var entext= document.getElementById("icipher").value;
			var passkey= document.getElementById("ipass").value;
			return CryptoJS.AES.encrypt(entext,passkey);
	}
	function decrypt(){
			var entext= document.getElementById("icipher").value;
			var passkey= document.getElementById("ipass").value;
			var dec = CryptoJS.AES.decrypt(entext,passkey)
		return dec.toString(CryptoJS.enc.Utf8);

	}
	function calc(){
		var choice = document.getElementById("ende").value;
		if(choice=="Encrypt"){
			document.getElementById("outputbox").innerHTML = encrypt();
		}
		if(choice=="Decrypt"){
			document.getElementById("outputbox").innerHTML = decrypt();
		}
	}
