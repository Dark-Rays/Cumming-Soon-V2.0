function active(svg) {

    if(!window.locked) {

        window.locked = true;
        svg.classList.toggle('active');
        const navbar = document.getElementsByClassName('navbar')[0];
        
        if(window.NavState) {
            navbar.style.left= "0px";
            navbar.style.opacity = "0";
            window.NavState = false; // Denotes NavBar is closed
        } else {
            navbar.style.left= "-100px";
            navbar.style.opacity = "1";
            window.NavState = true;
        }

        setTimeout(()=>window.locked=false, 400);
    }
}






window.addEventListener("DOMContentLoaded", () => {
    




//TEST 

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const results  = "DROPPINHOT!"

const text = document.getElementsByClassName("cum")[0];
const nxtTxt = document.getElementsByClassName("soon")[0];
console.log(text)

const removed = text.innerHTML.replace(/(<([^>]+)>)/ig, "");
const splited = removed.split(" ");
let iteration = 0;


async function randomizer() {
    const interval = setInterval(() => {
        if (iteration >= text.innerHTML.length ){
            clearInterval(interval);
            nxtTxt.classList.add("active");
        }
        let size = 0;
        
        text.innerHTML = splited.map( (value, index) => {
            let word = value.split("");
            if(index >= 1) size = splited[index-1].length;
        
            return word.map( (e, i) => {
                i += size;

                if(i <= iteration) return results[i];
                return alphabets[Math.round(Math.random() * 26) ];
            }).join('');
        }).join(" ");
        iteration += 1/3;
    }, 30);
}


setTimeout(() => randomizer(), 3000);
})