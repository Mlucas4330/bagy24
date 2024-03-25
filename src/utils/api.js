const API_URL = import.meta.env.VITE_API_URL

const getData = async (endpoint) => {
    const response = await fetch(API_URL + endpoint)

    const result = await response.json()

    return result
}

const deleteData = async (endpoint) => {
    const response = await fetch(API_URL + endpoint, {
        method: 'DELETE'
    })

    const result = await response.json()

    return result
}

const createData = async (endpoint, data) => {
    const response = await fetch(API_URL + endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const result = await response.json()

    return result
}

const updateData = async (endpoint, data) => {
    const response = await fetch(API_URL + endpoint, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const result = await response.json()

    return result
}

export {
    getData,
    deleteData,
    createData,
    updateData
}