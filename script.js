async function fetchDictionary() {
    let response = await fetch('folkets_sv_en_public-min.json');
    let thisJson = await response.json();
    console.log(thisJson);
}