const addCss = () => {
    const css = document.createElement('style');
    css.innerHTML = `
        [class*="StickyAddToBag"] {
            display: flex;
            justify-content: end;
        }

        [data-testid="stickyAddToBagButton-addToBag-pvh-button"] {
            transition: 1s width ease;
            width: 60px !important;
        }
    `;
    document.head.appendChild(css);
}
addCss();


const createMobileProductDetailsElem = (productImage, productPrice, productName) => {
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

const addProductDetails = () => {
    
    const elem = createMobileProductDetailsElem('https://tommy-europe.scene7.com/is/image/TommyEurope/MW0MW42080_BDS_main?$b2c_updp_m_mainImage_1920$', '19.99', 'shorts')
    document.querySelector('[data-testid="stickyAddToBag"]').insertBefore(elem, document.querySelector('[data-testid="stickyAddToBag"]').firstElementChild);
}

addProductDetails