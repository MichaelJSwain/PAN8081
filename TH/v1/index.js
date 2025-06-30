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
                font-family: gill sans;
                font-size: 12px;
                padding: 19px 31px;
                border: none;
                background: black;
                color: white;
                letter-spacing: 1.2px;
                cursor: pointer;
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
            .sticky-btn-text-container {
                overflow: hidden;
            }
            .sticky-btn-container p,
            .sticky-btn-container span {
                line-height: 24px;
                font-family: Gill Sans;
            }
            .sticky-btn-container p {
                margin: 0 0 4px 0;
            }
            .visible {
                top: 0;
            }
            .sticky-btn-container button {
                text-transform: uppercase;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0.75rem;
            }
            .sticky-btn-container .sticky-btn-icon {
                display: flex;
                height: 100%;
            }
            .sticky-btn-container button.itemAdded {
                background: #0e845a;
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
            font-family: Gill Sans;
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
        }
        .sticky-btn-price {
            font-size: 14px;
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
        checkmark: `<svg class="Icon_Icon__qPZ8O Icon_regular__MbCqv" data-testid="icon-utility-check-small-svg" width="0.9285714285714286em" height="1em" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="sticky-btn-icon-path" d="M12.25 3.00391L11.9492 3.30469L4.73047 10.7969L4.42969 11.125L4.10156 10.7969L0.300781 6.83203L0 6.53125L0.628906 5.90234L0.929688 6.23047L4.42969 9.86719L11.3203 2.70312L11.6211 2.375L12.25 3.00391Z" fill="#1B1D1F"></path></svg>`
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
    checkButtonText: () => {
        const buttonText = document.querySelector('[data-testid*="pdpActionButton"]').textContent.toLowerCase();

        if (buttonText === 'item added' || buttonText === 'item toegevoegd' || buttonText === 'artikel hinzugefügt' || buttonText === 'article ajouté' || buttonText === 'articolo aggiunto' || buttonText === 'artículo añadido' || buttonText === 'dodano produkt') {
            return {
                type: "item added",
                text: buttonText
            };
        } else if (buttonText === 'notify me' || buttonText === 'waarschuw mij' || buttonText === 'benachrichtigen sie mich' || buttonText === "m'informer" || buttonText === 'avvisami' || buttonText === 'notifícame' || buttonText === 'powiadom mnie') {
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

        optimizely.utils.observeSelector('[data-testid="stickyAddToBag"]', stickyBtn => {
            stickyBtn.insertBefore(mobileProductDetailsElem, stickyBtn.firstElementChild);
        });

        optimizely.utils.waitForElement(`[data-testid*="pdpActionButton"]`).then(staticButton => {
            CX1698.handleButtonTextChanges(staticButton);
        });
    }
}
CX1698.init();