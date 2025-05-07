import type { Servant } from './servant';

export type Master = {
    name: string;
    servant?: Servant;
};
