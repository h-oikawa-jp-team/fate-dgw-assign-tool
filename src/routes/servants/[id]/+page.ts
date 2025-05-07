import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { allServantIdMap } from '$lib/domain';

export const load: PageLoad = ({ params }) => {
    const id = parseInt(params.id, 16);
    if (isNaN(id)) {
        error(404, 'Not found');
    }

    const servant = allServantIdMap[id];
    if (!servant) {
        error(404, 'Not found');
    }

    return {
        servant,
    };
};
