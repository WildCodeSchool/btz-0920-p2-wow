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
      },
      {
        id: 2,
        name: 'Frost',
        slug: 'frost',
      },
      {
        id: 3,
        name: 'Unholdy',
        slug: 'unholdy',
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
      },
      {
        id: 5,
        name: 'Vengeance',
        slug: 'vengeance',
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
        name: 'Feral',
        slug: 'feral',
      },
      {
        id: 7,
        name: 'Guardian',
        slug: 'guardian',
      },
      {
        id: 8,
        name: 'Restoration',
        slug: 'restoration',
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
      },
      {
        id: 10,
        name: 'Marksmanship',
        slug: 'marksmanship',
      },
      {
        id: 11,
        name: 'Survival',
        slug: 'survival',
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
      },
      {
        id: 13,
        name: 'Fire',
        slug: 'fire',
      },
      {
        id: 14,
        name: 'Frost',
        slug: 'frost',
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
      },
      {
        id: 16,
        name: 'Windwalker',
        slug: 'windwalker',
      },
      {
        id: 17,
        name: 'Mistweaver',
        slug: 'mistweaver',
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
      },
      {
        id: 19,
        name: 'Protection',
        slug: 'protection',
      },
      {
        id: 20,
        name: 'Retribution',
        slug: 'retribution',
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
      },
      {
        id: 22,
        name: 'Holy',
        slug: 'holy',
      },
      {
        id: 23,
        name: 'Shadow',
        slug: 'shadow',
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
      },
      {
        id: 25,
        name: 'Outlaw',
        slug: 'outlaw',
      },
      {
        id: 26,
        name: 'Subtlety',
        slug: 'subtlety',
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
      },
      {
        id: 28,
        name: 'Enhancement',
        slug: 'enhancement',
      },
      {
        id: 29,
        name: 'Restoration',
        slug: 'restoration',
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
      },
      {
        id: 31,
        name: 'Demonology',
        slug: 'demonology',
      },
      {
        id: 32,
        name: 'Destruction',
        slug: 'destruction',
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
      },
      {
        id: 34,
        name: 'Fury',
        slug: 'fury',
      },
      {
        id: 35,
        name: 'Protection',
        slug: 'protection',
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
  },
  {
    id: 1,
    name: 'DPS',
    slug: 'dps',
  },
  {
    id: 1,
    name: 'Healer',
    slug: 'healer',
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
