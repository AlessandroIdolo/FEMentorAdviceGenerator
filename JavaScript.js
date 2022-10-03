function onloadBody() {
	$.ajaxSetup({
		contentType: "application/json"
	});
}

function errorCallback(xhr, status, error) {
	alert("E' evvenuto un errore, stato della chiamata: " + status);
	console.error(xhr);
}



function getTip(){

    var $suggerimento = $('');

    $.ajax({
        type: 'GET',
        url: 'https://api.adviceslip.com/advice',
        success: function(result, status, xhr){
            if (xhr.status < 200 || xhr.status >= 300) {
				errorCallback(xhr, status);
				return;
			}
            
            console.log(JSON.parse(result))
            let res = JSON.parse(result);
            let advice = $("#suggerimento");  
            let number = $("#numero");              
            advice.text('" '+res.slip.advice+' "');
            number.text('A D V I C E   #'+res.slip.id)
        },
        error: errorCallback

    });

};