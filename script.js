const exclude4 = document.getElementById('exclude4');
const excludeLegendary = document.getElementById('excludeLegendary');
const excludeShiny = document.getElementById('excludeShiny');
const ivAtk = document.getElementById('ivAtk');
const ivDef = document.getElementById('ivDef');
const ivSta = document.getElementById('ivSta');
const output = document.getElementById('searchString');
const copyButton = document.getElementById('copyButton');

function updateSearch() {
    const parts = [];
    if (exclude4.checked) parts.push('!4*');
    if (excludeLegendary.checked) parts.push('!Legendary');
    if (excludeShiny.checked) parts.push('!Shiny');

    if (parseInt(ivAtk.value, 10) > 0) {
        parts.push(`iv_atk>=${ivAtk.value}`);
    }
    if (parseInt(ivDef.value, 10) > 0) {
        parts.push(`iv_def>=${ivDef.value}`);
    }
    if (parseInt(ivSta.value, 10) > 0) {
        parts.push(`iv_sta>=${ivSta.value}`);
    }

    output.value = parts.join(' & ');
}

function copyToClipboard() {
    navigator.clipboard.writeText(output.value);
}

exclude4.addEventListener('change', updateSearch);
excludeLegendary.addEventListener('change', updateSearch);
excludeShiny.addEventListener('change', updateSearch);
ivAtk.addEventListener('input', updateSearch);
ivDef.addEventListener('input', updateSearch);
ivSta.addEventListener('input', updateSearch);
copyButton.addEventListener('click', copyToClipboard);

// Actualizar inicialmente
updateSearch();

// TODO: Integrar datos de pvpivs.com para filtrar por ranking
