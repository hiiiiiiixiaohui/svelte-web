/**
 *  This is file could help auto import and manage your project route
 *  But you must follow the file directory specifications. 
 *  (folders with the same name and files with the first letter capitalized)
 *  In (./src/routes) directory
 */

const pages = import.meta.glob('./routes/**/page.js', {
    eager: true,
    import: 'default'
})
const componentsMeta = import.meta.glob('./routes/**/*.svelte');

const routes = Object.entries(pages).map(([path, meta]) => {
    let pagePath = path;
    path = path.replace('./routes', '').replace('/page.js', '') || '';
    const name = path.split('/').filter(Boolean).join('-') || 'home';
    const replaceFileName = `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
    pagePath = pagePath.replace('page.js', `${replaceFileName}.svelte`)

    // reset home path to root route(/)
    if (path.includes('home')) {
        path = '/'
    }

    return {
        path,
        meta,
        name,
        component: componentsMeta[pagePath],
    }
})

export default routes



