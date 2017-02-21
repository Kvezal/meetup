var toggle = document.querySelector('.passage-events button');
var reward = document.querySelector('.reward');
var rewardTitle = reward.querySelector('.subtitle');
var rewardButton = reward.querySelector('.btn');
var rewardText = reward.querySelectorAll('p');
var speakers = document.querySelector('.speakers');

var gelleryButton = document.querySelector('.past-events .btn');
var gellery = document.querySelector('.gellery');

var contact = document.querySelector('.main-footer .contact');
var messageClose = contact.querySelector('.btn');
var messageOpen = document.querySelector('.main-footer .btn');

toggle.addEventListener('click', function (event) {
  event.preventDefault();
  if (!reward.classList.contains('show-reward')) {
		toggle.classList.add('move-envato-elite');
    reward.classList.add('show-reward');
    rewardTitle.classList.add('show-reward-subtitle');
    rewardText[0].classList.add('show-reward-text');
    rewardText[1].classList.add('show-reward-text');
    rewardText[2].classList.add('show-reward-text');
    rewardButton.classList.add('show-reward-btn');
    speakers.classList.add('reward-speakers');
	} else {
    toggle.classList.remove('move-envato-elite');
    reward.classList.remove('show-reward');
    rewardTitle.classList.remove('show-reward-subtitle');
    rewardText[0].classList.remove('show-reward-text');
    rewardText[1].classList.remove('show-reward-text');
    rewardText[2].classList.remove('show-reward-text');
    rewardButton.classList.remove('show-reward-btn');
    speakers.classList.remove('reward-speakers');
	}
});

gelleryButton.addEventListener('click', function (event) {
	event.preventDefault();
	if(!gellery.classList.contains('show-gellery')) {
		if(gellery.classList.contains('hide-gellery')) {
				gellery.classList.remove('hide-gellery');
        gellery.classList.add('show-gellery');
		} else {
        gellery.classList.add('show-gellery');					
		}
		gellery.classList.add('show-gellery');
	} else {
		gellery.classList.remove('show-gellery');
		gellery.classList.add('hide-gellery');
	}
});

messageClose.addEventListener('click', function (event) {
	event.preventDefault();
  contact.classList.add('hide');
  messageOpen.classList.add('show-message-btn');
});

messageOpen.addEventListener('click', function (event) {
	event.preventDefault();
	contact.classList.remove('hide');
	messageOpen.classList.remove('show-message-btn');
});


function digitalWatch() {
  var date = new Date();
	var days = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
	
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  	document.querySelector('.days').innerHTML = days + " :";
	document.querySelector('.hours').innerHTML = hours + " :";
	document.querySelector('.minutes').innerHTML = minutes + " :";
	document.querySelector('.seconds').innerHTML = seconds;
  setTimeout("digitalWatch()", 1000);
}