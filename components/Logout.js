'use client'
import federatedLogout from "../utils/federatedLogout";

export default function Logout({ setSession }) {  
  const userName = setSession && setSession.user?.name;

  return (
    <button
      className="text-blue-800"
      onClick={() => federatedLogout()}
    >
      Logout ({userName})
    </button>
  );
}
