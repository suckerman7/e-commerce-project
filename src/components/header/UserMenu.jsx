import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import md5 from 'md5';
import { logoutUser } from "../../store/client/clientThunks";

const UserMenu = ({ user, isMobile }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  const avatar = `https://www.gravatar.com/avatar/${md5(
    user.email.trim().toLowerCase()
  )}?d=identicon`;

  const handleLogout = () => {
    dispatch(logoutUser());
    history.push("/");
  };


  return (
    <div className="relative z-50">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
        className="flex items-center gap-2 font-semibold"
      >
        <img
          src={avatar}
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
        {user.name}
      </button>

      {open && (
        <div className={
          `${isMobile
            ? "mt-2 w-full bg-white rounded shadow"
            : "absolute right-0 mt-2 w-40 bg-white shadow rounded z-50"
          }`}
        >
          <Link
            to="/orderList"
            className="block px-4 py-2 hover:bg-[#252B42] hover:text-white"
          >
            Siparişlerim
          </Link>

          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 hover:bg-[#252B42] hover:text-white"
          >
            Çıkış Yap
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;