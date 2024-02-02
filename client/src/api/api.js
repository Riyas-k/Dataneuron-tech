import BASE_URL from "../api/axios.js";

export const addDataAPI = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to add data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding data:", error.message);
    throw error;
  }
};

export const updateDataAPI = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to update data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error updating data:", error.message);
    throw error;
  }
};

export const getCountAPI = async () => {
  try {
    const response = await fetch(`${BASE_URL}/count`);
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to get count");
    }
    const data = await response.json();
    return data.count;
  } catch (error) {
    console.error("Error getting count:", error.message);
    throw error;
  }
};
