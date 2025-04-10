const mockVideos = [
  { title: "Patrick Bet-David on Entrepreneurship", channel: "Valuetainment", duration: "12:34" },
  { title: "Joe Rogan Interviews Elon Musk", channel: "JRE", duration: "2:04:55" },
  { title: "How to Build a Business", channel: "Startup Central", duration: "9:45" },
  { title: "Patrick Bet-David - Business Strategy", channel: "PBD Podcast", duration: "22:15" },
  { title: "Joe Rogan's Thoughts on AI", channel: "JRE", duration: "15:10" }
];

function filterResults() {
  const searchKeyword = document.getElementById('searchInput').value.toLowerCase();
  const excludeKeyword = document.getElementById('excludeInput').value.toLowerCase();
  const resultsContainer = document.getElementById('resultsContainer');
  resultsContainer.innerHTML = '';

  const filtered = mockVideos.filter(video => {
    const title = video.title.toLowerCase();
    return title.includes(searchKeyword) && !title.includes(excludeKeyword);
  });

  if (filtered.length === 0) {
    resultsContainer.innerHTML = "<p>No videos found matching your filters.</p>";
    return;
  }

  filtered.forEach(video => {
    const card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML = `
      <img src="https://via.placeholder.com/250x140" alt="Video thumbnail">
      <h3>${video.title}</h3>
      <p><strong>Channel:</strong> ${video.channel}</p>
      <p><strong>Duration:</strong> ${video.duration}</p>
    `;
    resultsContainer.appendChild(card);
  });
}
