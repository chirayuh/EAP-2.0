document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
    var actionbtn = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(actionbtn, {});
});

const input = document.querySelector('input[type="file"]')
input.addEventListener('change', function (e) {
    console.log(input.files);
    console.log("Count of files: "+input.files.length);
    const reader = new FileReader();
    reader.onload = function () {
        console.log(reader.result);
        // const img = new Image()
        // img.src = reader.result
        // document.body.appendChild(reader.result)
    }
    console.log(reader.readAsText(input.files[0]));
}, false);

// inp.onchange = e => {
//     const reader = new FileReader();
//     reader.onload = e => {
//       var myObj = {
//         name: inp.files[0].name,
//         data: reader.result.split('base64,')[1]
//       };
//       console.log(JSON.stringify(myObj));
//     };
//     reader.readAsDataURL(inp.files[0]);
//   };