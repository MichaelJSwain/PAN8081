


const trackScrollDirection = () => {
    let lastScrollTop = 0;
    let isShowingButton = false;

    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
    let st = window.pageYOffset || document.documentElement.scrollTop;
    let buttonPos = document.querySelector('[data-testid="pdpActionButton-addToBag-pvh-button"]').getBoundingClientRect().top;  // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

    // console.log("scroll pos = ", st, "last scroll pos = ", lastScrollTop, "button pos = ", buttonPos);

    if (st > lastScrollTop && buttonPos < 0 && !isShowingButton) {
        console.log("show button");
        isShowingButton = true;
    } else if (st < lastScrollTop && isShowingButton) {
        // console.log("scrolling up");
        console.log("hide button");
        isShowingButton = false;
    } // else was horizontal scroll
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);
}

trackScrollDirection();