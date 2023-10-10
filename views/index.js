document.getElementById("regForm").addEventListener("submit",function(event) {
    event.preventDefault();

    var inputVal = document.getElementById("nameinput").value;

    fetch("/api/user/register", {
        method: "POST",
        headers: {
            "content-Type": "application/json",
            "custom-Header": inputVal
        },
        body: JSON.stringify({ name: inputVal})
    })
    .then(function(responce) {
        if (responce.ok){
            console.log('success');
        }
    })
})