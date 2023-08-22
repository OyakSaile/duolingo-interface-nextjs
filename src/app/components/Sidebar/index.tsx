import DuoLingoLogo from "@/assets/duolingo-logo.svg";
import { menuLinks } from "./menuLinks";

export const Sidebar = () => {
  return (
    <div className="h-full p-6 border-r-2  w-[233px] ">
      <DuoLingoLogo className="w-[128px]" />

      <div className="mt-8">
        <ul className="flex flex-col gap-2">
          {menuLinks.map((item, index) => (
            <li
              key={index}
              className="flex transition pl-4 items-center  gap-3 text-sm hover:bg-[rgba(119,119,119,0.1)] cursor-pointer py-2 rounded-lg"
            >
              {item.icon}
              <p className="font-bold text-[#777]">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
