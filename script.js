function sendFile() {
    const input = document.getElementById('input')
    console.log(input.files);

    if (input.files.length === 0) {
        return alert('حتما باید یه فایل انتخاب کنی')
    }
    const fData = new FormData()
    fData.append('film', input.files[0])
    fData.append('name', "Ali Ghodousi")

    $.ajax({
        type: "POST",
        url: "https://www.tarafdari.com/node/1784216",
        data: fData,
        contentType: false,
        processData: false,
        success: function (data) {
            console.log(data)
        }
    })
}