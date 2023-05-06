const matchContainers = document.querySelectorAll('.match');
const voteContainers = document.querySelectorAll('.vote');

matchContainers.forEach((matchContainer, index) => {
  const leftBtn = matchContainer.querySelector('.left-btn');
  const rightBtn = matchContainer.querySelector('.right-btn');
  const leftLabel = voteContainers[index].querySelector('.left-label');
  const rightLabel = voteContainers[index].querySelector('.right-label');
  const leftBar = voteContainers[index].querySelector('.left-bar');
  const rightBar = voteContainers[index].querySelector('.right-bar');

  let leftVotes = 0;
  let rightVotes = 0;

  leftBtn.addEventListener('click', () => {
    leftVotes++;
    updateVotePercentage();
  });

  rightBtn.addEventListener('click', () => {
    rightVotes++;
    updateVotePercentage();
  });



  function updateVotePercentage() {
    const totalCount = leftVotes + rightVotes;

    let leftPercentage = totalCount === 0 ? 50 : (leftVotes / totalCount) * 100;
    let rightPercentage = totalCount === 0 ? 50 : (rightVotes / totalCount) * 100;

    if (index === 3) {
      leftPercentage = 120;
      rightPercentage = 0;
    }

    leftBar.style.width = `${leftPercentage}%`;
    rightBar.style.width = `${rightPercentage}%`;

    leftLabel.textContent = `${leftPercentage.toFixed(0)}%`;
    rightLabel.textContent = `${rightPercentage.toFixed(0)}%`;
  }
  updateVotePercentage();
});
