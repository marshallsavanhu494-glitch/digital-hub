function showSection(id) {
  document.querySelectorAll("section")
    .forEach(sec => sec.classList.remove("active"));

  document.getElementById(id).classList.add("active");
}

/* REALISTIC CONTENT STRUCTURE (ready for expansion) */
const data = {
  earn: [
    {
      title: "How to Start Freelancing (Beginner Guide)",
      desc: "Learn how to get your first online job using Fiverr or Upwork."
    },
    {
      title: "3 Legit Ways to Earn Online in 2026",
      desc: "No scams — just real methods that actually work."
    }
  ],

  gaming: [
    {
      title: "EA FC Pro Settings Guide",
      desc: "Improve gameplay with these competitive settings."
    },
    {
      title: "How to Reduce Lag in Online Games",
      desc: "Fix ping issues and boost performance."
    }
  ],

  music: [
    {
      title: "Trending Music Right Now",
      desc: "Find what’s hot in global charts this week."
    },
    {
      title: "How to Discover New Artists Fast",
      desc: "Use playlists, algorithms, and smart search tricks."
    }
  ]
};

function render(section, containerId) {
  const container = document.getElementById(containerId);

  container.innerHTML = data[section].map(item => `
    <div class="post">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `).join("");
}

render("earn", "earnPosts");
render("gaming", "gamingPosts");
render("music", "musicPosts");