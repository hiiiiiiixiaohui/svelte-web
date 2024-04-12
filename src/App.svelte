<script>
  import { Router, Link } from "svelte-routing";
  import RootRouter from "./RootRouter.svelte";
  import Counter from "./lib/Counter.svelte";

  export let url = "";
</script>

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/detail">Blog</Link>
    <Link to="/about">About</Link>
  </nav>
  <main>
    <RootRouter />
  </main>
</Router>

<style>
</style>
