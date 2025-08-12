import { About } from "~/components/about";
import { Home } from "../components/home";
import type { Route } from "./+types/home";
import { Rules } from "~/components/rules";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rules" },
    { name: "rules", content: "Our rulings in the party deck" },
  ];
}

export default function RulesRoute() {
  return <Rules/>;
}
