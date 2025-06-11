const CX1698 = {
    addCss: () => {
        const css = document.createElement('style');
        css.innerHTML = `
            .sticky-btn-container {
                display: none;
                grid-template-columns: 1fr 1fr;
                position: fixed;
                top: 0;
                width: 100vw;
                height: 148px;
                padding: 12px 12px;
                flex-direction: column;
                justify-content: center;
                background: white;
                z-index: 100;
                visibility: hidden;
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
                color: #000;
                line-height: 24px;
                font-family: Gill Sans;
            }
            .sticky-btn-container p {
                margin: 0 0 4px 0;
            }
            .visible {
                visibility: visible;
            }
            .sticky-btn-container button {
                text-transform: uppercase;
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
            color: #000;
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
        `;
        document.head.appendChild(css);
    },
    getProductImageAndPrice: () => {
        // get first image from carousel
        const productImage = document.querySelector('[data-testid="CarouselItemWrapper"] [data-testid="prod-mainImage_img"]').getAttribute('src');
        const productPrice = document.querySelector('[data-testid="ProductHeaderPrice-PriceText"]').textContent;
        const productName = document.querySelector('[data-testid="ProductHeader-ProductName-typography-h1"]').textContent;
        console.log("product img = ", productImage);
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
                        <span>${productPrice}</span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div class="sticky-btn-right-col">
                <button>ADD TO BAG</button>
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
                    <span>${productPrice}</span>
                    <span></span>
                </div>
            </div>
        `;

        return btn;
    },
    setButtonText: () => {
        document.querySelector('.sticky-btn-container button').textContent = document.querySelector('[data-testid*="pdpActionButton"]').textContent;
    },
    displayDesktopStickyA2BOnScrollDown: () => {
        let lastScrollTop = 0;
        let isShowingButton = false;

        window.addEventListener("scroll", () => { 
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
        }, false);
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
    }
}
CX1698.init();