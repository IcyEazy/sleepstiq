import { useState } from "react";
import { FaqHero, FaqsComp } from "../../components";

function Faqs() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <main>
      <FaqHero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FaqsComp searchTerm={searchTerm} />
    </main>
  );
}

export default Faqs;
