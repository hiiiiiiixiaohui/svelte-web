
import About from "./routes/about/About.svelte";
import Details from "./routes/details/Details.svelte";
import Home from "./routes/home/Home.svelte";

export const routers = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/detail",
        component: Details,
    },
    {
        path: "/about",
        component: About,
    },
];

