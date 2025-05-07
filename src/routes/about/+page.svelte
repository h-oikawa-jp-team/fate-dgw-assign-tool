<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import notice from './notice.md?raw';
</script>

<svelte:head>
    <title>About</title>
    <meta name="description" content="About this app" />
</svelte:head>

<section class="m-4">
    <article class="markdown-body">
        <SvelteMarkdown source={notice} />
    </article>
</section>

<style>
    /* nothing */
</style>
