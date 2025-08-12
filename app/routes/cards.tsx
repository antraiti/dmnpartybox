import { About } from "~/components/about";
import { Home } from "../components/home";
import type { Route } from "./+types/home";
import { Cards } from "~/components/cards";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cards" },
    { name: "cards", content: "Party deck card list" },
  ];
}

export default function CardRoute() {
  return <Cards/>;
}
