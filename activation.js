function callbackFn(activate, options) {
    optimizely.utils.waitUntil(() => {
        return window &&
        window.__NEXT_DATA__ &&
        window.__NEXT_DATA__.page;
    }).then(() => {
        if (window.__NEXT_DATA__.page === '/pdp') {
            optimizely.utils.waitForElement('[data-testid*="pdpActionButton"]')
            .then(staticButton => {
                const isStaticButtonOutOfView = () => {
                    return staticButton.getBoundingClientRect().top < 0;
                };
                const checkIsStaticButtonOutOfView = () => { 
                    if (isStaticButtonOutOfView()) {
                        window.removeEventListener("scroll", checkIsStaticButtonOutOfView);
                        activate();
                    }
                };
                if (isStaticButtonOutOfView()) {
                    activate();
                } else {
                    window.addEventListener("scroll", checkIsStaticButtonOutOfView, false);
                }
            });
        }
    });
}