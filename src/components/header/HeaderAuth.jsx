import { Link } from "react-router-dom";
import { User } from "lucide-react";
import Gravatar from "react-gravatar";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/client/clientThunks";

const SIZE_CONFIG = {
    sm: {
        text: "text-sm",
        icon: 16,
        avatar: 24,
    },
    lg: {
        text: "text-3xl",
        icon: 28,
        avatar: 36,
    },
};

const HeaderAuth = ({
    user,
    onAction,
    size = "sm",
    vertical = false,
}) => {
    const dispatch = useDispatch();
    const config = SIZE_CONFIG[size];

    const handleLogout = () => {
        dispatch(logoutUser());
        onAction?.();
    };

    return (
        <div className={`font-bold ${vertical ? "flex flex-col items-center gap-2" : ""}`}>
            {user ? (
                <div
                    className={`flex items-center gap-2 ${config.text} text-[#236AF0]`}
                >
                    <Gravatar
                        email={user.email}
                        size={config.avatar}
                        className="rounded-full"
                    />
                    <span>{user.name || user.email}</span>
                    <button
                        onClick={handleLogout}
                        className="text-xs text-red-500 hover:underline"
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <div
                    className={`flex items-center gap-2 ${config.text}`}
                >
                    <User size={config.icon} className="text-[#23A6F0]" />

                    <Link
                        to="/login"
                        onClick={onAction}
                        className="text-[#23A6F0]"
                    >
                        Login
                    </Link>

                    <span className="text-[#737373]">/</span>

                    <Link
                        to="/signup"
                        onClick={onAction}
                        className="text-[#23A6F0]"
                    >
                        Register
                    </Link>
                </div>
            )}
        </div>
    );
};

export default HeaderAuth;