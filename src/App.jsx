import SocialCard from "./widgets/SocialCard";
import { profile } from "./data/profile";

export default function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <SocialCard user={profile} />
    </main>
  );
}