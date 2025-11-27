import { getConfig } from "./config";
import "./style.css";
import { LeaderboardMember } from "./types";
import { LeaderboardData } from "./types";

const CONFIG = await getConfig();

async function updateLeaderboard() {
  document.cookie = `session=${CONFIG.sessionToken}`;
  let response = await fetch(
    `/api/${CONFIG.year}/leaderboard/private/view/${CONFIG.leaderboardId}.json`
  );
  let data = (await response.json()) as LeaderboardData;
  showLeaderboard(data);
  console.log(data);
}

function clearLeaderboard() {
  let deleteRow = document.getElementsByClassName("user-row");
  while (deleteRow.length > 0) deleteRow[0].remove();
}

function showLeaderboard(data: LeaderboardData) {
  clearLeaderboard();

  let members: LeaderboardMember[] = Object.values(data.members);

  members.sort((a, b) => {
    return b.stars - a.stars;
  });

  console.log(members);
  for (const [index, member] of members.entries()) {
    console.log(index, member);
    let row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("user-row");
    let now = Date.now() / 1000;
    let durationSinceLastStar = now - member.last_star_ts;
    if (durationSinceLastStar < CONFIG.highlightDuration) {
      row.classList.add("highlighted-user");
    }

    let rankElement = document.createElement("span");
    rankElement.textContent = (index + 1).toString();
    row.appendChild(rankElement);
    let nameElement = document.createElement("span");
    nameElement.textContent = member.name;
    if (member.name === null) {
      nameElement.textContent = "Anonym";
    }
    row.appendChild(nameElement);
    for (let day = 1; day < 13; day++) {
      let dayElement = document.createElement("span");
      row.appendChild(dayElement);
      dayElement.classList.add("star");
      if (day.toString() in member.completion_day_level) {
        //dayElement.textContent = "⭐";
        let level = member.completion_day_level[day.toString()];
        if ("1" in level) {
          dayElement.textContent = "⭐";
        }
        if ("2" in level) {
          dayElement.textContent = "✨";
        }
      } else {
        dayElement.textContent = "★";
      }
    }

    let table = document.getElementById("scores")!;
    table.appendChild(row);
  }
  let refreshed = document.getElementById("last-refresh")!;
  let now = new Date();
  refreshed.textContent = now.toLocaleTimeString();
}

updateLeaderboard();
setInterval(updateLeaderboard, 100000000);
