import rison from 'rison';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { allServantIdMap, type Master } from '$lib/domain';

type RisonParams = {
    masters?: Partial<Master>[];
};

const parseParams = (searchParams: URLSearchParams): RisonParams => {
    const params = searchParams.get('params');
    if (!params) return { masters: [] };
    return rison.decode(params) as RisonParams;
};

export const load: PageLoad = ({ params, url }) => {
    const ids = params.ids.match(/.{4}/g) || [];
    const risonParams = parseParams(url.searchParams);

    const servants = ids.map((id) => {
        const servantId = parseInt(id, 16);
        if (isNaN(servantId)) {
            error(404, 'Not found');
        }
        const servant = allServantIdMap[servantId];
        if (!servant) {
            error(404, 'Not found');
        }
        return servant;
    });

    let masters: Master[] = servants.map((servant, i) => {
        const master = risonParams.masters?.shift();
        const name = master?.name || `マスター${i + 1}`;
        return {
            name,
            servant,
        };
    });

    return {
        masters,
    };
};
