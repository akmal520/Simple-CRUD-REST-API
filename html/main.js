const instance = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    },
});

function htmlizeResponse(res) {
    return `<div class="alert alert-secondary mt-2" role="alert"><pre>` + JSON.stringify(res, null, 2) + `</pre></div>`;
}

async function getAllData() {
    let resultElemenet = document.getElementById('getResult');
    resultElemenet.innerHTML = "";
    try {
        const res = await instance.get("/tutorials");
        const result = {
            status: res.status + "-" + res.statusText,
            headers: res.headers,
            data: res.data
        };
        resultElemenet.innerHTML = htmlizeResponse(result);
    } catch (err) {
        resultElemenet.innerHTML = htmlizeResponse(err);
    }
}

async function getDataById() {
    let resultElemenet = document.getElementById('getResult');
    resultElemenet.innerHTML = "";

    const id = document.getElementById("get-id").value;
    if(id) {
        try {
            const res = await instance.get(`/tutorials/${id}`);
            const result = {
                status: res.status + "-" + res.statusText,
                headers: res.headers,
                data: res.data,
            };
            resultElemenet.innerHTML = htmlizeResponse(result);
            document.getElementById("get-id").value = "";
        } catch (err) {
            resultElemenet.innerHTML = htmlizeResponse(err);
        }
    }
}

async function getDataByTitle() {
    let resultElemenet = document.getElementById('getResult');
    resultElemenet.innerHTML = "";

    const title = document.getElementById('get-title').value;
    if(title) {
        try {
            const res = await instance.get(`/tutorials?title=${title}`);
            const result = {
                status: res.status + "-" + res.statusText,
                headers: res.headers,
                data: res.data
            };
            resultElemenet.innerHTML = htmlizeResponse(result);
            document.getElementById('get-title').value = "";
        } catch (err) {
            resultElemenet.innerHTML = htmlizeResponse(err);
        }
    }
}

async function postData() {
    let resultElemenet = document.getElementById('postResult');
    resultElemenet.innerHTML = "";

    const title = document.getElementById('post-title').value;
    const description = document.getElementById('post-description').value;
    try {
        const res = await instance.post('/tutorials', {
            title: title,
            description: description,
        });
        const result = {
            status: res.status + "-" + res.statusText,
            headers: res.headers,
            data: res.data,
        };
        resultElemenet.innerHTML = htmlizeResponse(result);
        document.getElementById('post-title').value = "";
        document.getElementById('post-description').value = "";
    } catch (err) {
        resultElemenet.innerHTML = htmlizeResponse(err);
    }
}

async function putData() {
    let resultElemenet = document.getElementById('putResult');
    resultElemenet.innerHTML = "";

    const id = document.getElementById('put-id').value;
    const title = document.getElementById('put-title').value;
    const description = document.getElementById('put-description').value;
    const published = document.getElementById('put-published').checked;
    try {
        const res = await instance.put(`/tutorials/${id}`, {
            title: title,
            description: description,
            published: published,
        });
        const result = {
            status: res.status + "-" + res.statusText,
            headers: res.headers,
            data: res.data,
        };
        resultElemenet.innerHTML = htmlizeResponse(result);
    } catch (err) {
        resultElemenet.innerHTML = htmlizeResponse(err);
    }
}

async function deleteAllData() {
    let resultElemenet = document.getElementById('deleteResult');
    resultElemenet.innerHTML = "";

    try {
        const res = await instance.delete('/tutorials');
        const result = {
            status: res.status + "-" + res.statusText,
            headers: res.headers,
            data: res.data,
        };
        resultElemenet.innerHTML = htmlizeResponse(result);
    } catch (err) {
        resultElemenet.innerHTML = htmlizeResponse(err);
    }
}

async function deleteDataById() {
    let resultElemenet = document.getElementById('deleteResult');
    resultElemenet.innerHTML = "";

    const id = document.getElementById('delete-id').value;
    try {
        const res = await instance.delete(`/tutorials/${id}`);
        const result = {
            status: res.status + "-" + res.statusText,
            headers: res.headers,
            data: res.data,
        };
        resultElemenet.innerHTML = htmlizeResponse(result);
    } catch (err) {
        resultElemenet.innerHTML = htmlizeResponse(err);
    }
}

function clearGetOutput() {
    document.getElementById('getResult').innerHTML = "";
}

function clearPostOutput() {
    document.getElementById('postResult').innerHTML = "";
}

function clearPutOutput() {
    document.getElementById('putResult').innerHTML = "";
}

function clearDeleteOutput() {
    document.getElementById('deleteResult').innerHTML = "";
}