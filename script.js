const USERNAME = "YOUR_CHESS_USERNAME"; // 👈 đổi nick tại đây
const REFRESH_TIME = 60 * 1000; // 60 giây cập nhật lại

async function loadChessData() {
  try {
    // Profile
    const profileRes = await fetch(
      `https://api.chess.com/pub/player/${USERNAME}`
    );
    const profile = await profileRes.json();

    document.getElementById("username").textContent = profile.username;
    document.getElementById("avatar").src =
      profile.avatar ||
      "https://www.chess.com/bundles/web/images/user-image.007dad08.svg";

    // Stats
    const statsRes = await fetch(
      `https://api.chess.com/pub/player/${USERNAME}/stats`
    );
    const stats = await statsRes.json();

    document.getElementById("bullet").textContent =
      stats.chess_bullet?.last?.rating ?? "---";
    document.getElementById("blitz").textContent =
      stats.chess_blitz?.last?.rating ?? "---";
    document.getElementById("rapid").textContent =
      stats.chess_rapid?.last?.rating ?? "---";
    document.getElementById("daily").textContent =
      stats.chess_daily?.last?.rating ?? "---";

  } catch (error) {
    console.error("Không tải được dữ liệu Chess.com", error);
  }
}

loadChessData();
setInterval(loadChessData, REFRESH_TIME);
