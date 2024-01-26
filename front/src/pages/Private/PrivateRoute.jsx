// PrivateRoute.js
import { useEffect, useState } from "react";
import NotFound from "../NotFound";

export default function PrivateRoute ({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
        }
    }, []);

    if (user?.isAdmin) {
        return children;
    } else {
        return <NotFound />;
    }
}
