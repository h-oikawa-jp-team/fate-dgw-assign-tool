<script lang="ts">
    import { dev } from '$app/environment';
    import { Alert, Card, Toggle } from 'flowbite-svelte';
    import { ArrowUpRightFromSquareOutline, ExclamationCircleSolid } from 'flowbite-svelte-icons';
    import { base } from '$app/paths';

    import ShareButton from '$lib/components/ShareButton.svelte';
    import { page } from '$app/state';

    let { player, onChangeShow } = $props();

    let isShow = $state(false);
</script>

<Card size="lg" class="flex flex-col gap-4 p-4">
    <div class="font-bold tracking-tight italic">{player.name}</div>

    {#if player.servant}
        {@const servantId = player.servant.id.toString(16).padStart(4, '0')}

        <Toggle class="toggle-btn" bind:checked={isShow} onchange={() => onChangeShow(player, isShow)}>
            {#if isShow}隠す{:else}表示{/if}
        </Toggle>

        {#if isShow}
            <Alert color="cyan" class="text-blue-300">
                {#if dev}
                    <p>クラス: {player.servant.class.name}</p>
                    <p>サーヴァントID: [{servantId}]</p>
                    <p>サーヴァント名: {player.servant.name}</p>
                {/if}

                <p class="servant-detail text-xl font-bold">
                    <a href={`${base}/servants/${servantId}`} target="_blank" class="hover:underline">
                        サーヴァントID: [{servantId}]
                        <ArrowUpRightFromSquareOutline size="lg" class="inline" />
                    </a>
                </p>
            </Alert>
        {/if}

        {@const shareData = {
            title: `${player.name}のサーヴァント`,
            text: `サーヴァントID: [${servantId}]`,
            url: `${page.url.origin}${base}/servants/${servantId}`,
        }}
        <ShareButton buttonLabel="個別にシェアする" {...shareData} />
    {:else}
        <Alert color="orange">
            {#snippet icon()}<ExclamationCircleSolid class="h-5 w-5" />{/snippet}
            <span class="font-bold">割り当て可能なサーヴァントが不足しています</span>
        </Alert>
    {/if}
</Card>

<style>
    :global(button) {
        cursor: pointer;
    }
    :global(.toggle-btn) {
        width: fit-content;
    }

    .servant-detail a {
        cursor: pointer;
    }
</style>
