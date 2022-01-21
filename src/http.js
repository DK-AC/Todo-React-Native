export class Http {
    static HEADERS = {'Content-Type': 'application/json'}

    static async get(url) {
        try {
            return request(url, 'GET')
        } catch (e) {
            console.log(e)
        }
    }

    static async post(url, data = {}) {
        try {
            return request(url, 'POST', data)
        } catch (e) {
            console.log(e)
        }

    }

    static async delete(url) {
        try {
            return request(url, 'DELETE')

        } catch (e) {
            console.log(e)
        }
    }

    static async patch(url, data = {}) {
        try {
            return request(url, 'PATCH', data)
        } catch (e) {
            console.log(e)
        }

    }
}

async function request(url, method = 'GET', data) {
    const config = {
        method,
        headers: Http.HEADERS
    }

    if (method === 'POST' || method === 'GET', data) {
        config.body = JSON.stringify(data)
    }

    const response = await fetch(url, config)

    return await response.json()
}