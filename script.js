async function fetchDictionary() {
    let alreadyDownloaded = localStorage.getItem('LexinDictionary');
    if (alreadyDownloaded) {
        window.BWL = JSON.parse(alreadyDownloaded);
        return window.BWL;
    }
    let response = await fetch('https://21beckem.github.io/CustomLexin/folkets_sv_en_public-min.json');
    let BIGwordList = await response.json();
    console.log(BIGwordList);
    localStorage.setItem('LexinDictionary', JSON.stringify(BIGwordList));
    window.BWL = BIGwordList;
    return window.BWL;
}