async function updateMemberCount() {
    const serverId = "1343698712643502183";
    try {
        let response = await fetch(`https://discord.com/api/v9/guilds/${serverId}/widget.json`);
        let data = await response.json();
        document.getElementById("member-count").innerText = data.presence_count + " members online";
    } catch (error) {
        document.getElementById("member-count").innerText = "Failed to fetch.";
    }
}
updateMemberCount();
