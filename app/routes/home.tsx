import { Home } from "../components/home";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "DMN Party Deck" },
    { name: "home", content: "DMN Party Deck Info Site!" },
  ];
}

export default function HomeRoute() {
  return <Home />;
}
