let btnOpts = document.getElementById("btn-opt");
let optHidden = document.getElementById("opt-hidden");
let optContainer = document.getElementById("opt-container");
let changeState = false;

btnOpts.onclick = function () {
    changeState = !changeState;
    console.log(changeState);
    if (changeState == true) {
        optHidden.classList.remove("animSlideClose");
        optHidden.classList.add("animSlideOpen");
        optContainer.style.borderBottom = "1px white solid";
        optContainer.style.borderBottomLeftRadius = "0px";
        optContainer.style.borderBottomRightRadius = "0px";
        optHidden.style.borderRight = "1px black solid";
        optHidden.style.borderLeft = "1px black solid";
        optHidden.style.borderBottomLeftRadius = "5px";
        optHidden.style.borderBottomRightRadius = "5px";
        optHidden.style.display = "block";
    }else {
        optHidden.classList.remove("animSlideOpen");
        optHidden.classList.add("animSlideClose");
        optContainer.style.borderBottom = "1px black solid";
        optContainer.style.borderBottomLeftRadius = "5px";
        optContainer.style.borderBottomRightRadius = "5px";
        optHidden.style.display = "block";
    }
}
