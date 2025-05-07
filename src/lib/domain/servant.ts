export type ServantClass = {
    name: string;
    id: number;
};

export type Servant = {
    symbol: symbol;
    id: number;
    name: string;
    class: ServantClass;
    originUrl: string;
};

/* Generate unique IDs based on name and class */
const makeServantId = (seed: string, servantClass: ServantClass) => {
    const nameHash = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return (nameHash & 0xffff) + (0x0001 << servantClass.id);
};

export namespace Saber {
    export const Class: ServantClass = {
        id: 1,
        name: 'セイバー',
    };

    export const Artoria_Pendragon: Servant = {
        name: 'アルトリア・ペンドラゴン',
        symbol: Symbol('Artoria_Pendragon'),
        id: makeServantId('アルトリア・ペンドラゴン', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/223402',
    } as Servant;

    export const Nero_Claudius: Servant = {
        name: 'ネロ・クラウディウス',
        symbol: Symbol('Nero_Claudius'),
        id: makeServantId('ネロ・クラウディウス', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/223450',
    } as Servant;

    export const Gawain: Servant = {
        name: 'ガウェイン',
        symbol: Symbol('Gawain'),
        id: makeServantId('ガウェイン', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/223610',
    } as Servant;

    export const Okita_Souji: Servant = {
        name: '沖田総司',
        symbol: Symbol('Okita_Souji'),
        id: makeServantId('沖田総司', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/223636',
    } as Servant;

    export const Jason: Servant = {
        name: 'イアソン',
        symbol: Symbol('Jason'),
        id: makeServantId('イアソン', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/223755',
    } as Servant;

    export const servants: Servant[] = [Artoria_Pendragon, Nero_Claudius, Gawain, Okita_Souji, Jason];
}

export namespace Lancer {
    export const Class: ServantClass = {
        id: 2,
        name: 'ランサー',
    };

    export const Cú_Chulainn: Servant = {
        name: 'クー・フーリン',
        symbol: Symbol('Cú_Chulainn'),
        id: makeServantId('クー・フーリン', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/225133',
    } as Servant;

    export const Elizabeth_Bathory: Servant = {
        name: 'エリザベート・バートリー',
        symbol: Symbol('Elizabeth_Bathory'),
        id: makeServantId('エリザベート・バートリー', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/225240',
    } as Servant;

    export const Diarmuid: Servant = {
        name: 'ディルムッド・オディナ',
        symbol: Symbol('Diarmuid'),
        id: makeServantId('ディルムッド・オディナ', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/225212',
    } as Servant;

    export const Li_Shuwen: Servant = {
        name: '李書文',
        symbol: Symbol('Li_Shuwen'),
        id: makeServantId('李書文', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/225306',
    } as Servant;

    export const Enkidu: Servant = {
        name: 'エルキドゥ',
        symbol: Symbol('Enkidu'),
        id: makeServantId('エルキドゥ', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/225508',
    } as Servant;

    export const servants: Servant[] = [Cú_Chulainn, Elizabeth_Bathory, Diarmuid, Li_Shuwen, Enkidu];
}

export namespace Archer {
    export const Class: ServantClass = {
        id: 3,
        name: 'アーチャー',
    };

    export const Emiya: Servant = {
        name: 'エミヤ',
        symbol: Symbol('Emiya'),
        id: makeServantId('エミヤ', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/224707',
    } as Servant;

    export const Gilgamesh: Servant = {
        name: 'ギルガメッシュ',
        symbol: Symbol('Gilgamesh'),
        id: makeServantId('ギルガメッシュ', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/224757',
    } as Servant;

    export const Robin_Hood: Servant = {
        name: 'ロビンフッド',
        symbol: Symbol('Robin_Hood'),
        id: makeServantId('ロビンフッド', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/224818',
    } as Servant;

    export const Chiron: Servant = {
        name: 'ケイローン',
        symbol: Symbol('Chiron'),
        id: makeServantId('ケイローン', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/224834',
    } as Servant;

    export const Oda_Nobunaga: Servant = {
        name: '織田信長',
        symbol: Symbol('Oda_Nobunaga'),
        id: makeServantId('織田信長', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/224851',
    } as Servant;

    export const servants: Servant[] = [Emiya, Gilgamesh, Robin_Hood, Chiron, Oda_Nobunaga];
}

export namespace Rider {
    export const Class: ServantClass = {
        id: 4,
        name: 'ライダー',
    };

    export const Medusa: Servant = {
        name: 'メドゥーサ',
        symbol: Symbol('Medusa'),
        id: makeServantId('メドゥーサ', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/230630',
    } as Servant;

    export const Iskandar: Servant = {
        name: 'イスカンダル',
        symbol: Symbol('Iskandar'),
        id: makeServantId('イスカンダル', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/230648',
    } as Servant;

    export const Francis_Drake: Servant = {
        name: 'フランシス・ドレイク',
        symbol: Symbol('Francis_Drake'),
        id: makeServantId('フランシス・ドレイク', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/230720',
    } as Servant;

    export const Astolfo: Servant = {
        name: 'アストルフォ',
        symbol: Symbol('Astolfo'),
        id: makeServantId('アストルフォ', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/230819',
    } as Servant;

    export const Achilles: Servant = {
        name: 'アキレウス',
        symbol: Symbol('Achilles'),
        id: makeServantId('アキレウス', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/230841',
    } as Servant;

    export const servants: Servant[] = [Medusa, Iskandar, Francis_Drake, Astolfo, Achilles];
}

export namespace Caster {
    export const Class: ServantClass = {
        id: 5,
        name: 'キャスター',
    };

    export const Medea: Servant = {
        name: 'メディア',
        symbol: Symbol('Medea'),
        id: makeServantId('メディア', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/231207',
    } as Servant;

    export const Gilles_de_Rais: Servant = {
        name: 'ジル・ド・レェ',
        symbol: Symbol('Gilles_de_Rais'),
        id: makeServantId('ジル・ド・レェ', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/231234',
    } as Servant;

    export const Tamamo_no_Mae: Servant = {
        name: '玉藻前',
        symbol: Symbol('Tamamo_no_Mae'),
        id: makeServantId('玉藻前', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/231413',
    } as Servant;

    export const Nursery_Rhyme: Servant = {
        name: 'ナーサリー・ライム',
        symbol: Symbol('Nursery_Rhyme'),
        id: makeServantId('ナーサリー・ライム', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/231451',
    } as Servant;

    export const Cú_Chulainn_Caster: Servant = {
        name: 'クー・フーリン',
        symbol: Symbol('Cú_Chulainn_Caster'),
        id: makeServantId('クー・フーリン', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/231644',
    } as Servant;

    export const servants: Servant[] = [Medea, Gilles_de_Rais, Tamamo_no_Mae, Nursery_Rhyme, Cú_Chulainn_Caster];
}

export namespace Assassin {
    export const Class: ServantClass = {
        id: 6,
        name: 'アサシン',
    };

    export const Sasaki_Kojirou: Servant = {
        name: '佐々木小次郎',
        symbol: Symbol('Sasaki_Kojirou'),
        id: makeServantId('佐々木小次郎', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/232303',
    } as Servant;

    export const Hassan_of_the_Cursed_Arm: Servant = {
        name: 'ハサン・サッバーハ（呪腕）',
        symbol: Symbol('Hassan_of_the_Cursed_Arm'),
        id: makeServantId('ハサン・サッバーハ（呪腕）', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/232417',
    } as Servant;

    export const Jack_the_Ripper: Servant = {
        name: 'ジャック・ザ・リッパー',
        symbol: Symbol('Jack_the_Ripper'),
        id: makeServantId('ジャック・ザ・リッパー', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/232447',
    } as Servant;

    export const Hassan_of_Serenity: Servant = {
        name: 'ハサン・サッバーハ（静謐）',
        symbol: Symbol('Hassan_of_Serenity'),
        id: makeServantId('ハサン・サッバーハ（静謐）', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/232514',
    } as Servant;

    export const Charlotte_Corday: Servant = {
        name: 'シャルロット・コルデー',
        symbol: Symbol('Charlotte_Corday'),
        id: makeServantId('シャルロット・コルデー', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/232537',
    } as Servant;

    export const servants: Servant[] = [
        Sasaki_Kojirou,
        Hassan_of_the_Cursed_Arm,
        Jack_the_Ripper,
        Hassan_of_Serenity,
        Charlotte_Corday,
    ];
}

export namespace Berserker {
    export const Class: ServantClass = {
        id: 7,
        name: 'バーサーカー',
    };

    export const Heracles: Servant = {
        name: 'ヘラクレス',
        symbol: Symbol('Heracles'),
        id: makeServantId('ヘラクレス', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/232845',
    } as Servant;

    export const Lancelot: Servant = {
        name: 'ランスロット',
        symbol: Symbol('Lancelot'),
        id: makeServantId('ランスロット', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/232915',
    } as Servant;

    export const Frankensteins_Monster: Servant = {
        name: 'フランケンシュタイン',
        symbol: Symbol('Frankensteins_Monster'),
        id: makeServantId('フランケンシュタイン', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/232938',
    } as Servant;

    export const Jekyll_And_Hyde: Servant = {
        name: 'ヘンリー・ジキル＆ハイド',
        symbol: Symbol('Jekyll_And_Hyde'),
        id: makeServantId('ヘンリー・ジキル＆ハイド', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/233006',
    } as Servant;

    export const Kiyohime: Servant = {
        name: '清姫',
        symbol: Symbol('Kiyohime'),
        id: makeServantId('清姫', Class),
        class: Class,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/233035',
    } as Servant;

    export const servants: Servant[] = [Heracles, Lancelot, Frankensteins_Monster, Jekyll_And_Hyde, Kiyohime];
}

export namespace Extra {
    export const ClassAvenger: ServantClass = {
        id: 8,
        name: 'アヴェンジャー',
    };

    export const Angra_Mainyu: Servant = {
        name: 'アンリマユ',
        symbol: Symbol('Angra_Mainyu'),
        id: makeServantId('アンリマユ', ClassAvenger),
        class: ClassAvenger,
        originUrl: 'https://adriaticq.hatenablog.com/entry/2023/08/24/233116',
    } as Servant;

    export const servants: Servant[] = [Angra_Mainyu];
}

export const allServantClasses: ServantClass[] = [
    Saber.Class,
    Archer.Class,
    Lancer.Class,
    Rider.Class,
    Caster.Class,
    Assassin.Class,
    Berserker.Class,
    Extra.ClassAvenger,
];

export const allServants: Servant[] = [
    ...Saber.servants,
    ...Archer.servants,
    ...Lancer.servants,
    ...Rider.servants,
    ...Caster.servants,
    ...Assassin.servants,
    ...Berserker.servants,
    ...Extra.servants,
];

export const allServantIdMap: Record<Servant['id'], Servant> = allServants.reduce(
    (acc, servant) => {
        acc[servant.id] = servant;
        return acc;
    },
    {} as Record<Servant['id'], Servant>
);

export const allServantSymbolMap: Record<Servant['symbol'], Servant> = allServants.reduce(
    (acc, servant) => {
        acc[servant.symbol] = servant;
        return acc;
    },
    {} as Record<Servant['symbol'], Servant>
);
