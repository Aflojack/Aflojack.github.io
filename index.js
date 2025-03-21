let showorhide = {
    "about-content": true,
    "education-content": true,
    "work-content": true,
    "skills-content": true,
}

function showOrHide(id) {
    if (showorhide[id]) {
        showorhide[id] = false;
        document.getElementById(id).style.display = "none";
    } else {
        showorhide[id] = true;
        document.getElementById(id).style.display = "block";
    }
}