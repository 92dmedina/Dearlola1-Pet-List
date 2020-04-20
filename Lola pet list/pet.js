var open = false;
const openBoss = () => {
    header = document.getElementById("header")
    bossBtn = document.getElementById("bossPets");
    if (open === false) {
        open = true;
        bossBtn.style.display = "flex";
        header.style.display = "none";
    } else {
        bossBtn.style.display = "none";
        open = false;
        header.style.display = "block";
    }
};