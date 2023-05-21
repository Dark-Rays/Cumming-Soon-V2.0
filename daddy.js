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