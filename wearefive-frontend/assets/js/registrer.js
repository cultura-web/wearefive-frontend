document.addEventListener("DOMContentLoaded", function (e) {
    var miForm = document.getElementById('registrerForm');
    miForm.onsubmit = function (e) {
        e.preventDefault();
        var formData = new FormData(this);
        var jsonData = {};
        for (var [k, v] of formData) {
            jsonData[k] = v;
        }
        console.log(jsonData);
    }
}  )

document.addEventListener("DOMContentLoaded", function (e) {
    var miForm = document.getElementById('entrarForm');
    miForm.onsubmit = function (e) {
        e.preventDefault();
        var formData = new FormData(this);
        var jsonData = {};
        for (var [k, v] of formData) {
            jsonData[k] = v;
        }
        console.log(jsonData);
    }
}  )