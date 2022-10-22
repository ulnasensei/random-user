const getUser = async () => {
    const url = "https://randomuser.me/api/";
    const user = await axios(url);
    return user.data.results[0];
};

export default getUser;
