export const getItem = key => {
	try {
		return JSON.parse(localStorage.getItem(key))
	} catch (err) {
		console.log('Error getting data', err)
		return null
	}
}

export const setItem = (key, data) => {
	try {
		localStorage.setItem(key, JSON.stringify(data))
	} catch (err) {
		console.log('Error saving data', err)
	}
}

export const removeItem = key => {
	try {
		localStorage.removeItem(key)
	} catch (err) {
		console.log('Error deleting data', err)
	}
}
