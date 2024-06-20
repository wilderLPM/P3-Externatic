import HeartWhite from "../../assets/logo/heartWhite.svg";
import Folder from "../../assets/logo/folder.svg";
import Briefcase from "../../assets/logo/briefcase.svg";

export default function ProfilPageCandidate() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 ">
      <button
        className=" flex items-center bg-primary font-custom text-white  rounded-md w-4/5 px-3 py-2 mb-1 border"
        type="button"
      >
        <img className="w-6 flex " src={HeartWhite} alt="Logo favoris" />
        Mes favoris
      </button>

      <button
        className=" flex items-center bg-primary font-custom text-white  rounded-md w-4/5 px-3 py-2 mb-1 border"
        type="button"
      >
        <img className="w-6 flex " src={Folder} alt="Logo favoris" />
        Mes infos
      </button>
      <button
        className="flex items-center bg-primary font-custom text-white  rounded-md w-4/5 px-3 py-2 mb-1 border"
        type="button"
      >
        <img className="w-6 flex " src={Briefcase} alt="Logo favoris" />
        Mes candidatures
      </button>
    </div>
  );
}
