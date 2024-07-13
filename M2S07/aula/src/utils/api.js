export function api(url, init) {
    const token = localStorage.getItem('algumTokenDoStorage - ex que Nicholas tinha no Storage dele:"@amoraid:token"')

    return fetch(url, {
        ...init,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}