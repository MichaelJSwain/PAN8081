const CX1698 = {
    addCss: () => {
        const css = document.createElement('style');
        css.innerHTML = `
            .sticky-btn-container {
                display: none;
                grid-template-columns: 1fr 1fr;
                position: fixed;
                top: -100px;
                width: 100vw;
                height: 148px;
                padding: 12px 12px;
                flex-direction: column;
                justify-content: center;
                background: white;
                z-index: 100;
                transition: 0.7s top ease;
                justify-content: space-between;
                box-shadow: 0px 0px 30px 0px rgba(109, 109, 109, 0.20);
                border-bottom: 1px solid var(--Palette-Gray-50, #F7F8F9);
            }
            .sticky-btn-container button {
                height: 52px;
                width: 100%;
                font-family: "Klein Web";
                font-size: 16px;
                font-weight: 600;
                border: none;
                background: black;
                color: white;
                cursor: pointer;
            }
            .sticky-btn-text-container {
                overflow: hidden
            }
            .sticky-btn-img-container {
                height: 56px;
                margin-right: 16px;
            }
            .sticky-btn-container img {
                height: 100%;
            }
            .sticky-btn-left-col {
                display: flex;
                overflow: hidden;
                white-space: nowrap;
            }
            .sticky-btn-right-col {
                display: flex;
                justify-content: flex-end;
            }
            .sticky-btn-container p,
            .sticky-btn-container span {
                font-weight: 600;
                line-height: 24px;
                text-transform: capitalize;
                font-family: "Klein Web";
            }
            .sticky-btn-container p {
                margin: 0 0 4px 0;
            }
            .visible {
                top: 0;
            }
            .sticky-btn-container button {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0.75rem;
                padding: 16px 24px;
            }
            .sticky-btn-container .sticky-btn-icon {
                display: flex;
                height: 100%;
            }
            .sticky-btn-container button.itemAdded {
                background: #41850a;
                border: none;
            }
            .sticky-btn-container .sticky-btn-icon-path {
                fill: #fff;
            }


            @media only screen and (min-width: 768px) {
                .sticky-btn-container { 
                    height: 80px;
                    padding: 12px 40px;
                    flex-direction: row;
                    display: grid;
                }
                .sticky-btn-container button {
                    width: 390px
                }
            }


        [data-testid="stickyAddToBag"] {
            flex-direction: column !important;
            box-shadow: 0px 0px 30px 0px rgba(109, 109, 109, 0.20);
            border-top: 1px solid var(--Palette-Gray-200, #E4E4E4);
        }
        .mobile-sticky-btn-container {
            width: 100vw;
            padding: 12px 12px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            background: white;
            z-index: 100;
            justify-content: flex-start;
        }
        .mobile-sticky-btn-img-container {
            height: 56px;
            margin-right: 16px;
        }
        .mobile-sticky-btn-container img {
            height: 100%;
        }
        .mobile-sticky-btn-left-col {
            display: flex;
        }
        .mobile-sticky-btn-container p,
        .mobile-sticky-btn-container span {
            line-height: 24px;
            font-family: "Klein Web";
        }
        .mobile-sticky-btn-container p {
            margin: 0 0 4px 0;
        }
        .mobile-sticky-btn-text-container {
            white-space: nowrap;
        }
        .mobile-sticky-btn-text-container,
        .sticky-btn-name,
        .sticky-btn-price {
            overflow: hidden;
        }
        .sticky-btn-name,
        .sticky-btn-price {
            text-overflow: ellipsis;
        }
        .sticky-btn-name {
            font-size: 16px;
            font-weight: 600;
        }
        .sticky-btn-price {
            font-size: 14px;
            line-height: 20px;
            font-weight: 600;
        }
        .was-price {
            text-decoration: line-through;
        }
        .new-price {
            color: #cc0c2f;
        }
        `;
        document.head.appendChild(css);
    },
    icons: {
        checkmark: `<svg class="Icon_Icon__qPZ8O Icon_regular__MbCqv" data-testid="icon-utility-check-small-svg" width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="sticky-btn-icon-path" fill-rule="evenodd" clip-rule="evenodd" d="M15.1829 3.12159L6.43212 13.5392L1.64648 8.75354L2.35359 8.04644L6.36796 12.0608L14.4172 2.47839L15.1829 3.12159Z" fill="black"></path></svg>`
    },
    getProductImageAndPrice: () => {
        // get first image from carousel
        const productImage = document.querySelector('[data-testid="CarouselItemWrapper"] [data-testid="prod-mainImage_img"]').getAttribute('src');
        const productPrice = {
                        was: document.querySelector('[data-testid="ProductHeaderPrice-WasPriceText"]') ? document.querySelector('[data-testid="ProductHeaderPrice-WasPriceText"]').textContent : null,
                        current: document.querySelector('[data-testid="ProductHeaderPrice-PriceText"]').textContent
                    };
        const productName = document.querySelector('[data-testid="ProductHeader-ProductName-typography-h1"]').textContent;
        
        return {
            productImage,
            productPrice,
            productName
        }
    },
    createDesktopStickyA2Bbutton: (productImage, productPrice, productName) => {
        const btn = document.createElement('div');
        btn.setAttribute('class', 'sticky-btn-container');
        btn.innerHTML = `
            <div class="sticky-btn-left-col">
                <div class="sticky-btn-img-container">
                    <img class="sticky-btn-img" src="${productImage}"/>
                </div>
                <div class="sticky-btn-text-container">
                    <p class="sticky-btn-name">${productName}</p>
                    <div class="sticky-btn-price">
                        ${productPrice.was ? `<span class="was-price">${productPrice.was}</span>` : ""}
                        <span class=${productPrice.was ? "new-price" : "current-price"}>${productPrice.current}</span>
                    </div>
                </div>
            </div>
            <div class="sticky-btn-right-col">
                <button>
                    <span class="sticky-btn-icon"></span>
                    <span class="sticky-btn-text"></span>
                </button>
            </div> 
        `;
        btn.querySelector('button').addEventListener('click', () => {
            document.querySelector('[data-testid*="pdpActionButton"]').click();
            // if size is not selected, scroll to the size selector
            if (!document.querySelector('[class*="ProductSize_SizeSelected"]')) {
                document.getElementById("pdp-size-selector").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
            }
        })
       return btn;
    },
    createMobileProductDetailsElem: (productImage, productPrice, productName) => {
        const btn = document.createElement('div');
        btn.setAttribute('class', 'mobile-sticky-btn-container');
        btn.innerHTML = `
            <div class="mobile-sticky-btn-img-container">
                <img class="mobile-sticky-btn-img" src="${productImage}"/>
            </div>
            <div class="mobile-sticky-btn-text-container">
                <p class="sticky-btn-name">${productName}</p>
                <div class="sticky-btn-price">
                    ${productPrice.was ? `<span class="was-price">${productPrice.was}</span>` : ""}
                    <span class=${productPrice.was ? "new-price" : "current-price"}>${productPrice.current}</span>
                </div>
            </div>
        `;

        return btn;
    },
    setButtonText: () => {
        const buttonText = document.querySelector('[data-testid*="pdpActionButton"]').textContent;

        if (buttonText === 'Item Added') {
            document.querySelector('.sticky-btn-container button').classList.add('itemAdded');
            document.querySelector('.sticky-btn-container .sticky-btn-icon').innerHTML = CX1698.icons.checkmark;
        } else {
            document.querySelector('.sticky-btn-container button').classList.remove('itemAdded');
            document.querySelector('.sticky-btn-container .sticky-btn-icon').innerHTML = '';
        }
        document.querySelector('.sticky-btn-container .sticky-btn-text').textContent = buttonText;
    },
    throttleScroll: (cb, delay = 100) => {
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
    },
    displayDesktopStickyA2BOnScrollDown: () => {
        let lastScrollTop = 0;
        let isShowingButton = false;

        window.addEventListener("scroll", CX1698.throttleScroll(() => { 
            console.log("handling scroll");
            let st = window.pageYOffset || document.documentElement.scrollTop;
            let staticButtonPos = document.querySelector('[data-testid*="pdpActionButton"]').getBoundingClientRect().top;

            if (st > lastScrollTop && staticButtonPos < 0 && !isShowingButton) {
                CX1698.setButtonText();
                console.log("show button");
                document.querySelector('.sticky-btn-container').classList.add('visible');
                document.querySelector('header').style.opacity = 0;
                isShowingButton = true;
            } else if (st < lastScrollTop && isShowingButton) {
                console.log("hide button");
                isShowingButton = false;
                document.querySelector('.sticky-btn-container').classList.remove('visible');
                document.querySelector('header').style.opacity = 1;
            } // else was horizontal scroll
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        }), false);
    },
    handleButtonTextChanges: (staticButton) => {
        const config = { attributes: true, childList: true, subtree: true, characterData: true };

        const callback = (mutationList, observer) => {
            for (const mutation of mutationList) {
            if (mutation.type === "characterData" || mutation.type === "attributes") {
                console.log("MUTATION!")
                // update button text ...
                CX1698.setButtonText();
            }
            }
        };
        const observer = new MutationObserver(callback);
        observer.observe(staticButton, config);
    },
    init: () => {
        CX1698.addCss();

        const {productImage, productPrice, productName} = CX1698.getProductImageAndPrice();
        const desktopStickyA2Bbutton = CX1698.createDesktopStickyA2Bbutton(productImage, productPrice, productName);
        const mobileProductDetailsElem = CX1698.createMobileProductDetailsElem(productImage, productPrice, productName);
        document.querySelector('body').appendChild(desktopStickyA2Bbutton);
        CX1698.displayDesktopStickyA2BOnScrollDown();

        optimizely.utils.observeSelector('[data-testid="stickyAddToBag"]', stickyBtn => {
            stickyBtn.insertBefore(mobileProductDetailsElem, stickyBtn.firstElementChild);
        });

        optimizely.utils.waitForElement(`[data-testid*="pdpActionButton"]`).then(staticButton => {
            CX1698.handleButtonTextChanges(staticButton);
        });
    }
}
CX1698.init();