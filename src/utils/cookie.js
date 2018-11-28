/**
 * Created by za-sumeng on 2018/11/28.
 */
function transferObjToString( obj ) {
    let str = '';

    for (let [key, value] of Object.entries(obj)) {
        str += `${key}=${value};`
    }

    return str;
}

function transferStringToObj( str  ) {
    let obj = {};
    let keyValues = str.split('; ');
    let expirse = '';

    for (let key of keyValues) {
        const temp = key.split('=');
        if(temp[0] !== 'expirse') {
            obj = { ...obj, ...{[temp[0]]: temp[1]}};
        }
        else {
            expirse = temp[1];
        }
    }

    return {
        cookie: obj,
        expirse
    };
}

function setExpirse( expirse ) {
    const now = new Date() * 1;
    const date = new Date(now + expirse);
    return date.toGMTString();
}

export function getCookie( key ) {
    const cookieStr = document.cookie;
    const cookie = transferStringToObj(cookieStr).cookie;

    return key ? cookie[key] : cookie;
}

export function setCookie( cookie, expirse ) {
    expirse = setExpirse(expirse);

    const prevCookie = getCookie().cookie ? transferObjToString(getCookie()).cookie : '';
    const nextCookie = transferObjToString(cookie);
    document.cookie = `${prevCookie}${nextCookie}expirse=${expirse}`;
}

export function delCookie( key ) {
    const cookieStr = document.cookie;
    const cookieObj = transferStringToObj(cookieStr);

    if(key) {
        setCookie(cookieObj.cookie[key], -1);
        const newCookie = transferObjToString(cookieObj.cookie);
        document.cookie = `${newCookie}expirse=${cookieObj.expirse}`;
    }
    else {
        document.cookie = '';
    }
}