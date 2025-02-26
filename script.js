async function updateMemberStats() {
    const serverId = "1343698712643502183";
    try {
        let response = await fetch(`https://discord.com/api/v9/guilds/${serverId}/widget.json`);
        let data = await response.json();

        // Update Online Members
        document.getElementById("member-count").innerText = data.presence_count + " members online";

        // Update Total Members (Using the correct ID: membercount)
        document.getElementById("membercount").innerText = data.members.length + " total members";

    } catch (error) {
        document.getElementById("member-count").innerText = "Failed to fetch online members.";
        document.getElementById("membercount").innerText = "Failed to fetch total members.";
        console.error("Error fetching member stats:", error);
    }
}

// Call function on page load
updateMemberStats();
