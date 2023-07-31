async function fetchDictionary() {
    let response = await fetch('https://21beckem.github.io/CustomLexin/folkets_sv_en_public-min.json');
    let thisJson = await response.json();
    console.log(thisJson);
    console.log(JSON.stringify(thisJson));
}