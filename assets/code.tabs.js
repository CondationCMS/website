document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", (e) => {

        const tab = e.target.closest(".tab");
        if (!tab) return;

        const container = tab.closest(".code-tabs");

        const tabs = container.querySelectorAll(".tab");
        const contents = container.querySelectorAll(".code-content");

        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");

        container
            .querySelector(`[data-content="${tab.dataset.tab}"]`)
            .classList.add("active");
    });
});