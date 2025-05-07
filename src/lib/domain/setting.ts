import type { Servant } from './servant';
import { allServants } from './servant';

export namespace Setting {
    export const allowSameClassServant = false;

    export type ServantSetting = {
        id: Servant['id'];
        enabled: boolean;
    };

    export const servantSettings: ServantSetting[] = allServants.map((servant) => ({
        id: servant.id,
        enabled: true,
    }));

    export function getServantSetting(servant: Servant): ServantSetting {
        const setting = servantSettings.find((s) => s.id === servant.id);
        if (!setting) {
            throw new Error(`Servant setting not found for ${servant.name}`);
        }
        return setting;
    }
}
