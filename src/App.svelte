<script>
  import { Router, Link } from "svelte-routing";
  import RootRouter from "./RootRouter.svelte";

  export let url = "";
</script>

<!-- router system -->
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
