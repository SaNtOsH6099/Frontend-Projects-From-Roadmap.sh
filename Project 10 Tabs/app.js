const tabs = document.querySelectorAll(".tabs");
const contents = document.querySelectorAll(".content");

tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
        tabs.forEach((btn) => {
            btn.classList.remove("active")
        })
        contents.forEach((content) => {
            content.classList.remove("active")
        })
        
        btn.classList.add("active");
        const target = btn.getAttribute("data-tab");
        document.getElementById(target).classList.add("active");
    })
})