function getUrl(url) {      
    return new Promise((resolve, reject) => {
            pm.sendRequest({
            async: false,
            url: pm.globals.get("BASE_URL") +  url,
            method: "GET",
            header: {
                "content-type": "application/json",
                "accept": "application/json"        
            },
            body: {}
        }, (err, res) => {        
            if (err) {
                reject(err)
            }
            resolve(res.json());
        });
    })
}

function setTemplate(template, body) {
    return template.replace("{{bodyTemplate}}", body)
}