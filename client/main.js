$('#messages').height('300px');

//establishing the conection
var socket = io.connect('http://localhost:8000', {'forceNew':true});


//listener for messages
socket.on('messages', function(data){
	writer(data);
});


//runner for display data on chat box
function writer(data){
	var html = data.map(function(message, index){
		return (`
			<div class="col s12 m8">
				<div class="card blue-grey darken-1">
					<div class="card-content white-text">
						<span class="card-title"> ${message.nickname}</span>
						<p>${message.text}</p>
					</div>
				</div>
			</div> 
			`);
	});
	$("#messages").html(html);
	document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;

}

//catpch the event when user
function addmsg(e){

	//prepare object to send it.
	var msg = {
		nickname: 'cliente',
		text: $('#new_message').val(),
	};

	//sending the new msg to server with flag 'add-msg'
	socket.emit('add-msg', msg);

	//clean input text
	$('#new_message').val('');
	return false;
}	