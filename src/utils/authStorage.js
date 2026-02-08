const USER_KEY = "user";
const TOKEN_KEY = "token";

const setItem = (key, value) => {
    try {
        const serialized =
            typeof value === "string"
                ? value
                : JSON.stringify(value);

        localStorage.setItem(key, serialized);
    } catch (err) {
        console.error("localStorage setItem error:", err);
    }
};

const getItem = (key) => {
    try {
        const value = localStorage.getItem(key);
        if (value === null) return null;

        try {
            return JSON.parse(value);
        } catch {
            return value;
        }
    } catch (err) {
        console.error("localStorage getItem error:", err);
        return null;
    }
};

const removeItem = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (err) {
        console.error("localStorage removeItem error:", err);
    }
};

export const authStorage = {
    setAuth({ user = null, token = null } = {}) {
        if (user) setItem(USER_KEY, user);
        if (token) setItem(TOKEN_KEY, token);
    },

    getAuth() {
        return {
            user: getItem(USER_KEY),
            token: getItem(TOKEN_KEY),
        };
    },

    clearAuth() {
        removeItem(USER_KEY);
        removeItem(TOKEN_KEY);
    },
};