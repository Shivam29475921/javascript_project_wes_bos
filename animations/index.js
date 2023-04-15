const panelEl= document.querySelectorAll(".panel");
const panelHeadingEl = document.querySelectorAll(".panel-heading-text");

const observerPanel = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add("panel-active");
        }
        else
        {
            entry.target.classList.remove("panel-active");

        }
    });
});
const observerPanelHeading = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add("panel-heading-text-active");
        }
        else
        {
            entry.target.classList.remove("panel-heading-text-active");

        }
    });
});

panelEl.forEach((el) => observerPanel.observe(el));
panelHeadingEl.forEach((el) => observerPanelHeading.observe(el));

panelEl.forEach((el)=> el.addEventListener("click", function(){
    el.classList.add("clicked-panel");

}));
panelEl.forEach((el)=> el.addEventListener("transitionend", function(){
    el.classList.remove("clicked-panel");

}));