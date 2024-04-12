<script>
    import { Router, Link, Route } from "svelte-routing";
    import { routers } from "./routers";
</script>

<div>
    <Router>
        {#each routers as { path, component }}
            <Route {path} {component} />
        {/each}
    </Router>
</div>
