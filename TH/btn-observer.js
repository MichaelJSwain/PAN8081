 const config = { attributes: true, childList: true, subtree: true, attributeOldValue: true };

        const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            setTimeout(() => {
console.log("mutation ", mutation.type, document.querySelector('[data-testid="ProductActions-component"] [class*="Button_buttonContent"]').textContent)
            }, 2000);
            

            // if (mutation.type === "attributes" || mutation.type === "childList") {
            //         console.log("mutation!", mutation.target.textContent);
            // }
        }
        };
        
        const target = document.querySelector('[data-testid="ProductActions-component"] [class*="Button_buttonContent"]');
        const observer = new MutationObserver(callback);
        observer.observe(target, config);