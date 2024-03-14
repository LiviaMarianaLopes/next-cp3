import Image from "next/image";
import Cardanime from "@/components/CardAnime";
export default function Home() {
  return (
    <main className="flex-auto">
      <Cardanime title="One Piece" image="/cartaz-onepiece.jpg" link="https://www.youtube.com/watch?v=MCb13lbVGE0"/>
    </main>
  );
}
