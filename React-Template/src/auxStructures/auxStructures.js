///// Access to context MODIFY 

// setMainData(prevData => ({
//     ...prevData,
//     logged: true
// }))

/////

//// Function that Sets the token Expiration time

export function saveTokenSettingTime() {
    const now = new Date().getTime();
    const expirationTime = now + 3600000;
    localStorage.setItem('tokenExpiration', expirationTime.toString());
}

export function checkTokenExpiration() {
    const expirationTime = localStorage.getItem('tokenExpiration');
    const now = new Date().getTime();
    if (now > parseInt(expirationTime, 10)) {
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExpiration');
    }
}

