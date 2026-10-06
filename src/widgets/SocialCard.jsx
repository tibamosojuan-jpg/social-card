import { useState } from "react";

function StatItem({ label, value }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-lg font-bold text-black">{value}</span>
      <span className="text-xs text-black/60">{label}</span>
    </div>
  );
}

export default function SocialCard({ user }) {
  const [isFriend, setIsFriend] = useState(false);

  if (!user) {
    return <p className="text-gray-500">No hay información del perfil.</p>;
  }

  const toggleFriend = () => setIsFriend((previous) => !previous);

  return (
    <article className="w-72 rounded-3xl bg-[#FFFC00] p-6 shadow-xl">
      <div className="flex flex-col items-center gap-2">
        <img
          src={user.avatarUrl}
          alt={`Foto de ${user.displayName}`}
          className="h-24 w-24 rounded-full border-4 border-white object-cover"
        />
        <h2 className="text-xl font-extrabold text-black">{user.displayName}</h2>
        <p className="text-sm text-black/70">@{user.username}</p>
      </div>

      <div className="my-5 grid grid-cols-3 rounded-2xl bg-white/70 py-3">
        <StatItem label="Puntaje" value={user.score.toLocaleString()} />
        <StatItem label="Amigos" value={user.friendsCount} />
        <StatItem label="Racha" value={`${user.streakDays} días`} />
      </div>

      <button
        onClick={toggleFriend}
        className={`w-full rounded-full py-2 font-bold transition ${
          isFriend ? "bg-white text-black" : "bg-black text-white hover:bg-black/80"
        }`}
      >
        {isFriend ? "Amigos" : "Añadir amigo"}
      </button>
    </article>
  );
}