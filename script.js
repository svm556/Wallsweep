const mockVideos = [
  { title: "Patrick Bet-David on Entrepreneurship", channel: "Valuetainment", duration: 12, uploaded: "week" },
  { title: "Joe Rogan Interviews Elon Musk", channel: "JRE", duration: 124, uploaded: "month" },
  { title: "How to Build a Business", channel: "Startup Central", duration: 9, uploaded: "24h" },
  { title: "Patrick Bet-David - Business Strategy", channel: "PBD Podcast", duration: 22, uploaded: "week" },
  { title: "Joe Rogan's Thoughts on AI", channel: "JRE", duration: 15, uploaded: "month" }
];

function filterResults() {
  const searchKeyword = document.getElementById('searchInput').value.toLowerCase();
  const excludeKeyword = document.getElementById('excludeInput').value.toLowerCase();
  const durationFilter = document.getElementById('durationFilter').value;
  const uploadDate = document.getElementById('uploadDate').value;

  const resultsContainer = document.getElementById('resultsContainer');
  resultsContainer.innerHTML = '';

  const filtered = mockVideos.filter(video => {
    const title = video.title.toLowerCase();
    const matchesKeyword = title.includes(searchKeyword);
    const excludesKeyword = !title.includes(excludeKeyword);
    const matchesDuration = (
      durationFilter === "all" ||
      (durationFilter === "short" && video.duration <= 10) ||
      (durationFilter === "medium" && video.duration > 10 && video.duration <= 30) ||
      (durationFilter === "long" && video.duration > 30)
    );
    const matchesUpload = uploadDate === "all" || video.uploaded === uploadDate;

    return matchesKeyword && excludesKeyword && matchesDuration && matchesUpload;
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
      <p><strong>Duration:</strong> ${video.duration} min</p>
    `;
    resultsContainer.appendChild(card);
  });
}
