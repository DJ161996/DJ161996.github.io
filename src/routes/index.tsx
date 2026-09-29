import { createFileRoute } from "@tanstack/react-router";
import { ArianaPortfolio } from "@/components/portfolio/ArianaPortfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Daniela Amaya Jaimes — CV" },
      {
        name: "description",
        content:
          "Étudiante motivée à la recherche d’un apprentissage dans le commerce ou la vente. Trilingue français, anglais et espagnol.",
      },
      { property: "og:title", content: "Daniela Amaya Jaimes — CV" },
      {
        property: "og:description",
        content:
          "CV de Daniela Amaya Jaimes, étudiante motivée à la recherche d’un apprentissage dans le commerce ou la vente.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <ArianaPortfolio />;
}
