function update() {
    n_start = document.getElementById("n_start").value;
    n_lunch = document.getElementById("n_lunch").value;
    n_dinner = document.getElementById("n_dinner").value;

    s_start = document.getElementById("s_start").value;

    if (n_start == "" || n_lunch == "" || n_dinner == "" ) {
        return;
    }

    diff_to_lunch = n_lunch - n_start;
    diff_to_dinner = n_dinner - n_start;

    // Remove selected
    var elems = document.querySelectorAll("td");
    [].forEach.call(elems, function(el) {
        el.classList.remove("selected");
    });

    // Set selected appropriately
    document.getElementById(`n_${n_start}`).classList.add('selected');
    document.getElementById(`n_${n_lunch}`).classList.add('selected');
    document.getElementById(`n_${n_dinner}`).classList.add('selected');
    if ( s_start != "" ) {
        s_lunch = parseInt(s_start) + parseInt(diff_to_lunch);
        if (s_lunch > 24) { s_lunch -= 24; }
        s_dinner = parseInt(s_start) + parseInt(diff_to_dinner);
        if (s_dinner > 24) { s_dinner -= 24; }

        document.getElementById(`s_${s_start}`).classList.add('selected');
        document.getElementById(`s_${s_lunch}`).classList.add('selected');
        document.getElementById(`s_${s_dinner}`).classList.add('selected');
    }

    // Save values
    localStorage.setItem('n_start', n_start);
    localStorage.setItem('n_lunch', n_lunch);
    localStorage.setItem('n_dinner', n_dinner);
}

function on_load() {
    n_start.addEventListener("input", function (e) { update() });
    n_lunch.addEventListener("input", function (e) { update() });
    n_dinner.addEventListener("input", function (e) { update() });
    s_start.addEventListener("input", function (e) { update() });

    // Load saved values
    document.getElementById("n_start").value = localStorage.getItem('n_start');
    document.getElementById("n_lunch").value = localStorage.getItem('n_lunch');
    document.getElementById("n_dinner").value = localStorage.getItem('n_dinner');
    update();
}
