 function changeColor() {
    function setRandomColor() {
        let rValue = Math.floor(Math.random() * 255);
        let gValue = Math.floor(Math.random() * 255);
        let bValue = Math.floor(Math.random() * 255);
        document.getElementById("changingColor").style.color = `rgb(${rValue},${gValue},${bValue})`;
    }

    setInterval(setRandomColor, 100);
}
changeColor();