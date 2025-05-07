<script lang="ts" module>
    import rison from 'rison';
    import { base } from '$app/paths';
    import { goto } from '$app/navigation';
    import type { Master, ServantClass, Servant } from '$lib/domain';
    import { Setting } from '$lib/domain/setting';
    import { allServantIdMap } from '$lib/domain/servant';

    const makeResultLink = (players: Master[]) => {
        const servantIdsPath = players.map((p) => p.servant?.id?.toString(16)).join('');
        const params = {
            masters: players.map((p) => ({
                name: p.name,
            })),
        };
        const risonParams = rison.encode(params);
        return `${base}/assigned/${servantIdsPath}?params=${risonParams}`;
    };
</script>

<script lang="ts">
    import { onMount } from 'svelte';
    import { Alert, Input, Label, Button } from 'flowbite-svelte';
    import { InfoCircleSolid } from 'flowbite-svelte-icons';

    import Counter from './Counter.svelte';

    // マスター人数
    let masterCounter: number = $state(7);

    // マスター情報を格納する配列
    let players: Master[] = $state([]);

    // マスター人数を変更する関数
    let onChangeCount = (n: number) => {
        masterCounter = n;

        // マスターの数を変更
        if (n < players.length) {
            players = players.slice(0, n);
        } else {
            // 新しいマスター名を追加
            players = [
                ...players,
                ...Array(n - players.length)
                    .fill('')
                    .map((_, i) => {
                        return {
                            name: `マスター${players.length + i + 1}`,
                        } as Master;
                    }),
            ];
        }
    };

    // マスター名の入力を処理する関数
    function handleNameChange(index: number, target: HTMLInputElement) {
        if (!players[index]) return;

        const value = target.value.trim();
        players[index].name = value || `マスター${index + 1}`;
    }

    // サーヴァントを割り当てる関数
    function assignServants() {
        const availableServants = Setting.servantSettings.filter((s) => s.enabled).map((s) => allServantIdMap[s.id]);
        const shuffled = availableServants.sort(() => Math.random() - 0.5);

        const usedServant: Set<Servant> = new Set();
        const usedServantClass: Set<ServantClass> = new Set();

        // 各マスターにサーヴァントを割り当てる
        players = players.map((player) => {
            const servant = shuffled.find((s) => {
                return !usedServant.has(s) && (Setting.allowSameClassServant || !usedServantClass.has(s.class));
            });

            if (servant) {
                usedServant.add(servant);
                usedServantClass.add(servant.class);
            }

            return {
                ...player,
                servant,
            };
        });

        const resultLink = makeResultLink(players);
        return goto(resultLink, { replaceState: true });
    }

    onMount(() => {
        // 初期化処理
        onChangeCount(masterCounter);
    });
</script>

<div class="container">
    <div class="flex flex-col items-center">
        <Label>マスター人数</Label>
        <Counter initCount={masterCounter} onChange={onChangeCount} />
    </div>

    <div class="player-input-area rounded-md border border-gray-200 shadow-md">
        <Alert color="blue" class="mb-4">
            {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
            マスター名を入力してください (省略可)
        </Alert>

        <div class="player-input-grid">
            {#each players as player, i}
                <div class="player-input">
                    <Label for="player{i + 1}">マスター{i + 1}:</Label>
                    <Input
                        type="text"
                        id="player{i + 1}"
                        placeholder="名前を入力"
                        oninput={(e) => e.target && handleNameChange(i, e.target as HTMLInputElement)}
                    />
                </div>
            {/each}
        </div>
    </div>

    <div class="button-area">
        <Button pill color="purple" onclick={assignServants}>サーヴァントを割り当てる</Button>
    </div>
</div>

<style>
    .container {
        min-height: 100vh;
        margin: 0 auto;
        padding: 20px;
    }

    .player-input-area {
        padding: 20px;
        margin-bottom: 20px;

        .player-input-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }
        @media (max-width: 768px) {
            .player-input-grid {
                grid-template-columns: 1fr;
            }
        }
    }

    .button-area {
        text-align: center;
        margin: 20px 0;

        :global(button) {
            cursor: pointer;
        }
    }
</style>
