<script>
    import { page } from '$app/state';
    import 'github-markdown-css/github-markdown-light.css';
    import '../app.css';

    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

    let { children } = $props();

    let activeUrl = $derived(page.url.pathname);
</script>

<div class="app">
    <Header />

    <main>
        {@render children()}
    </main>

    <Footer />
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-width: 400px;
        min-height: 100vh;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 100%;
        max-width: 64rem;
        margin: 0 auto 48px;
        box-sizing: border-box;
    }
</style>
