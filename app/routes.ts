import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    route("about","routes/about.tsx"),
    route("rules","routes/rules.tsx"),
    route("cards","routes/cards.tsx"),
] satisfies RouteConfig;
