var toggle = document.querySelector('.passage-events button');
var reward = document.querySelector('.reward');
var rewardTitle = reward.querySelector('.subtitle');
var rewardButton = reward.querySelector('.btn');
var rewardText = reward.querySelectorAll('p');
var speakers = document.querySelector('.speakers');

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

