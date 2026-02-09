const accordionHeaders = document.querySelectorAll(".accordion-header");
const accordionContents = document.querySelectorAll(".accordion-content" );
const accordionFirstContent = document.querySelector(".accordion-contents");

accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionContent = accordionItem.querySelector(".accordion-content");

        accordionContent.classList.toggle("active");

        if (accordionContent.classList.contains("active")) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = "0";
        }
    });
});

accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
        const accordionItems = header.parentElement;
        const accordionContenti = accordionItems.querySelector(".accordion-contents");

        accordionContenti.classList.toggle("active");
        if (accordionContenti.classList.contains("active")) {
            accordionContenti.style.maxHeight = "0";
        } else {
            accordionContenti.style.maxHeight = accordionContenti.scrollHeight + 'px';
        }
    });
});