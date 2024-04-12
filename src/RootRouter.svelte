<script>
    import { Router, Link, Route } from "svelte-routing";
    import routes from "./autoImportRoutes";
</script>

<div>
    <Router>
        {#each routes as { path, component }}
            <Route {path} {component} />
        {/each}
    </Router>
</div>
