const baseUrl = "https://backoffice.intrixlifestyle.com/api/v1/";

export const postData = async (endpoint, body) => {
    try {
        const response = await fetch(baseUrl + endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        return null; // Return null instead of undefined
    }
};

export const getData = async (endpoint) => {
    try {
        const response = await fetch(baseUrl + endpoint, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        return null; // Return null instead of undefined
    }
};
