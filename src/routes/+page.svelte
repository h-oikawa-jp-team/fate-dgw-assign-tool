<script lang="ts">
    import Players from '$lib/components/players/Players.svelte';
</script>

<svelte:head>
    <title>サーヴァント割り当てツール</title>
    <meta name="description" content="Fate DGW サーヴァント割り当てツール" />
</svelte:head>

<section class="main">
    <Players />
</section>

<style>
    .main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
    }
</style>
