async function updateMemberStats() {
    const serverId = "1343698712643502183";

    try {
        // Fetch Online Members (Using Discord Widget API)
        let widgetResponse = await fetch(`https://discord.com/api/v9/guilds/${serverId}/widget.json`);
        let widgetData = await widgetResponse.json();
        document.getElementById("member-count").innerText = widgetData.presence_count + " members online";

        // Fetch Total Members (Using External API)
        let totalResponse = await fetch(`https://discordlookup.mesavirep.xyz/v1/guilds/${serverId}`);
        let totalData = await totalResponse.json();
        document.getElementById("membercount").innerText = totalData.member_count + " total members";

    } catch (error) {
        document.getElementById("member-count").innerText = "Failed to fetch online members.";
        document.getElementById("membercount").innerText = "Failed to fetch total members.";
        console.error("Error fetching member stats:", error);
    }
}

// Call function on page load
updateMemberStats();
