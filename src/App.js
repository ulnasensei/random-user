import { useState, useEffect } from "react";
import { Box, Columns, Button } from "react-bulma-components";
import "bulma/css/bulma.min.css";
import User from "./components/user/User";
import "./App.css";

import axios from "axios";

function App() {
    const [user, setUser] = useState();
    const fetchUser = async () => {
        const url = "https://randomuser.me/api/";
        const response = await axios(url);
        setUser(() => response.data.results[0]);
    };
    useEffect(() => {
        fetchUser();
    }, []);
    console.log(user);

    return (
        <Columns centered>
            <Box className="column is-one-third">
                {Boolean(user) && <User user={user} />}
                <Button color={"info"} onClick={() => fetchUser()}>
                    Random User
                </Button>
            </Box>
        </Columns>
    );
}

export default App;
