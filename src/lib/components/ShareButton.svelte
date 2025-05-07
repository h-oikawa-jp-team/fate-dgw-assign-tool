<script lang="ts">
    import { Button } from 'flowbite-svelte';

    let { buttonLabel, title, text, url }: { buttonLabel: string } & ShareData = $props();

    let copied = $state(false);

    async function share() {
        const shareData: ShareData = { title, text, url };
        if (navigator.canShare && navigator.canShare(shareData)) {
            await navigator.share(shareData);
        } else {
            await navigator.clipboard.writeText(`<${title}>\n\n${[text, url].join('\n')}`);
            copied = true;

            setTimeout(() => {
                copied = false;
            }, 1000);
        }
    }
</script>

<Button pill color="cyan" onclick={share}>
    {#if copied}
        クリップボードにコピーしました
    {:else}
        {buttonLabel}
    {/if}
</Button>
