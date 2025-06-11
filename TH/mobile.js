const addCss = () => {
    const css = document.createElement('style');
    css.innerHTML = `
        [data-testid="stickyAddToBag"] {
            flex-direction: column !important;
        }
        .mobile-sticky-btn-container {
            width: 100vw;
            padding: 12px 12px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            background: white;
            z-index: 9999999;
            justify-content: space-between;
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
            font-size: 16px;
            line-height: 24px;
            font-family: Gill Sans;
        }
        .mobile-sticky-btn-container p {
            margin: 0 0 4px 0;
        }
    `;
    document.head.appendChild(css);
}
addCss();
const getProductImageAndPrice = () => {
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
}

const createMobileStickyA2Bbutton = (productImage, productPrice, productName) => {
    const btn = document.createElement('div');
    btn.setAttribute('class', 'mobile-sticky-btn-container');
    btn.innerHTML = `
        <div class="mobile-sticky-btn-img-container">
            <img class="mobile-sticky-btn-img" src="${productImage}"/>
        </div>
        <div class="mobile-sticky-btn-text-container">
            <p>${productName}</p>
            <div>
                <span>${productPrice}</span>
                <span></span>
            </div>
        </div>
    `;

    return btn;
}

const {productImage, productPrice, productName} = getProductImageAndPrice();
const button = createMobileStickyA2Bbutton(productImage, productPrice, productName);

optimizely.utils.observeSelector('[data-testid="stickyAddToBag"]', stickyBtn => {
    stickyBtn.insertBefore(button, stickyBtn.firstElementChild);
});