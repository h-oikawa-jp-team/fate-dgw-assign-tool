<script lang="ts" module>
    import { dev } from '$app/environment';
</script>

<script lang="ts">
    import { onMount } from 'svelte';
    import { Accordion, AccordionItem, Checkbox, Listgroup, Toggle } from 'flowbite-svelte';
    import { ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';
    import { allServants, Saber, Lancer, Archer, Rider, Caster, Assassin, Berserker, Extra } from '$lib/domain/servant';
    import type { Servant } from '$lib/domain';
    import { Setting } from '$lib/domain/setting';
    import { base } from '$app/paths';

    onMount(() => {
        if (!dev) return;

        // サーヴァントIDが重複していないか確認
        const ids = allServants.map((s) => s.id);
        const uniqueIds = new Set(ids);
        if (ids.length !== uniqueIds.size) {
            console.error(
                '重複ID: ',
                ids.filter((id, index) => ids.indexOf(id) !== index).map((id) => id.toString(16))
            );
            alert('サーヴァントIDが重複しています。コンソールを確認してください。');
        }
    });
</script>

<section class="settings m-4">
    <Accordion multiple>
        <AccordionItem open>
            {#snippet header()}クラス設定{/snippet}

            <Toggle class="toggle-btn" bind:checked={Setting.allowSameClassServant}>
                同クラスのサーヴァントの複数割り当てを許可する
            </Toggle>
        </AccordionItem>

        <AccordionItem open>
            {#snippet header()}サーヴァント設定{/snippet}
            <p class="text-sm text-gray-500">
                サーヴァント毎の割り当て可否を設定します。<br />
                チェックを外したサーヴァントはマスターに割り当てられません。
            </p>

            <article class="servants mt-4">
                <h2 class="text-lg font-bold">サーヴァント一覧</h2>

                {#snippet servantCheckbox(servant: Servant)}
                    {@const setting = Setting.getServantSetting(servant)}
                    {@const servantId = servant.id.toString(16).padStart(4, '0')}
                    <Checkbox id={'servant' + servantId} bind:checked={setting.enabled}>
                        {servant.name} (ID:
                        <a href="{base}/servants/{servantId}" target="_blank">
                            {servantId}<ArrowUpRightFromSquareOutline size="sm" class="inline" />
                        </a> )
                    </Checkbox>
                {/snippet}

                {#snippet servantsListGroup(servants: Servant[])}
                    <Listgroup class="m-2 w-full">
                        {#each servants as servant}
                            <li class="p-3">
                                {@render servantCheckbox(servant)}
                            </li>
                        {/each}
                    </Listgroup>
                {/snippet}

                <section class="mt-2">
                    <h3 class="text-md font-bold">{Saber.Class.name}</h3>
                    {@render servantsListGroup(Saber.servants)}
                </section>

                <section class="mt-2">
                    <h3 class="text-md font-bold">{Lancer.Class.name}</h3>
                    {@render servantsListGroup(Lancer.servants)}
                </section>

                <section class="mt-2">
                    <h3 class="text-md font-bold">{Archer.Class.name}</h3>
                    {@render servantsListGroup(Archer.servants)}
                </section>

                <section class="mt-2">
                    <h3 class="text-md font-bold">{Rider.Class.name}</h3>
                    {@render servantsListGroup(Rider.servants)}
                </section>

                <section class="mt-2">
                    <h3 class="text-md font-bold">{Caster.Class.name}</h3>
                    {@render servantsListGroup(Caster.servants)}
                </section>

                <section class="mt-2">
                    <h3 class="text-md font-bold">{Assassin.Class.name}</h3>
                    {@render servantsListGroup(Assassin.servants)}
                </section>

                <section class="mt-2">
                    <h3 class="text-md font-bold">{Berserker.Class.name}</h3>
                    {@render servantsListGroup(Berserker.servants)}
                </section>

                <section class="mt-2">
                    <h3 class="text-md font-bold">{Extra.ClassAvenger.name}</h3>
                    {@render servantsListGroup(Extra.servants)}
                </section>
            </article>
        </AccordionItem>
    </Accordion>
</section>

<style>
    .servants {
        a {
            color: #3b82f6;
            text-decoration: underline;
            cursor: pointer;
        }
    }
</style>
