function filter_tips(term) {
    document.querySelectorAll(".ztip").forEach((el) => {
        let searchable_text = [el.querySelector(".ztip-title").innerHTML, el.querySelector(".ztip-text").innerHTML]
        let has_term = searchable_text.some((t) => t.toLowerCase().includes(term.toLowerCase()))
        el.style.display = (has_term) ? 'flex' : 'none'
    })
}

function toggle_all() {
    let all_tips = Array.from(document.querySelectorAll(".ztip"))
    if (all_tips.every((el) => el.classList.contains("expanded"))) {
        all_tips.forEach((el) => toggle_tip(el.id, false))
    } else {
        all_tips.forEach((el) => toggle_tip(el.id, true))
    }
}

function update_toggle_all_button() {
    let all_tips = Array.from(document.querySelectorAll(".ztip"))
    if (all_tips.every((el) => el.classList.contains("expanded"))) {
        document.querySelector(".ztip-expand-all").innerHTML = "compress"
    } else {
        document.querySelector(".ztip-expand-all").innerHTML = "expand"
    }
}

function toggle_tip(tip_id, force) {
    document.querySelector(`#${tip_id}`).classList.toggle("expanded", force)
    document.querySelector(`#${tip_id} > .ztip-text`).classList.toggle("expanded", force)
    var icon;
    switch (force) {
        case true: icon = "expand_less"; break;
        case false: icon = "expand_more"; break;
        default:
            let now_expanded = document.querySelector(`#${tip_id}`).classList.contains("expanded")
            icon = (now_expanded) ? "expand_less" : "expand_more"
            break;
    }
    document.querySelector(`#${tip_id} > .ztip-header > .ztip-expand`).innerHTML = icon
    update_toggle_all_button()
}

function tip_component(tip) {
    let tip_id = 'tip-' + tip['date'].split('/').join('')
    return `
    <div class="ztip" id="${tip_id}" onclick="toggle_tip('${tip_id}')">
        <div class="ztip-header">
            <span class="ztip-title">${tip['title']}</span>
            <span class="ztip-date">${tip['date']}</span>
            <span class="ztip-expand material-icons-outlined">expand_more</span>
        </div>
        <span class="ztip-text">${tip['text'].split('\n').join('<br/>')}</span>
    </div>
    `
}

function populate_html(zips_dict) {
    for (var i = 0; i < 142; i++) {
        let tip = zips_dict[i]
        $('#ztips-container').append(tip_component(tip))
    }
}

$(document).ready(function () {
    let zips_dict = getTips()
    console.log(zips_dict);
    populate_html(zips_dict);
});

function getTips() {
    var request = new XMLHttpRequest();
    request.open("GET", "assets/ztips.json", false);
    request.send(null)
    return JSON.parse(request.responseText);
 }