const CX1698 = {
    addCss: () => {
        const css = document.createElement('style');
        css.innerHTML = `
            .sticky-btn-container {
                display: none;
                grid-template-columns: 1fr 1fr;
                position: fixed;
                bottom: -100px;
                width: 100vw;
                height: 148px;
                padding: 12px 12px;
                flex-direction: column;
                justify-content: center;
                background: white;
                z-index: 100;
                transition: 0.7s bottom ease;
                justify-content: space-between;
                box-shadow: 0px 0px 30px 0px rgba(109, 109, 109, 0.20);
                border-bottom: 1px solid var(--Palette-Gray-50, #F7F8F9);
            }
            .sticky-btn-container button {
                height: 52px;
                width: 100%;
                font-family: "klein web";
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
                line-height: 24px;
                font-family: "klein web";
            }
            .sticky-btn-container p {
                margin: 0 0 4px 0;
            }
            .visible {
                bottom: 0;
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

        .sticky-btn-name,
        .sticky-btn-price {
            text-overflow: ellipsis;
            overflow: hidden;
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

        @media only screen and (max-width: 767px) {
                  [data-testid="stickyAddToBag"] {
            flex-direction: column !important;
            box-shadow: 0px 0px 30px 0px rgba(109, 109, 109, 0.20);
            border-top: 1px solid var(--Palette-Gray-200, #E4E4E4);
        }
        .mobile-sticky-btn-container {
            width: 100%;
            height: 100%;
            padding: 12px 12px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            background: white;
            justify-content: flex-start;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            opacity: 0;
        }
        .mobile-sticky-btn-inner {
            display: flex;
            max-width: calc(100% - 76px);
        }
        .mobile-sticky-btn-text-container {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .mobile-sticky-btn-img-container {
            height: 100%;
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
            font-family: "klein web";
        }
        .mobile-sticky-btn-container p {
            margin: 0 0 4px 0;
        }

        .mobile-sticky-btn-icon {
            height: 16px;
            opacity: 0;
            position: absolute;
        }

        [class*="StickyAddToBag"] {
            display: flex;
            justify-content: end;
        }
        .has-shown-mobile-btn-animation {
            opacity: 1;
        }
        .has-shown-mobile-btn-animation + [data-testid*="stickyAddToBagButton"] {
            width: 52px;
        }
    
        .mobile-sticky-btn-container.has-shown-mobile-btn-animation + button [class*="Button_buttonContent_"] {
            opacity: 0;
        }

        @keyframes transitionAddToBagButton {
            from {width: 100%;}
            to {width: 52px;}
        }

        @keyframes transitionProductDetails {
            from {opacity: 0;}
            to {opacity: 1;}
        }

        @keyframes transitionButtonIcon {
            from {opacity: 0;}
            to {opacity: 1;}
        }

        @keyframes transitionOut {
            from {opacity: 1;}
            to {opacity: 0;}
        }

        }
        `;
        document.head.appendChild(css);
    },
    icons: {
        a2b: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#FFFFFF;}
</style>
<g>
	<path class="st0" d="M15.1,14.6h4l0,0v1l0,0h-4v3.9v0.1h-1v-0.1v-3.9h-4h0v-1h0h4v-4l0,0h1V14.6z"></path>
	<path class="st0" d="M7.6,17.4H2l0.9-12h2.6c0,0.5,0,1,0,1.5h1c0-0.5,0-1,0-1.5h4.9c0,0.5,0,1,0,1.5h1c0-0.5,0-1,0-1.5H15l0.2,3.3
		h1l-0.3-4.3h-3.7c-0.1-1-0.3-1.8-0.7-2.4c-0.3-0.5-0.7-1-1.1-1.2c-0.5-0.3-1-0.4-1.6-0.4c-0.6,0-1.1,0.1-1.6,0.4
		C6.8,1,6.5,1.5,6.2,2C5.9,2.6,5.7,3.4,5.5,4.4H1.9l-1,14h6.8V17.4z M7.1,2.5c0.2-0.4,0.5-0.7,0.7-0.8c0.3-0.2,0.6-0.3,1.1-0.3
		c0.4,0,0.8,0.1,1.1,0.3c0.3,0.2,0.5,0.4,0.7,0.8c0.2,0.5,0.4,1.1,0.5,1.9H6.5C6.7,3.6,6.8,2.9,7.1,2.5z"></path>
</g>
</svg>`,
        notifyMe: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 3V17H1V3H19ZM2 16H18V4H2V16Z" fill="white"></path>
<path d="M18.3535 4.35352L10 12.707L1.64648 4.35352L2.35352 3.64648L10 11.293L17.6465 3.64648L18.3535 4.35352Z" fill="white"></path>
<path d="M11.6465 10.3535L12.3535 9.64648L18.3535 15.6465L17.6465 16.3535L11.6465 10.3535ZM1.64648 15.6465L7.64648 9.64648L8.35352 10.3535L2.35352 16.3535L1.64648 15.6465Z" fill="white"></path>
<mask id="path-4-inside-1_9379_852398" fill="white">
<path d="M19 16L13 10Z"></path>
</mask>
<path d="M19 16L19.7071 15.2929L13.7071 9.29289L13 10L12.2929 10.7071L18.2929 16.7071L19 16Z" fill="white" mask="url(#path-4-inside-1_9379_852398)"></path>
<mask id="path-6-inside-2_9379_852398" fill="white">
<path d="M1 16L7 10Z"></path>
</mask>
<path d="M1 16L0.292893 15.2929L6.29289 9.29289L7 10L7.70711 10.7071L1.70711 16.7071L1 16Z" fill="white" mask="url(#path-6-inside-2_9379_852398)"></path>
</svg>`,
        checkmark: `<svg class="Icon_Icon__qPZ8O Icon_regular__MbCqv" data-testid="icon-utility-check-small-svg" width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="sticky-btn-icon-path" fill-rule="evenodd" clip-rule="evenodd" d="M15.1829 3.12159L6.43212 13.5392L1.64648 8.75354L2.35359 8.04644L6.36796 12.0608L14.4172 2.47839L15.1829 3.12159Z" fill="black"></path></svg>`
    },
    hasShownMobileButtonAnimation: false,
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
            <div class="mobile-sticky-btn-inner">
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
            </div>
        `;

        return btn;
    },
    handleButtonAnimation: () => {
        setTimeout(() => {
            document.querySelector('[data-testid*="stickyAddToBagButton"]').style.animation =  "transitionAddToBagButton 1s forwards";
            document.querySelector('.mobile-sticky-btn-container').style.animation = "transitionProductDetails 1s forwards";
            document.querySelector('.mobile-sticky-btn-icon').style.animation = "transitionButtonIcon 1s forwards";
            document.querySelector('[data-testid*="stickyAddToBagButton"] [class*="Button_buttonContent"]').style.animation = "transitionOut 1s forwards";
            CX1698.hasShownMobileButtonAnimation = true;
        }, 2000);
    },
    checkButtonText: () => {
        const buttonText = document.querySelector('[data-testid*="pdpActionButton"]').textContent;
        const buttonTextLowerCase = buttonText.toLowerCase();

        if (buttonTextLowerCase === 'item added' || buttonTextLowerCase === 'item toegevoegd' || buttonTextLowerCase === 'artikel hinzugefügt' || buttonTextLowerCase === 'article ajouté' || buttonTextLowerCase === 'articolo aggiunto' || buttonTextLowerCase === 'artículo añadido' || buttonTextLowerCase === 'dodano produkt') {
            return {
                type: "item added",
                text: buttonText
            };
        } else if (buttonTextLowerCase === 'notify me' || buttonTextLowerCase === 'waarschuw mij' || buttonTextLowerCase === 'benachrichtigen sie mich' || buttonTextLowerCase === "m'informer" || buttonTextLowerCase === 'avvisami' || buttonTextLowerCase === 'notifícame' || buttonTextLowerCase === 'powiadom mnie') {
            return {
                type: "notify me",
                text: buttonText
            };
        }
        return {
            type: "a2b",
            text: buttonText
        }
    },
    setButtonText: () => {
        const buttonText = CX1698.checkButtonText();

        if (buttonText.type === 'item added') {
            document.querySelector('.sticky-btn-container button').classList.add('itemAdded');
            document.querySelector('.sticky-btn-container .sticky-btn-icon').innerHTML = CX1698.icons.checkmark;
        } else {
            document.querySelector('.sticky-btn-container button').classList.remove('itemAdded');
            document.querySelector('.sticky-btn-container .sticky-btn-icon').innerHTML = '';
        }
        document.querySelector('.sticky-btn-container .sticky-btn-text').textContent = buttonText.text;
    },
    setMobileButtonIcon: (iconContainer) => {
        const buttonText = document.querySelector('[data-testid*="pdpActionButton"]').textContent;

        let icon;
        if (buttonText.type === "notify me") {
            icon = CX1698.icons.notifyMe;
        } else {
            icon = CX1698.icons.a2b;
        }
        iconContainer.innerHTML = icon;
        return iconContainer;
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
            let st = window.pageYOffset || document.documentElement.scrollTop;
            let staticButtonPos = document.querySelector('[data-testid*="pdpActionButton"]').getBoundingClientRect().top;

            if (st > lastScrollTop && staticButtonPos < 0 && !isShowingButton) {
                CX1698.setButtonText();
                document.querySelector('.sticky-btn-container').classList.add('visible');
                document.querySelector('header').style.opacity = 0;
                isShowingButton = true;
            } else if (st < lastScrollTop && isShowingButton) {
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
                    CX1698.setButtonText();
                }
            }
        };
        const observer = new MutationObserver(callback);
        observer.observe(staticButton, config);
    },
    init: () => {
        // CX1698.addCss();

        const {productImage, productPrice, productName} = CX1698.getProductImageAndPrice();
        const desktopStickyA2Bbutton = CX1698.createDesktopStickyA2Bbutton(productImage, productPrice, productName);
        const mobileProductDetailsElem = CX1698.createMobileProductDetailsElem(productImage, productPrice, productName);
        document.querySelector('body').appendChild(desktopStickyA2Bbutton);
        CX1698.displayDesktopStickyA2BOnScrollDown();

        const iconContainer = document.createElement('div');
        iconContainer.setAttribute('class', 'mobile-sticky-btn-icon');

        optimizely.utils.observeSelector('[data-testid="stickyAddToBag"] [class*="StickyAddToBag_AddToBagButton_"]', stickyBtn => {
            stickyBtn.insertBefore(mobileProductDetailsElem, stickyBtn.firstElementChild);
            
            const buttonIcon = CX1698.setMobileButtonIcon(iconContainer);
            stickyBtn.querySelector('button').insertBefore(buttonIcon, stickyBtn.querySelector('button').firstElementChild);

            if (!CX1698.hasShownMobileButtonAnimation) {
                CX1698.handleButtonAnimation();
            } else {
                mobileProductDetailsElem.classList.add('has-shown-mobile-btn-animation');
            }
        });

        optimizely.utils.waitForElement(`[data-testid*="pdpActionButton"]`).then(staticButton => {
            CX1698.handleButtonTextChanges(staticButton);
        });
    }
}
CX1698.init();