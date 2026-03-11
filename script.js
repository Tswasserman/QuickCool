// -----------------------------
// QUOTE MODAL
// -----------------------------
const openBtn = document.getElementById("openQuoteModal");
const closeBtn = document.getElementById("closeQuoteModal");
const overlay = document.getElementById("quoteModalOverlay");

if (openBtn && overlay) {
    openBtn.onclick = () => overlay.classList.add("active");
}

if (closeBtn && overlay) {
    closeBtn.onclick = () => overlay.classList.remove("active");
}

if (overlay) {
    overlay.onclick = (e) => {
        if (e.target.id === "quoteModalOverlay") {
            overlay.classList.remove("active");
        }
    };
}

// -----------------------------
// CONTACT FORM → WHATSAPP
// -----------------------------
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.onsubmit = function () {
        const f = this;
        const msg =
            `New Contact Message - QuickCool%0A%0A` +
            `Name: ${f.name.value}%0A` +
            `Email: ${f.email.value}%0A` +
            `Phone: ${f.phone.value}%0A` +
            `Service: ${f.service.value}%0A` +
            `Message: ${f.message.value}`;

        window.open(`https://wa.me/27818751906?text=${msg}`, "_blank");
    };
}

// -----------------------------
// QUOTE FORM → WHATSAPP
// -----------------------------
const quoteForm = document.getElementById("quoteForm");
if (quoteForm) {
    quoteForm.onsubmit = function () {
        const f = this;
        const msg =
            `New Quote Request - QuickCool%0A%0A` +
            `Name: ${f.name.value}%0A` +
            `Email: ${f.email.value}%0A` +
            `Phone: ${f.phone.value}%0A` +
            `Service/Product: ${f.service.value}%0A` +
            `Details: ${f.message.value}`;

        window.open(`https://wa.me/27818751906?text=${msg}`, "_blank");
    };
}

// -----------------------------
// SCROLL REVEAL (LEFT + RIGHT)
// -----------------------------
const revealElements = document.querySelectorAll('.reveal-right, .reveal-left');

const revealOnScroll = () => {
    let delay = 0;

    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {
            setTimeout(() => {
                el.classList.add('show');
            }, delay);

            delay += 150;
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// -----------------------------
// PRODUCT DETAILS DATA
// -----------------------------
const productDetails = {
    "Midea Wall Split Unit": [
        "Energy-efficient inverter technology",
        "Fast cooling performance",
        "Quiet operation for bedrooms",
        "Eco‑friendly refrigerant",
        "Ideal for homes and small offices"
    ],
    "Samsung Inverter AC": [
        "Digital Inverter Boost technology",
        "Ultra‑quiet sleep mode",
        "Fast cooling turbo mode",
        "Anti‑bacterial filter",
        "Perfect for lounges and bedrooms"
    ],
    "LG Dual Inverter": [
        "Dual inverter compressor",
        "40% faster cooling",
        "Low energy consumption",
        "Smart diagnosis system",
        "Premium build quality"
    ]
};

// -----------------------------
// PRODUCT MODAL LOGIC
// -----------------------------
const productModal = document.getElementById("productModalOverlay");
const closeProductModal = document.getElementById("closeProductModal");

const modalImg = document.getElementById("modalProductImage");
const modalTitle = document.getElementById("modalProductTitle");
const modalDesc = document.getElementById("modalProductDescription");
const modalPrice = document.getElementById("modalProductPrice");
const modalFeatures = document.getElementById("modalProductFeatures");

document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {

        const title = card.querySelector("h3").textContent;

        modalImg.src = card.querySelector("img").src;
        modalTitle.textContent = title;
        modalDesc.textContent = card.querySelector("p").textContent;
        modalPrice.textContent = card.querySelector(".price").textContent;

        // Load features
        modalFeatures.innerHTML = "";
        if (productDetails[title]) {
            productDetails[title].forEach(feature => {
                const li = document.createElement("li");
                li.textContent = feature;
                modalFeatures.appendChild(li);
            });
        }

        productModal.classList.add("active");
    });
});

closeProductModal.onclick = () => productModal.classList.remove("active");

productModal.onclick = (e) => {
    if (e.target.id === "productModalOverlay") {
        productModal.classList.remove("active");
    }
};
