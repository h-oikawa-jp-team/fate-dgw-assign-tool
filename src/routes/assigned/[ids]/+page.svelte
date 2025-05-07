<script lang="ts">
    import { Alert } from 'flowbite-svelte';
    import { InfoCircleSolid } from 'flowbite-svelte-icons';
    import { page } from '$app/state';

    import PlayerCard from '$lib/components/players/PlayerCard.svelte';
    import ShareButton from '$lib/components/ShareButton.svelte';

    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    const masters = data.masters;
</script>

<div class="container my-4 flex flex-col gap-6">
    <article class="space-y-2 rounded-md border border-gray-200 p-6 shadow-md">
        <h1 class="text-center text-xl font-bold">サーヴァント割り当て結果</h1>

        <Alert color="blue" class="mb-4">
            {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
            <span class="font-bold"> 各マスターは自分のサーヴァントだけを確認してください </span>
        </Alert>

        <div class="player-cards grid gap-4">
            {#each masters as player}
                <PlayerCard {player} onChangeShow={console.info} />
            {/each}
        </div>
    </article>

    <ShareButton buttonLabel="このページのURLをシェアする" title="サーヴァント割り当て結果" url={page.url.href} />
</div>

<style>
    .container {
        width: 100%;
    }

    .player-cards {
        grid-template-columns: repeat(2, 1fr);
        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }
</style>
