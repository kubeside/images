import FIRST_SOLVE_AUDIO_URL from "./assets/blood.mp3";
import SOLVE_AUDIO_URL from "./assets/solve.mp3";
import NEW_CHALLENGE_AUDIO_URL from "./assets/new-challenge.mp3";
// Payloads:
// {"message":{"playerId":"2c35867e-eb2a-515e-b0e8-9da3cccb5a07","challengeName":"become-human","solvedAt":"2026-05-26T20:01:23.636858Z"},"type":"solve"}
// {"message":{"name":"oilmarket","displayName":"oilmarket","author":"Blorptopia","description":"Oilmarket er den nye olje-tradings platformen vi har bygget. Klarer du \u00E5 f\u00E5 nok penger til \u00E5 kj\u00F8pe Sverige?\n","hideUntil":null,"categories":["misc"],"tags":[],"event":"","difficulty":"medium","flagFormat":"CTF{...}","attachments":[{"fileName":"oilmarket.zip","downloadUrl":"https://files.nerd.imavgs.no/oilmarket/handout.zip"}],"hasRemote":true},"type":"challenge"}
async function main(): Promise<void> {
	const solvedChallengeIds = [];
	const seenChallengeIds = [];
	
	const solves = await getSolves();
	for (const solve of solves) {
		if (!solvedChallengeIds.includes(solve.challengeName)) {
			solvedChallengeIds.push(solve.challengeName);
		}
	}
	const challenges = await getChallenges();
	for (const challenge of challenges) {
		if (!seenChallengeIds.includes(challenge.name)) {
			seenChallengeIds.push(challenge.name);
		}
	}

	const websocket = new WebSocket("wss://nerd.imavgs.no/api/events");
	websocket.addEventListener("close", () => {
		console.log("[ERR] Close");
		location.reload();
	});
	websocket.addEventListener("message", (event) => {
		const message = JSON.parse(event.data);
		if (message.type === "solve") {
			const challengeId = message.message.challengeName;
			if (!solvedChallengeIds.includes(challengeId)) {
				const audio = new Audio(FIRST_SOLVE_AUDIO_URL);
				audio.play();
				solvedChallengeIds.push(challengeId);
				console.log(`[DEB] ${challengeId} blood`);
			} else {
				const audio = new Audio(SOLVE_AUDIO_URL);
				audio.play();
				console.log(`[DEB] ${challengeId} solve`);
			}
		}
		if (message.type === "challenge") {
			const challengeId = message.message.name;
			if (!seenChallengeIds.includes(challengeId)) {
				const audio = new Audio(NEW_CHALLENGE_AUDIO_URL);
				audio.play();
				seenChallengeIds.push(challengeId);
			}
		}
		console.log(event.data);
	});
	websocket.addEventListener("error", () => {
		console.log("[ERR] Close");
		location.reload();
	});
}
async function getSolves() {
	const response = await fetch("https://nerd.imavgs.no/api/solves");
	return await response.json();
}
async function getChallenges() {
	const response = await fetch("https://nerd.imavgs.no/api/challenges");
	return await response.json();
}
main();
