import type { HTMLImgAttributes } from 'svelte/elements';

import { Saber, Lancer, Archer, Rider, Caster, Assassin, Berserker, Extra, type Servant } from '$lib/domain/servant';

import Artoria_Pendragon from './Artoria_Pendragon.json';
import Nero_Claudius from './Nero_Claudius.json';
import Gawain from './Gawain.json';
import Okita_Souji from './Okita_Souji.json';
import Jason from './Jason.json';
import Cú_Chulainn from './Cú_Chulainn.json';
import Elizabeth_Bathory from './Elizabeth_Bathory.json';
import Diarmuid from './Diarmuid.json';
import Li_Shuwen from './Li_Shuwen.json';
import Enkidu from './Enkidu.json';
import Emiya from './Emiya.json';
import Gilgamesh from './Gilgamesh.json';
import Robin_Hood from './Robin_Hood.json';
import Chiron from './Chiron.json';
import Oda_Nobunaga from './Oda_Nobunaga.json';
import Medusa from './Medusa.json';
import Iskandar from './Iskandar.json';
import Francis_Drake from './Francis_Drake.json';
import Astolfo from './Astolfo.json';
import Achilles from './Achilles.json';
import Medea from './Medea.json';
import Gilles_de_Rais from './Gilles_de_Rais.json';
import Tamamo_no_Mae from './Tamamo_no_Mae.json';
import Nursery_Rhyme from './Nursery_Rhyme.json';
import Cú_Chulainn_Caster from './Cú_Chulainn_Caster.json';
import Sasaki_Kojirou from './Sasaki_Kojirou.json';
import Hassan_of_the_Cursed_Arm from './Hassan_of_the_Cursed_Arm.json';
import Jack_the_Ripper from './Jack_the_Ripper.json';
import Hassan_of_Serenity from './Hassan_of_Serenity.json';
import Charlotte_Corday from './Charlotte_Corday.json';
import Heracles from './Heracles.json';
import Lancelot from './Lancelot.json';
import Frankensteins_Monster from './Frankensteins_Monster.json';
import Jekyll_And_Hyde from './Jekyll_And_Hyde.json';
import Kiyohime from './Kiyohime.json';
import Angra_Mainyu from './Angra_Mainyu.json';

const imagesData: Record<Servant['symbol'], HTMLImgAttributes[]> = {
    [Saber.Artoria_Pendragon.symbol]: Artoria_Pendragon,
    [Saber.Nero_Claudius.symbol]: Nero_Claudius,
    [Saber.Gawain.symbol]: Gawain,
    [Saber.Okita_Souji.symbol]: Okita_Souji,
    [Saber.Jason.symbol]: Jason,
    [Lancer.Cú_Chulainn.symbol]: Cú_Chulainn,
    [Lancer.Elizabeth_Bathory.symbol]: Elizabeth_Bathory,
    [Lancer.Diarmuid.symbol]: Diarmuid,
    [Lancer.Li_Shuwen.symbol]: Li_Shuwen,
    [Lancer.Enkidu.symbol]: Enkidu,
    [Archer.Emiya.symbol]: Emiya,
    [Archer.Gilgamesh.symbol]: Gilgamesh,
    [Archer.Robin_Hood.symbol]: Robin_Hood,
    [Archer.Chiron.symbol]: Chiron,
    [Archer.Oda_Nobunaga.symbol]: Oda_Nobunaga,
    [Rider.Medusa.symbol]: Medusa,
    [Rider.Iskandar.symbol]: Iskandar,
    [Rider.Francis_Drake.symbol]: Francis_Drake,
    [Rider.Astolfo.symbol]: Astolfo,
    [Rider.Achilles.symbol]: Achilles,
    [Caster.Medea.symbol]: Medea,
    [Caster.Gilles_de_Rais.symbol]: Gilles_de_Rais,
    [Caster.Tamamo_no_Mae.symbol]: Tamamo_no_Mae,
    [Caster.Nursery_Rhyme.symbol]: Nursery_Rhyme,
    [Caster.Cú_Chulainn_Caster.symbol]: Cú_Chulainn_Caster,
    [Assassin.Sasaki_Kojirou.symbol]: Sasaki_Kojirou,
    [Assassin.Hassan_of_the_Cursed_Arm.symbol]: Hassan_of_the_Cursed_Arm,
    [Assassin.Jack_the_Ripper.symbol]: Jack_the_Ripper,
    [Assassin.Hassan_of_Serenity.symbol]: Hassan_of_Serenity,
    [Assassin.Charlotte_Corday.symbol]: Charlotte_Corday,
    [Berserker.Heracles.symbol]: Heracles,
    [Berserker.Lancelot.symbol]: Lancelot,
    [Berserker.Frankensteins_Monster.symbol]: Frankensteins_Monster,
    [Berserker.Jekyll_And_Hyde.symbol]: Jekyll_And_Hyde,
    [Berserker.Kiyohime.symbol]: Kiyohime,
    [Extra.Angra_Mainyu.symbol]: Angra_Mainyu,
};

export default imagesData;
