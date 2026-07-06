function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'ar,cs,de,el,es,fr,hi,hr,hu,id,it,ja,ms,pl,pt,ro,ru,sk,sl,th,tr,uk,uz,vi,zh',
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
    }, 'google_translate_element');
}

document.addEventListener('DOMContentLoaded', () => {
    const toTop = document.getElementById('toTop');
    toTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    toTop.style.display = "block";
    let b = false;

    document.onscroll = function () {
        if ((window.scrollY > window.innerHeight / 2) !== b) {
            b = !b;
            toTop.style.opacity = b ? 1 : 0;
            toTop.style.transform = b ? "translateY(0)" : "translateY(90px)";
            toTop.style.pointerEvents = b ? "auto" : "none";
        }
    };



    const accordions = document.querySelectorAll(".accordion");
    const toggleAccordion = (clickedAccordion) => {
        accordions.forEach(a => {
            const panel = a.nextElementSibling;

            if (a === clickedAccordion) {
                const isClosed = panel.style.maxHeight === "0px" || panel.style.maxHeight === "";

                if (isClosed) {
                    a.classList.add("active");
                    panel.style.maxHeight = panel.scrollHeight + "px";
                } else {
                    a.classList.remove("active");
                    panel.style.maxHeight = "0px";
                }
            } else {
                a.classList.remove("active");
                panel.style.maxHeight = "0px";
            }
        });
    };

    accordions.forEach(acc => {
        acc.nextElementSibling.style.maxHeight = "0px";
        acc.nextElementSibling.innerHTML = acc.nextElementSibling.innerHTML.replaceAll("\n", "<br>");

        acc.addEventListener("click", function () {
            toggleAccordion(this);
        });
    });

    const hash = window.location.hash.substring(1);
    if (hash) {
        const targetAccordion = document.getElementById(hash);
        if (targetAccordion && targetAccordion.classList.contains("accordion")) {
            toggleAccordion(targetAccordion);
            window.setTimeout(() => {
                targetAccordion.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
        }
    }

    const observer = new ResizeObserver(entries => {
        entries.forEach(entry => {
            const panel = entry.target;
            if (panel.style.maxHeight !== "0px") {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    document.querySelectorAll(".panel").forEach(p => observer.observe(p));
});




