// api.ts

export const fetchUserType = async (address: string) => {
  console.log(`Fetching user type for address: ${address}`);
  try {
    const response = await fetch(
      `https://gigster-backend-ztso.onrender.com/api/find_usertype/${address}`
    );
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to fetch user type:", response.status, errorText);
      throw new Error(
        `Failed to fetch user type: ${response.status} ${errorText}`
      );
    }
    const data = await response.json();
    console.log("Received user type data:", data);
    return data;
  } catch (error) {
    console.error("Error in fetchUserType:", error);
    throw error;
  }
};

export const fetchBounties = async (address: string, userType: string) => {
  console.log(
    `Fetching bounties for address: ${address}, userType: ${userType}`
  );
  const url =
    userType === "sponser"
      ? `https://gigster-backend-ztso.onrender.com/api/get_sponser_bounties/${address}`
      : `https://gigster-backend-ztso.onrender.com/api/get_all_bounties`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to fetch bounties:", response.status, errorText);
      throw new Error(
        `Failed to fetch bounties: ${response.status} ${errorText}`
      );
    }
    const data = await response.json();
    console.log("Received bounties data:", data);
    return data;
  } catch (error) {
    console.error("Error in fetchBounties:", error);
    throw error;
  }
};
