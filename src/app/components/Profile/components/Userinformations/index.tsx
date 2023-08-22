import ProfileFullImage from "@/assets/profilefull.svg";
import TimeIcon from "@/assets/time.svg";
import UsersIcon from "@/assets/users.svg";
import UnitedStates from "@/assets/unitedstates.svg";
import FireIcon from "@/assets/fire.svg";
export const UserInformations = () => {
  return (
    <div className="flex-1">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl	font-bold">Kayo Elias</h2>
          <p className="text-[rgb(175,175,175)] text-base	">KayoElias1</p>
          <p className="mt-3 flex  items-center gap-2 text-base text-[rgb(175,175,175)] ">
            <TimeIcon /> Por aqui desde abril de 2022
          </p>
          <p className="flex  items-center gap-2 text-[rgb(175,175,175)] ">
            <UsersIcon /> Segue 2 / Tem 2 seguidores
          </p>
        </div>
        <div>
          <ProfileFullImage className="rounded-full object-fill" />
        </div>
      </div>
      <UnitedStates className="mt-4" />

      <hr className="mt-4" />
      <h2 className="text-2xl mt-4	font-bold">Estatísticas</h2>
      <div className="grid grid-cols-2 mt-5 gap-4">
        <div className="border flex gap-4 p-4 rounded-xl ">
          <FireIcon />
          <div>
            <h2 className="font-bold ">11</h2>
            <p className="text-sm text-[rgb(175,175,175)]">Dias seguidos</p>
          </div>
        </div>
        <div className="border flex gap-4 p-4 rounded-xl ">
          <FireIcon />
          <div>
            <h2 className="font-bold ">11</h2>
            <p className="text-sm text-[rgb(175,175,175)]">Dias seguidos</p>
          </div>
        </div>
        <div className="border flex gap-4 p-4 rounded-xl ">
          <FireIcon />
          <div>
            <h2 className="font-bold ">11</h2>
            <p className="text-sm text-[rgb(175,175,175)]">Dias seguidos</p>
          </div>
        </div>
        <div className="border flex gap-4 p-4 rounded-xl ">
          <FireIcon />
          <div>
            <h2 className="font-bold ">11</h2>
            <p className="text-sm text-[rgb(175,175,175)]">Dias seguidos</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-5">
        <h2 className="text-2xl leading-none	font-bold">Conquistas</h2>
        <a href="" className="leading-none text-[rgb(8,176,246)] font-bold	">
          VER TODAS
        </a>
      </div>

      <div className="border flex gap-4 p-4 rounded-xl mt-5">
        <FireIcon />
        <div>
          <h2 className="font-bold ">11</h2>
          <p className="text-sm text-[rgb(175,175,175)]">Dias seguidos</p>
        </div>
      </div>
    </div>
  );
};
