<script lang="ts" module>
    import type { HTMLImgAttributes } from 'svelte/elements';
</script>

<script lang="ts">
    import { Carousel, Controls, Thumbnails } from 'flowbite-svelte';
    import { ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';

    import type { PageProps } from './$types';
    import imagesData from './imagesData';

    let { data }: PageProps = $props();

    const servant = data.servant;
    const images = imagesData[servant.symbol];

    let index = $state(0);
    let image: HTMLImgAttributes | undefined = $state();
</script>

<article class="container my-4 space-y-1">
    <h1 class="rounded-sm bg-gray-200 p-2 text-center text-xl font-bold">
        [{data.servant.class.name}]
        <a href={servant.originUrl} target="_blank" rel="noopener noreferrer">
            {data.servant.name}
            <ArrowUpRightFromSquareOutline class="inline" />
        </a>
    </h1>
    <Carousel
        {images}
        bind:index
        onchange={(d) => (image = d)}
        imgClass="object-contain h-full w-fit rounded-xs"
        class="carousel rounded-md bg-gray-100"
    >
        <Controls class="items-center pt-4 text-black/50" />
    </Carousel>
    {#if image?.alt}
        <h2 class="rounded-sm bg-gray-100 p-2 text-center">
            {image.alt}
        </h2>
    {/if}
    <Thumbnails {images} bind:index imgClass="thumbnail" class="thumbnails rounded-md" />
</article>

<style>
    a {
        text-decoration: underline;
        cursor: pointer;
    }

    :global(.carousel) {
        min-height: 60vh;
    }

    :global(.thumbnails) {
        justify-content: space-evenly;

        :global(.thumbnail) {
            max-height: 15vh;
        }
    }
</style>
