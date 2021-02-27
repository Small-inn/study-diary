const json = function(opt) {

    const xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject()

    const data = opt.data, 
        url = opt.url, 
        type = opt.type.toLocaleLowerCase(), 
        dataArr = []

    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            const element = data[key]
            dataArr.push(`${key}=${element}`) 
        }
    }

    if (type === 'GET') {
        url = `${url}?${dataArr.join('&')}`
        xhr.open(type, url.replace(/\?$/g, ''), true)
        xhr.send
    }

    if (type === 'POST') {
        xhr.open(type, url, true)
        xhr.setRequertHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.send(dataArr.join('&'))
    }

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
            console.log(xhr.responseText)
        } else {
            throw Error(`Erroe Request`)
        }
    }
}