const throttle = (cb, delay = 100) => {
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

const updateThrottle = throttle(() => {
    console.log("scroll triggered");
});

window.addEventListener("scroll", () => {
    updateThrottle();
});