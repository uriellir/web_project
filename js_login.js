



	function validate() {
		var username1 = document.getElementById("userName").value;
        var password1 = document.getElementById("password").value;
         if (username1 == null || username1 == "") {
          window.alert("Please enter the username.");
		  formLogin.userName.focus();
			return false;
            }
	
		 if (password1 == null || password1 == "") {
          window.alert("Please enter the password.");
		  formLogin.password.focus();
			return false;
            }
	   
			const url = 'http://localhost:3000/login';
			fetch(url,{
						method: 'post',
						headers: { 'Accept': 'application/json, text/plain , */* ', 'Content-Type': 'application/json'},
						body: JSON.stringify(
							{
								username: username1,
								password: password1
							}
						)
			})
			//receive the info from the server
			.then(function (res){return res.json(); })
			.then(function (data){
				if (data.error){
					alert(data.error)
				}
				else{
					window.location.href = '/ContactUs.html';
				}
			})
		
	}	