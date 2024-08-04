import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { HiLogout, HiViewGrid, HiUser } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { signoutSuccess } from "../redux/slices/userSlice";
import { toast } from "react-toastify";

const ProfileMenu = ({ name, email, is_admin, accessToken }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignout = async () => {
    try {
      const res = await fetch("http://localhost:7071/api/v1/auth/logout", {
        method: "POST",
        headers: { Authorization: `${accessToken}` },
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      } else {
        toast.success(data.message);
        dispatch(signoutSuccess());
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Dropdown label={name} inline color="" arrowIcon={false}>
        <Dropdown.Header>
          <span className="block text-sm">{name}</span>
          <span className="block truncate text-sm font-medium">{email}</span>
        </Dropdown.Header>
        {is_admin ? (
          <Link to={"/dashboard"}>
            <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
          </Link>
        ) : (
          ""
        )}
        <Link to={"/account"}>
          <Dropdown.Item icon={HiUser}>Profile</Dropdown.Item>
        </Link>
        <Dropdown.Divider />
        <Dropdown.Item icon={HiLogout} onClick={handleSignout}>
          Sign out
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default ProfileMenu;
