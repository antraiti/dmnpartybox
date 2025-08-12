import { About } from "~/components/about";
import { Home } from "../components/home";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About" },
    { name: "about", content: "All about dmn party deck" },
  ];
}

export default function AboutRoute() {
  return <About/>;
}
