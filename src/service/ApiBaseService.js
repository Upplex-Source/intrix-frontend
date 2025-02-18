const baseUrl = "https://backoffice.intrix.upplex.com.my/api/v1/";

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

export const getData = async (endpoint, body) => {
    const url = baseUrl + endpoint + `?session_key=${body.session_key}&id=${body.id}&per_page=${body.per_page}`;

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
