const API_URL = "https://localhost:7092/api/Users";

export async function registerUser(user) {
    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        throw new Error("Error creating user");
    }

    return await response.json();
}

export async function loginUser(user) {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        throw new Error("Invalid email or password");
    }

    return await response.json();
}
