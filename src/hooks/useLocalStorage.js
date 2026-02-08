const useLocalStorage = () => {
    const setItem = (key, value) => {
        try {
            const serialized = typeof value === "string"
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
        }
    };

    const removeItem = (key) => {
        try {
            localStorage.removeItem(key);
        } catch (err) {
            console.error("localStorage removeItem error:", err);
        }
    };

    const clear = () => {
        try {
            localStorage.clear();
        } catch (err) {
            console.error("localStorage clear error", err);
        }
    };

    return {
        setItem, getItem, removeItem, clear,
    };
};

export default useLocalStorage;