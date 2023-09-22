// counter.js
document.addEventListener("DOMContentLoaded", function () {
    const counterElement = document.getElementById("counter");

    function updateCounter() {
        // Get the current count from localStorage
        let count = localStorage.getItem("visitCount");

        // If count is not set, initialize it to 0
        if (count === null) {
            count = 0;
        } else {
            count = parseInt(count);
        }

        // Increment the count
        count++;

        // Update localStorage with the new count
        localStorage.setItem("visitCount", count);

        // Update the counter display
        counterElement.textContent = count;
    }

    // Update the counter initially and then at intervals
    updateCounter();
    setInterval(updateCounter, 10000); // Update every 10 seconds (adjust as needed)
});
