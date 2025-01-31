function updateTime() {
  const utcTimeElement = document.getElementById("utc-time");
  const utcDateElement = document.getElementById("utc-date");

  const now = new Date();

  const utcTime = now.toUTCString().split(" ")[4];

  const day = now.getUTCDate();
  const month = now.toLocaleString("en-GB", { month: "long", timeZone: "UTC" });
  const year = now.getUTCFullYear();

  const daySuffix = (day) => {
    if (day === 11 || day === 12 || day === 13) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const formattedDate = `${day}${daySuffix(day)} ${month}, ${year}`;

  utcTimeElement.textContent = `${utcTime}`;
  utcDateElement.textContent = `${formattedDate}`;
}

setInterval(updateTime, 1000);

updateTime();
