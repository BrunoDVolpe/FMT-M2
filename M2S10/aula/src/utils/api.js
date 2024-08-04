/**
 * 
 * @param {string} endpoint Endpoint desejado
 * @param {RequestInit} init Parâmetros da requisição
 * @returns 
 */
export function api(endpoint, init) {
    const url = `http://localhost:3333` + endpoint

    return fetch(url, init)
}