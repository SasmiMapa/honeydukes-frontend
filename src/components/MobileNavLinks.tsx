import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  const CALLBACK_URL = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  return (
    <>
      <Link
        to="/user-profile"
        className="flex bg-white items-center font-bold hover:text-[#ca8a04]"
      >
        User Profile
      </Link>
      <Link
        to="/order-status"
        className="flex bg-white items-center font-bold hover:text-[#ca8a04]"
      >
        Order Status
      </Link>
      <Link
        to="/manage-restaurant"
        className="flex bg-white items-center font-bold hover:text-[#ca8a04]"
      >
        My Restaurant
      </Link>
      <Button
        onClick={() => logout({ logoutParams: { returnTo: CALLBACK_URL } })}
        className="flex items-center px-3 font-bold hover:bg-[#ca8a04]"
      >
        Log Out
      </Button>
    </>
  );
};

export default MobileNavLinks;
