import { FriendsStatus } from "./components/FriendsStatus";
import { UserInformations } from "./components/Userinformations";

export const Profile = () => {
  return (
    <div className="min-h-screen overflow-auto flex gap-16 justify-center w-full p-12 px-36 max-w-[1056px]">
      <UserInformations />
      <FriendsStatus />
      
    </div>
  );
};
