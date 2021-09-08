import { useState } from "react";
import { useRouter } from "next/router";

export default function Search() {
  const [term, setTerm] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?term=${term}`);
    setTerm("");
  };

  return (
    <div className="relative w-28 sm:w-full group">
      <div className="absolute -inset-0.5 rounded-lg opacity-20 bg-gradient-to-tl from-blue-700 via-red-700 to-yellow-500 blur filter  group-hover:opacity-75 transition group-hover:duration-200  duration-1000  "></div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Kërko ..."
          className="relative w-full px-3 py-2 text-sm font-medium tracking-wide text-gray-300 transition-colors duration-200 rounded-lg bg-darkGrey focus:outline-none group-hover:text-white"
        />
      </form>
    </div>
  );
}
