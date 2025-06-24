function callbackFn(activate, options) {
    optimizely.utils.waitUntil(() => {
        return window &&
        window.__NEXT_DATA__ &&
        window.__NEXT_DATA__.page;
    }).then(() => {
        if (window.__NEXT_DATA__.page === '/pdp') {
            if (window.innerWidth < 768) {
                activate();
            }

            optimizely.utils.waitForElement('[data-testid*="pdpActionButton"]')
            .then(staticButton => {
                const throttleScroll = (cb, delay = 100) => {
                    let shouldWait = false;
                    let waitingArgs;

                    const timeoutFunc = () => {
                        if (waitingArgs == null) {
                            shouldWait = false;
                        } else {
                            cb(...waitingArgs);
                            waitingArgs = null;
                            setTimeout(timeoutFunc, delay);
                        }
                    }

                    return (...args) => {
                        if (shouldWait) {
                            waitingArgs = args;
                            return
                        }
                        cb(...args)
                        shouldWait = true;
                        setTimeout(timeoutFunc, delay);
                    }
                }

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
                    window.addEventListener("scroll", throttleScroll(checkIsStaticButtonOutOfView), false);
                }
            });
        }
    });
}
callbackFn();