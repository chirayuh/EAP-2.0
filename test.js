document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
    var actionbtn = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(actionbtn, {});
});