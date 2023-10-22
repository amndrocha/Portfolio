window.addEventListener("scroll", preventMotion, false);
window.addEventListener("touchmove", preventMotion, { passive: false });

function preventMotion(event)
{
    event.preventDefault();
    event.stopPropagation();
}