const exclude4 = document.getElementById('exclude4');
const excludeLegendary = document.getElementById('excludeLegendary');
const excludeShiny = document.getElementById('excludeShiny');
const ivAtk = document.getElementById('ivAtk');
const ivDef = document.getElementById('ivDef');
const ivSta = document.getElementById('ivSta');
const output = document.getElementById('searchString');
const copyButton = document.getElementById('copyButton');
const leagueSelect = document.getElementById('league');
const rankSelect = document.getElementById('rank');

let pvpData = null;

fetch('public/pvpivs.json')
    .then(response => response.json())
    .then(data => {
        pvpData = data;
        updateSearch();
    });

function updateSearch() {
    const parts = [];
    if (exclude4.checked) parts.push('!4*');
    if (excludeLegendary.checked) parts.push('!Legendary');
    if (excludeShiny.checked) parts.push('!Shiny');

    if (parseInt(ivAtk.value, 10) > 0) {
        parts.push(`attack${ivAtk.value}-`);
    }
    if (parseInt(ivDef.value, 10) > 0) {
        parts.push(`defense${ivDef.value}-`);
    }
    if (parseInt(ivSta.value, 10) > 0) {
        parts.push(`hp${ivSta.value}-`);
    }

    if (pvpData && leagueSelect.value && parseInt(rankSelect.value, 10) > 0) {
        const league = leagueSelect.value;
        const rankLimit = parseInt(rankSelect.value, 10);
        const names = pvpData[league]
            .filter(p => p.rank <= rankLimit)
            .map(p => p.name);
        if (names.length > 0) {
            parts.push(names.join(','));
        }
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
leagueSelect.addEventListener('change', updateSearch);
rankSelect.addEventListener('change', updateSearch);

// Actualizar inicialmente
updateSearch();

