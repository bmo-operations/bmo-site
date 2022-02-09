function toggle_tip(date) {
    tip_id = '#tip-'+date.split('/').join('')
    console.log("toggling " + tip_id)
    document.querySelector(tip_id).classList.toggle("expanded")
    document.querySelector(`${tip_id} > .ztip-text`).classList.toggle("expanded")
    document.querySelector(`${tip_id} > .ztip-expand`).innerHTML = ""

}

function tip_component(tip) {
    return `
    <div class="ztip" id="tip-${tip['date'].split('/').join('')}" onclick="toggle_tip('${tip['date']}')">
        <div class="ztip-header">
            <span class="ztip-title">${tip['title']}</span>
            <span class="ztip-date">${tip['date']}</span>
            <span class="ztip-expand material-icons-outlined">expand_more</span>
        </div>
        <span class="ztip-text">${tip['tip']}</span>
    </div>
    `
}

function populate_html(zips_dict) {
    for(var i = 0; i < 142; i++) {
        let tip = zips_dict[i]
        $('#ztips-container').append(tip_component(tip))
    }
}

$(document).ready(function () {

    $.get('ztips.txt', function (data) {
        var zips_dict = {}
        data = data.split("\n");
        n = data.length;
        let counter = 0;
        for (var i = 0; i < n; i += 3) {
            if (i % 2 == 0) {
                zips_dict[counter] = { "date": data[i], "title": data[i + 1], "tip": data[i + 2] }
                counter++;
            }
        }
        console.log(counter);
        console.log(zips_dict);
        populate_html(zips_dict);
    });

});
