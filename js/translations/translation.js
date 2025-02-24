const language = navigator.language.split("-")[0];
const availableLanguages = new Map([
    ["es", window.translations_es],
    ["en", window.translations_en],
])


if (language && availableLanguages.has(language)) {
    loadLanguage(
        availableLanguages.get(language)
    );
} else {

    loadLanguage(window.translations_en);
}


function loadLanguage(data) {
    // Handle text content translations   
    applyTranslations(data, "data-translate", "textContent");
}

function applyTranslations(data, dataAttr, elAttrReplace) {
    document.querySelectorAll(`[${dataAttr}]`).forEach(el => {
        // Get the key from the data-translate attribute
        const key = el.getAttribute(dataAttr);
        el[elAttrReplace] = data[key];
    });

}
