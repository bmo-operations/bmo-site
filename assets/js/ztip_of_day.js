
function random_tip(zips_dict) {
    let index = Math.floor(Math.random() * 142);
    $('#daily-ztip-title').append(zips_dict[index]['title']);
    $('#daily-ztip').append(zips_dict[index]['date']+' - '+zips_dict[index]['text']);
}

$(document).ready(function () {
    let zips_dict = getTips()
    random_tip(zips_dict);
});
