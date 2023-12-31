export async function fetchAvailablePlaces() {
    const response = await fetch("http://localhost:3000/places");
    const resData = await response.json();

    if (!response.ok) {
        throw new Error("Fetching data was failed");
    }

    return resData.places
}

export async function updateUserPlaces(places) {
    const response = await fetch("http://localhost:3000/user-places", {
        method: "PUT",
        body: JSON.stringify({ places }),
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (!response.ok) {
        throw new Error("Updating place failed")
    }
    return response.message
}

export async function fetchUserPlaces() {
    const response = await fetch("http://localhost:3000/user-places")
    const resData = await response.json()

    if (!response.ok) {
        throw new Error("Fetching user data failed")
    }

    return resData.places
}