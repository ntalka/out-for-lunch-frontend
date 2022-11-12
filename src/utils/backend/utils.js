const host = process.env.REACT_APP_SERVER;

export const postRequest = async(url, body = {}, auth) =>{
    const method = 'POST';

    const res = await fetch(host+url, {
        method,
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json',
            Authorization: auth
        },
        body: JSON.stringify(body)
    });
    const resJSON = await res.json()
    console.log(resJSON);
    return resJSON;
}

export const getRequest = async(url, auth) =>{
    const method = 'GET';
    const res = await fetch(host + url,{
        method,
        redirect: 'follow',
        credentials: 'same-origin',
        headers:{
            Authorization: auth
        }
    });
    const resJSON = await res.json()
    console.log(resJSON);
    return resJSON;
}
