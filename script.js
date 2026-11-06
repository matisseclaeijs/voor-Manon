
// =====================================
// 1. ONZE TIJD SAMEN ❤️
// =====================================

// 5 oktober 2026 om 21:00 Belgische tijd
const startDatum = new Date("2026-10-05T21:00:00+02:00");

function updateTeller() {
    const nu = new Date();

    let verschil = Math.max(0, nu - startDatum);

    const dagen = Math.floor(verschil / 86400000);
    verschil %= 86400000;

    const uren = Math.floor(verschil / 3600000);
    verschil %= 3600000;

    const minuten = Math.floor(verschil / 60000);
    verschil %= 60000;

    const seconden = Math.floor(verschil / 1000);

    document.getElementById("dagen").textContent = dagen;
    document.getElementById("uren").textContent =
        String(uren).padStart(2, "0");
    document.getElementById("minuten").textContent =
        String(minuten).padStart(2, "0");
    document.getElementById("seconden").textContent =
        String(seconden).padStart(2, "0");
}

updateTeller();
setInterval(updateTeller, 1000);


// =====================================
// 2. GEHEIME LIEFDESBRIEF 💌
// =====================================

const briefKnop = document.getElementById("open-brief");
const brief = document.getElementById("liefdesbrief");
const envelopLabel = document.getElementById("envelop-label");

briefKnop.addEventListener("click", () => {
    const isVerborgen = brief.classList.contains("verborgen");

    brief.classList.toggle("verborgen");

    briefKnop.setAttribute("aria-expanded", String(isVerborgen));

    if (isVerborgen) {
        envelopLabel.textContent = "Klik om de brief te sluiten";
        maakHartjes(15);
    } else {
        envelopLabel.textContent = "Klik om je brief te openen";
    }
});


// =====================================
// 3. LAATSTE VERRASSING 🎁
// =====================================

const verrassingKnop = document.getElementById("verrassing-knop");
const verrassingTekst = document.getElementById("verrassing-tekst");

verrassingKnop.addEventListener("click", () => {
    verrassingTekst.classList.remove("verborgen");
    verrassingKnop.textContent = "Nog meer liefde! ❤️";

    maakHartjes(30);
});


// =====================================
// 4. ZWEVENDE HARTJES 💕
// =====================================

const hartjesContainer =
    document.getElementById("hartjes-container");

const hartjes = ["❤️", "💕", "💗", "💖", "🌸"];

const minderBeweging = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

function maakHartje() {
    if (minderBeweging.matches) return;

    const hartje = document.createElement("span");

    hartje.classList.add("vliegend-hart");
    hartje.textContent =
        hartjes[Math.floor(Math.random() * hartjes.length)];

    hartje.style.left = Math.random() * 100 + "%";
    hartje.style.fontSize = (15 + Math.random() * 20) + "px";
    hartje.style.setProperty(
        "--duur", (5 + Math.random() * 5) + "s"
    );

    hartjesContainer.appendChild(hartje);

    hartje.addEventListener("animationend", () => {
        hartje.remove();
    });
}

function maakHartjes(aantal) {
    for (let i = 0; i < aantal; i++) {
        maakHartje();
    }
}

// Af en toe verschijnt spontaan een hartje
setInterval(maakHartje, 1300);


// =====================================
// 5. FOTO'S 📸
// =====================================

// Toon een placeholder zolang een foto ontbreekt.
document.querySelectorAll(".foto-vak img").forEach((foto) => {
    function controleerFoto() {
        if (!foto.naturalWidth) {
            foto.classList.add("foto-ontbreekt");
        }
    }

    foto.addEventListener("error", controleerFoto);

    if (foto.complete) {
        controleerFoto();
    }
});
