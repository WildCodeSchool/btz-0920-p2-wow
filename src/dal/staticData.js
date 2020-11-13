/**
 * Static arrays.
 * all arrays contains objects with id, name and slug
 * created on 27-10-2020
 */
export const searchTypes = [
  {
    id: 1,
    name: 'Guild',
    slug: 'guild',
  },
  {
    id: 2,
    name: 'Character',
    slug: 'character',
  },
];

/**
 * array of region
 */
export const regions = [
  {
    id: 1,
    name: 'United States & Oceania',
    slug: 'us',
  },
  {
    id: 2,
    name: 'Europe',
    slug: 'eu',
  },
  {
    id: 3,
    name: 'Korean',
    slug: 'kr',
  },
  {
    id: 4,
    name: 'Taiwan',
    slug: 'tw',
  },
];

/**
 * array of server
 */
export const server = [
  {
    id: 1,
    name: 'Server',
    slug: 'server',
  },
];

/**
 * array of factions
 */
export const factions = [
  {
    id: 1,
    name: 'Alliance',
    slug: 'alliance',
  },
  {
    id: 2,
    name: 'Horde',
    slug: 'horde',
  },
];

/**
 * array of classes and specs
 */
export const classesAndSpecs = [
  {
    id: 1,
    name: 'Death Knight',
    slug: 'death-knight',
    image:
      'https://static.wikia.nocookie.net/wowpedia/images/e/e5/Ui-charactercreate-classes_deathknight.png',
    specs: [
      {
        id: 1,
        name: 'Blood',
        slug: 'blood',
        image:
          'https://cdnassets.raider.io/images/classes/spec_death-knight_blood.png',
      },
      {
        id: 2,
        name: 'Frost',
        slug: 'frost',
        image:
          'https://cdnassets.raider.io/images/classes/spec_death-knight_frost.png',
      },
      {
        id: 3,
        name: 'Unholdy',
        slug: 'unholdy',
        image:
          'https://cdnassets.raider.io/images/classes/spec_death-knight_unholy.png',
      },
    ],
  },
  {
    id: 2,
    name: 'Demon Hunter',
    slug: 'demon-hunter',
    image:
      'https://static.wikia.nocookie.net/wowpedia/images/c/c9/Ui-charactercreate-classes_demonhunter.png',
    specs: [
      {
        id: 4,
        name: 'Havoc',
        slug: 'havoc',
        image:
          'https://cdnassets.raider.io/images/classes/spec_demon-hunter_havoc.png',
      },
      {
        id: 5,
        name: 'Vengeance',
        slug: 'vengeance',
        image:
          'https://cdnassets.raider.io/images/classes/spec_demon-hunter_vengeance.png',
      },
    ],
  },
  {
    id: 3,
    name: 'Druid',
    slug: 'druid',
    image:
      'https://static.wikia.nocookie.net/wowpedia/images/6/6f/Ui-charactercreate-classes_druid.png',
    specs: [
      {
        id: 6,
        name: 'Balance',
        slug: 'balance',
        image:
          'https://cdnassets.raider.io/images/classes/spec_druid_balance.png',
      },
      {
        id: 7,
        name: 'Guardian',
        slug: 'guardian',
        image:
          'https://cdnassets.raider.io/images/classes/spec_druid_guardian.png',
      },
      {
        id: 8,
        name: 'Restoration',
        slug: 'restoration',
        image:
          'https://cdnassets.raider.io/images/classes/spec_druid_restoration.png',
      },
    ],
  },
  {
    id: 4,
    name: 'Hunter',
    slug: 'hunter',
    image:
      'https://static.wikia.nocookie.net/wowpedia/images/4/4e/Ui-charactercreate-classes_hunter.png',
    specs: [
      {
        id: 9,
        name: 'Beast Mastery',
        slug: 'beastmastery',
        image:
          'https://cdnassets.raider.io/images/classes/spec_hunter_beast-mastery.png',
      },
      {
        id: 10,
        name: 'Marksmanship',
        slug: 'marksmanship',
        image:
          'https://cdnassets.raider.io/images/classes/spec_hunter_marksmanship.png',
      },
      {
        id: 11,
        name: 'Survival',
        slug: 'survival',
        image:
          'https://cdnassets.raider.io/images/classes/spec_hunter_survival.png',
      },
    ],
  },
  {
    id: 5,
    name: 'Mage',
    slug: 'mage',
    image:
      'https://static.wikia.nocookie.net/wowpedia/images/5/56/Ui-charactercreate-classes_mage.png',
    specs: [
      {
        id: 12,
        name: 'Arcade',
        slug: 'arcade',
        image:
          'https://cdnassets.raider.io/images/classes/spec_mage_arcade.png',
      },
      {
        id: 13,
        name: 'Fire',
        slug: 'fire',
        image: 'https://cdnassets.raider.io/images/classes/spec_mage_fire.png',
      },
      {
        id: 14,
        name: 'Frost',
        slug: 'frost',
        image: 'https://cdnassets.raider.io/images/classes/spec_mage_frost.png',
      },
    ],
  },
  {
    id: 6,
    name: 'Monk',
    slug: 'monk',
    image:
      'https://static.wikia.nocookie.net/wowpedia/images/2/24/Ui-charactercreate-classes_monk.png',
    specs: [
      {
        id: 15,
        name: 'Brewmaster',
        slug: 'brewmaster',
        image:
          'https://cdnassets.raider.io/images/classes/spec_monk_brewmaster.png',
      },
      {
        id: 16,
        name: 'Windwalker',
        slug: 'windwalker',
        image:
          'https://cdnassets.raider.io/images/classes/spec_monk_windwalker.png',
      },
      {
        id: 17,
        name: 'Mistweaver',
        slug: 'mistweaver',
        image:
          'https://cdnassets.raider.io/images/classes/spec_monk_mistweaver.png',
      },
    ],
  },
  {
    id: 7,
    name: 'Paladin',
    slug: 'paladin',
    image:
      'https://static.wikia.nocookie.net/wowpedia/images/8/80/Ui-charactercreate-classes_paladin.png',
    specs: [
      {
        id: 18,
        name: 'Holy',
        slug: 'holy',
        image:
          'https://cdnassets.raider.io/images/classes/spec_paladin_blood.png',
      },
      {
        id: 19,
        name: 'Protection',
        slug: 'protection',
        image:
          'https://cdnassets.raider.io/images/classes/spec_paladin_protection.png',
      },
      {
        id: 20,
        name: 'Retribution',
        slug: 'retribution',
        image:
          'https://cdnassets.raider.io/images/classes/spec_paladin_retribution.png',
      },
    ],
  },
  {
    id: 8,
    name: 'Priest',
    slug: 'priest',
    image:
      'https://static.wikia.nocookie.net/wowpedia/images/0/0f/Ui-charactercreate-classes_priest.png',
    specs: [
      {
        id: 21,
        name: 'Discipline',
        slug: 'discipline',
        image:
          'https://cdnassets.raider.io/images/classes/spec_priest_discipline.png',
      },
      {
        id: 22,
        name: 'Holy',
        slug: 'holy',
        image:
          'https://cdnassets.raider.io/images/classes/spec_priest_holy.png',
      },
      {
        id: 23,
        name: 'Shadow',
        slug: 'shadow',
        image:
          'https://cdnassets.raider.io/images/classes/spec_priest_shadow.png',
      },
    ],
  },
  {
    id: 9,
    name: 'Rogue',
    slug: 'rogue',
    image:
      'https://static.wikia.nocookie.net/wowpedia/images/b/b1/Ui-charactercreate-classes_rogue.png',
    specs: [
      {
        id: 24,
        name: 'Assassination',
        slug: 'assassination',
        image:
          'https://cdnassets.raider.io/images/classes/spec_rogue_assassination.png',
      },
      {
        id: 25,
        name: 'Outlaw',
        slug: 'outlaw',
        image:
          'https://cdnassets.raider.io/images/classes/spec_rogue_outlaw.png',
      },
      {
        id: 26,
        name: 'Subtlety',
        slug: 'subtlety',
        image:
          'https://cdnassets.raider.io/images/classes/spec_rogue_subtlety.png',
      },
    ],
  },
  {
    id: 10,
    name: 'Shaman',
    slug: 'shaman',
    image:
      'https://static.wikia.nocookie.net/wowpedia/images/3/3e/Ui-charactercreate-classes_shaman.png',
    specs: [
      {
        id: 27,
        name: 'Elemental',
        slug: 'elemental',
        image:
          'https://cdnassets.raider.io/images/classes/spec_shaman_elemental.png',
      },
      {
        id: 28,
        name: 'Enhancement',
        slug: 'enhancement',
        image:
          'https://cdnassets.raider.io/images/classes/spec_shaman_enhancement.png',
      },
      {
        id: 29,
        name: 'Restoration',
        slug: 'restoration',
        image:
          'https://cdnassets.raider.io/images/classes/spec_shaman_restoration.png',
      },
    ],
  },
  {
    id: 11,
    name: 'Warlock',
    slug: 'warlock',
    image:
      'https://static.wikia.nocookie.net/wowpedia/images/c/cf/Ui-charactercreate-classes_warlock.png',
    specs: [
      {
        id: 30,
        name: 'Affliction',
        slug: 'affliction',
        image:
          'https://cdnassets.raider.io/images/classes/spec_warlock_affliction.png',
      },
      {
        id: 31,
        name: 'Demonology',
        slug: 'demonology',
        image:
          'https://cdnassets.raider.io/images/classes/spec_warlock_demonology.png',
      },
      {
        id: 32,
        name: 'Destruction',
        slug: 'destruction',
        image:
          'https://cdnassets.raider.io/images/classes/spec_warlock_destruction.png',
      },
    ],
  },
  {
    id: 12,
    name: 'Warrior',
    slug: 'warrior',
    image:
      'https://static.wikia.nocookie.net/wowpedia/images/3/37/Ui-charactercreate-classes_warrior.png',
    specs: [
      {
        id: 33,
        name: 'Arms',
        slug: 'arms',
        image:
          'https://cdnassets.raider.io/images/classes/spec_warrior_arms.png',
      },
      {
        id: 34,
        name: 'Fury',
        slug: 'fury',
        image:
          'https://cdnassets.raider.io/images/classes/spec_warrior_fury.png',
      },
      {
        id: 35,
        name: 'Protection',
        slug: 'protection',
        image:
          'https://cdnassets.raider.io/images/classes/spec_warrior_protection.png',
      },
    ],
  },
];

/**
 * array of roles
 */
export const roles = [
  {
    id: 1,
    name: 'Tank',
    slug: 'tank',
    image:
      'https://cdnassets.raider.io/images/classes/spec_death-knight_blood.png',
  },
  {
    id: 1,
    name: 'DPS',
    slug: 'dps',
    image:
      'https://cdnassets.raider.io/images/classes/spec_death-knight_blood.png',
  },
  {
    id: 1,
    name: 'Healer',
    slug: 'healer',
    image:
      'https://cdnassets.raider.io/images/classes/spec_death-knight_blood.png',
  },
];

/**
 * array of raid difficulty
 */
export const raidDifficulty = [
  {
    id: 1,
    name: 'Mythic',
    slug: 'mythic',
  },
  {
    id: 2,
    name: 'Heroic',
    slug: 'heroic',
  },
  {
    id: 3,
    name: 'Normal',
    slug: 'normal',
  },
];

/**
 * array of raids (latest 10)
 */
export const raids = [
  {
    id: 1,
    name: "Ny'alotha, the Waking City",
    slug: 'nyalotha-the-waking-city',
    bossQty: 12,
  },
  {
    id: 2,
    name: 'The Eternal Palace',
    slug: 'the-eternal-palace',
    bossQty: 8,
  },
  {
    id: 3,
    name: 'Crucible of Storms',
    slug: 'crucible-of-storms',
    bossQty: 2,
  },
  {
    id: 4,
    name: "Battle of Dazar'alor",
    slug: 'battle-of-dazaralor',
    bossQty: 9,
  },
  {
    id: 5,
    name: 'Uldir',
    slug: 'uldir',
    bossQty: 8,
  },
  {
    id: 6,
    name: 'Antorus, the Burning Throne',
    slug: 'antorus-the-burning-throne',
    bossQty: 11,
  },
  {
    id: 7,
    name: 'Tomb of Sargeras',
    slug: 'tomb-of-sargeras',
    bossQty: 9,
  },
  {
    id: 8,
    name: 'The Nighthold',
    slug: 'the-nighthold',
    bossQty: 10,
  },
  {
    id: 9,
    name: 'Trial of Valor',
    slug: 'trial-of-valor',
    bossQty: 3,
  },
  {
    id: 10,
    name: 'The Emerald Nightmare',
    slug: 'the-emerald-nightmare',
    bossQty: 7,
  },
];

/**
 * array of seasons
 */
export const seasons = [
  {
    id: 1,
    name: '',
    slug: 'season-bfa-4-post',
  },
  {
    id: 2,
    name: '',
    slug: 'season-bfa-4',
  },
  {
    id: 3,
    name: '',
    slug: 'season-bfa-3-post',
  },
  {
    id: 4,
    name: '',
    slug: 'season-bfa-3',
  },
  {
    id: 5,
    name: '',
    slug: 'season-bfa-2-post',
  },
  {
    id: 6,
    name: '',
    slug: 'season-bfa-2',
  },
  {
    id: 7,
    name: '',
    slug: 'season-bfa-1',
  },
];
