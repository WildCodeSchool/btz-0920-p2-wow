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
        name: 'Unholy',
        slug: 'unholy',
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
      {
        id: 8,
        name: 'Feral',
        slug: 'feral',
        image:
          'https://cdnassets.raider.io/images/classes/spec_druid_feral.png',
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
        name: 'Arcane',
        slug: 'arcane',
        image:
          'https://cdnassets.raider.io/images/classes/spec_mage_arcane.png',
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
          'https://cdnassets.raider.io/images/classes/spec_paladin_holy.png',
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

export const basile =
  // 20201125141705
  // https://raider.io/api/characters/eu/hyjal/Raquette?season=season-bfa-4-post&tier=25

  {
    characterDetails: {
      character: {
        id: 17059539,
        persona_id: 12699712,
        name: 'Raquette',
        class: {
          id: 4,
          name: 'Rogue',
          slug: 'rogue',
        },
        race: {
          id: 29,
          name: 'Void Elf',
          slug: 'void-elf',
          faction: 'alliance',
        },
        faction: 'alliance',
        level: 50,
        spec: {
          name: 'Subtlety',
          slug: 'subtlety',
        },
        path: '/characters/eu/hyjal/Raquette',
        realm: {
          id: 625,
          connectedRealmId: 335,
          name: 'Hyjal',
          altName: null,
          slug: 'hyjal',
          altSlug: 'hyjal',
          locale: 'fr_FR',
          isConnected: false,
        },
        region: {
          name: 'French',
          slug: 'eu',
          short_name: 'FR',
        },
        gender: 'female',
        achievementPoints: 9735,
        honorableKills: 0,
        itemLevelEquipped: 129,
        itemLevelTotal: 0,
        thumbnailUrl:
          '//render-eu.worldofwarcraft.com/character/hyjal/11/163290891-avatar.jpg?alt=wow/static/images/2d/avatar/29-1.jpg',
        guild: {
          id: 1080066,
          name: 'Augure',
          faction: 'alliance',
          realm: {
            id: 625,
            connectedRealmId: 335,
            name: 'Hyjal',
            altName: null,
            slug: 'hyjal',
            altSlug: 'hyjal',
            locale: 'fr_FR',
            isConnected: false,
          },
          region: {
            name: 'French',
            slug: 'eu',
            short_name: 'FR',
          },
          path: '/guilds/eu/hyjal/Augure',
        },
        talents: '0010221',
        talentsDetails: [
          {
            specId: 261,
            icon: 'ability_ironmaidens_bladerush',
            spellId: 193537,
            classId: 4,
            tierId: 0,
            columnId: 0,
          },
          {
            specId: 0,
            icon: 'ability_stealth',
            spellId: 14062,
            classId: 4,
            tierId: 1,
            columnId: 0,
          },
          {
            specId: 0,
            icon: 'archaeology_5_0_changkiboard',
            spellId: 193531,
            classId: 4,
            tierId: 2,
            columnId: 1,
          },
          {
            specId: 261,
            icon: 'spell_shadow_twilight',
            spellId: 200759,
            classId: 4,
            tierId: 3,
            columnId: 0,
          },
          {
            specId: 0,
            icon: 'ability_rogue_preyontheweak',
            spellId: 131511,
            classId: 4,
            tierId: 4,
            columnId: 2,
          },
          {
            specId: 261,
            icon: 'ability_rogue_envelopingshadows',
            spellId: 238104,
            classId: 4,
            tierId: 5,
            columnId: 2,
          },
          {
            specId: 261,
            icon: 'ability_rogue_sinistercalling',
            spellId: 280719,
            classId: 4,
            tierId: 6,
            columnId: 1,
          },
        ],
      },
      team: null,
      characterCustomizations: {
        profile_banner: 'classbanner_priest1',
        profile_frame: null,
        biography: null,
        main_character: null,
        bnet_battletag: null,
        twitch_profile: '',
        youtube_profile: '',
        twitter_profile: '',
        discord_profile: '',
        wowhead_profile: '',
        isClaimed: true,
      },
      patronLevel: null,
      meta: {
        firstCrawledAt: '2018-06-04T18:41:59.000Z',
        lastCrawledAt: '2020-11-23T07:51:01.000Z',
        loggedOutAt: '2020-11-23T00:14:02.000Z',
        missingAt: null,
      },
      newsArticle: null,
      user: {},
      raidProgress: [
        {
          raid: 'nyalotha-the-waking-city',
          aotc: '2020-01-30T21:49:51.000Z',
          cuttingEdge: '2020-06-28T20:09:29.000Z',
          encountersDefeated: {
            normal: [
              {
                slug: 'wrathion-the-black-emperor',
                firstDefeated: '2020-01-26T21:04:55.000Z',
                itemLevel: 0,
                artifactTraits: 5315301,
                numKills: 2,
                lastDefeated: '2020-07-15T08:21:56.000Z',
              },
              {
                slug: 'maut',
                firstDefeated: '2020-01-26T21:24:28.000Z',
                itemLevel: 0,
                artifactTraits: 5315301,
                numKills: 1,
                lastDefeated: '2020-01-26T21:24:28.000Z',
              },
              {
                slug: 'the-prophet-skitra',
                firstDefeated: '2020-01-26T21:14:09.000Z',
                itemLevel: 0,
                artifactTraits: 5315301,
                numKills: 1,
                lastDefeated: '2020-01-26T21:14:09.000Z',
              },
              {
                slug: 'dark-inquisitor-xanesh',
                firstDefeated: '2020-01-26T21:43:16.000Z',
                itemLevel: 0,
                artifactTraits: 5315301,
                numKills: 1,
                lastDefeated: '2020-01-26T21:43:16.000Z',
              },
              {
                slug: 'the-hivemind',
                firstDefeated: '2020-01-26T22:02:45.000Z',
                itemLevel: 0,
                artifactTraits: 5315301,
                numKills: 1,
                lastDefeated: '2020-01-26T22:02:45.000Z',
              },
              {
                slug: 'shadhar-the-insatiable',
                firstDefeated: '2020-01-26T22:28:02.000Z',
                itemLevel: 0,
                artifactTraits: 5264601,
                numKills: 2,
                lastDefeated: '2020-02-26T17:52:25.000Z',
              },
              {
                slug: 'drestagath',
                firstDefeated: '2020-01-26T22:36:54.000Z',
                itemLevel: 0,
                artifactTraits: 5264601,
                numKills: 2,
                lastDefeated: '2020-02-26T18:05:42.000Z',
              },
              {
                slug: 'ilgynoth-corruption-reborn',
                firstDefeated: '2020-01-26T22:53:12.000Z',
                itemLevel: 0,
                artifactTraits: 5315301,
                numKills: 1,
                lastDefeated: '2020-01-26T22:53:12.000Z',
              },
              {
                slug: 'vexiona',
                firstDefeated: '2020-01-26T21:53:35.000Z',
                itemLevel: 0,
                artifactTraits: 5315301,
                numKills: 1,
                lastDefeated: '2020-01-26T21:53:35.000Z',
              },
              {
                slug: 'ra-den-the-despoiled',
                firstDefeated: '2020-01-26T22:12:54.000Z',
                itemLevel: 0,
                artifactTraits: 5315301,
                numKills: 1,
                lastDefeated: '2020-01-26T22:12:54.000Z',
              },
              {
                slug: 'carapace-of-nzoth',
                firstDefeated: '2020-01-27T20:16:57.000Z',
                itemLevel: 0,
                artifactTraits: 5315301,
                numKills: 2,
                lastDefeated: '2020-07-15T08:40:42.000Z',
              },
              {
                slug: 'nzoth-the-corruptor',
                firstDefeated: '2020-01-27T21:18:41.000Z',
                itemLevel: 0,
                artifactTraits: 5315301,
                numKills: 2,
                lastDefeated: '2020-07-15T08:52:04.000Z',
              },
            ],
            heroic: [
              {
                slug: 'wrathion-the-black-emperor',
                firstDefeated: '2020-01-22T20:10:11.000Z',
                itemLevel: 0,
                artifactTraits: 4800151,
                numKills: 6,
                lastDefeated: '2020-03-15T20:12:34.000Z',
              },
              {
                slug: 'maut',
                firstDefeated: '2020-01-22T21:04:36.000Z',
                itemLevel: 0,
                artifactTraits: 4800151,
                numKills: 6,
                lastDefeated: '2020-03-15T20:32:22.000Z',
              },
              {
                slug: 'the-prophet-skitra',
                firstDefeated: '2020-01-22T20:37:54.000Z',
                itemLevel: 0,
                artifactTraits: 4800151,
                numKills: 5,
                lastDefeated: '2020-03-15T20:21:34.000Z',
              },
              {
                slug: 'dark-inquisitor-xanesh',
                firstDefeated: '2020-01-22T22:02:42.000Z',
                itemLevel: 0,
                artifactTraits: 4800151,
                numKills: 5,
                lastDefeated: '2020-03-15T20:48:25.000Z',
              },
              {
                slug: 'the-hivemind',
                firstDefeated: '2020-01-22T22:29:33.000Z',
                itemLevel: 0,
                artifactTraits: 4800151,
                numKills: 5,
                lastDefeated: '2020-03-15T21:49:18.000Z',
              },
              {
                slug: 'shadhar-the-insatiable',
                firstDefeated: '2020-01-23T21:58:22.000Z',
                itemLevel: 0,
                artifactTraits: 4800151,
                numKills: 7,
                lastDefeated: '2020-03-15T21:05:58.000Z',
              },
              {
                slug: 'drestagath',
                firstDefeated: '2020-01-26T20:56:02.000Z',
                itemLevel: 0,
                artifactTraits: 4800151,
                numKills: 9,
                lastDefeated: '2020-04-06T10:09:55.000Z',
              },
              {
                slug: 'ilgynoth-corruption-reborn',
                firstDefeated: '2020-01-27T22:49:47.000Z',
                itemLevel: 0,
                artifactTraits: 4800151,
                numKills: 5,
                lastDefeated: '2020-03-15T21:38:17.000Z',
              },
              {
                slug: 'vexiona',
                firstDefeated: '2020-01-23T21:38:50.000Z',
                itemLevel: 0,
                artifactTraits: 4800151,
                numKills: 5,
                lastDefeated: '2020-03-15T20:56:39.000Z',
              },
              {
                slug: 'ra-den-the-despoiled',
                firstDefeated: '2020-01-26T20:30:34.000Z',
                itemLevel: 0,
                artifactTraits: 4800151,
                numKills: 5,
                lastDefeated: '2020-03-15T21:58:12.000Z',
              },
              {
                slug: 'carapace-of-nzoth',
                firstDefeated: '2020-01-30T20:39:23.000Z',
                itemLevel: 0,
                artifactTraits: 4991186,
                numKills: 8,
                lastDefeated: '2020-04-24T18:50:35.000Z',
              },
              {
                slug: 'nzoth-the-corruptor',
                firstDefeated: '2020-01-30T21:49:51.000Z',
                itemLevel: 0,
                artifactTraits: 5072860,
                numKills: 9,
                lastDefeated: '2020-04-24T19:12:26.000Z',
              },
            ],
            mythic: [
              {
                slug: 'wrathion-the-black-emperor',
                firstDefeated: '2020-02-02T20:51:00.000Z',
                itemLevel: 0,
                artifactTraits: 4934663,
                numKills: 19,
                lastDefeated: '2020-11-04T20:08:12.000Z',
              },
              {
                slug: 'maut',
                firstDefeated: '2020-02-09T21:14:00.000Z',
                itemLevel: 0,
                artifactTraits: 5111912,
                numKills: 10,
                lastDefeated: '2020-11-04T20:25:46.000Z',
              },
              {
                slug: 'the-prophet-skitra',
                firstDefeated: '2020-02-02T21:21:00.000Z',
                itemLevel: 0,
                artifactTraits: 4934663,
                numKills: 12,
                lastDefeated: '2020-11-04T20:15:14.000Z',
              },
              {
                slug: 'dark-inquisitor-xanesh',
                firstDefeated: '2020-03-11T20:56:00.000Z',
                itemLevel: 0,
                artifactTraits: 5378328,
                numKills: 5,
                lastDefeated: '2020-11-08T20:39:23.000Z',
              },
              {
                slug: 'the-hivemind',
                firstDefeated: '2020-02-27T21:05:00.000Z',
                itemLevel: 0,
                artifactTraits: 5315301,
                numKills: 9,
                lastDefeated: '2020-11-08T21:16:11.000Z',
              },
              {
                slug: 'shadhar-the-insatiable',
                firstDefeated: '2020-02-19T21:48:00.000Z',
                itemLevel: 0,
                artifactTraits: 5315301,
                numKills: 7,
                lastDefeated: '2020-11-08T21:44:39.000Z',
              },
              {
                slug: 'drestagath',
                firstDefeated: '2020-04-09T20:16:34.000Z',
                itemLevel: 0,
                artifactTraits: 5552858,
                numKills: 5,
                lastDefeated: '2020-11-08T21:38:09.000Z',
              },
              {
                slug: 'ilgynoth-corruption-reborn',
                firstDefeated: '2020-07-19T19:52:49.000Z',
                itemLevel: 0,
                artifactTraits: 5957726,
                numKills: 4,
                lastDefeated: '2020-11-08T21:57:24.000Z',
              },
              {
                slug: 'vexiona',
                firstDefeated: '2020-03-29T20:21:09.000Z',
                itemLevel: 0,
                artifactTraits: 5481968,
                numKills: 4,
                lastDefeated: '2020-11-08T21:09:00.000Z',
              },
              {
                slug: 'ra-den-the-despoiled',
                firstDefeated: '2020-07-16T20:09:36.000Z',
                itemLevel: 0,
                artifactTraits: 5943752,
                numKills: 6,
                lastDefeated: '2020-11-08T21:26:21.000Z',
              },
              {
                slug: 'carapace-of-nzoth',
                firstDefeated: '2020-05-13T20:11:55.000Z',
                itemLevel: 0,
                artifactTraits: 5775395,
                numKills: 14,
                lastDefeated: '2020-11-04T21:09:17.000Z',
              },
              {
                slug: 'nzoth-the-corruptor',
                firstDefeated: '2020-06-28T20:09:29.000Z',
                itemLevel: 0,
                artifactTraits: 5920499,
                numKills: 15,
                lastDefeated: '2020-11-08T20:29:32.000Z',
              },
            ],
          },
        },
      ],
      itemDetails: {
        item_level_equipped: 129,
        item_level_total: 0,
        artifact_traits: 92.6457160296025,
        corruption: {
          added: 67,
          resisted: 135,
          total: 0,
          cloakRank: 15,
          spells: [
            {
              id: 315590,
              name: 'Siphoner',
              icon: 'spell_shadow_lifedrain02_purple',
              school: 0,
              rank: null,
            },
            {
              id: 318272,
              name: 'Gushing Wound',
              icon: 'ability_ironmaidens_corruptedblood',
              school: 5,
              rank: null,
            },
            {
              id: 315546,
              name: 'Expedient',
              icon: 'ability_mage_netherwindpresence',
              school: 0,
              rank: null,
            },
            {
              id: 318272,
              name: 'Gushing Wound',
              icon: 'ability_ironmaidens_corruptedblood',
              school: 5,
              rank: null,
            },
          ],
        },
        items: {
          head: {
            item_id: 174132,
            item_level: 135,
            item_quality: 4,
            icon: 'inv_helm_leatherraidnzoth_d_01',
            is_legion_legendary: false,
            is_azerite_armor: true,
            azerite_powers: [
              {
                id: 13,
                spell: {
                  id: 263978,
                  name: 'Azerite Empowered',
                  icon: 'inv_smallazeriteshard',
                  school: 0,
                  rank: null,
                },
                tier: 999,
              },
              {
                id: 83,
                spell: {
                  id: 268437,
                  name: 'Impassive Visage',
                  icon: 'inv_pet_inquisitoreye',
                  school: 0,
                  rank: null,
                },
                tier: 1,
              },
              {
                id: 18,
                spell: {
                  id: 264108,
                  name: 'Blood Siphon',
                  icon: 'ability_deathknight_deathsiphon2',
                  school: 0,
                  rank: null,
                },
                tier: 2,
              },
              {
                id: 582,
                spell: {
                  id: 317137,
                  name: 'Heart of Darkness',
                  icon: 'inv_heart_of_the_thunderking_icon',
                  school: 5,
                  rank: null,
                },
                tier: 3,
              },
              {
                id: 413,
                spell: {
                  id: 278681,
                  name: 'The First Dance',
                  icon: 'ability_rogue_shadowdance',
                  school: 0,
                  rank: null,
                },
                tier: 3,
              },
            ],
            corruption: {
              added: 0,
              resisted: 0,
              total: 0,
            },
            gems: [],
            bonuses: [4824, 1517, 4786, 6511],
          },
          neck: {
            item_id: 158075,
            item_level: 146,
            item_quality: 6,
            icon: 'inv_heartofazeroth',
            is_legion_legendary: false,
            is_azerite_armor: false,
            azerite_powers: [],
            heart_of_azeroth: {
              essences: [
                {
                  slot: 0,
                  id: 23,
                  rank: 3,
                  power: {
                    id: 85,
                    essence: {
                      id: 23,
                      name: 'Blood of the Enemy',
                      shortName: 'Blood of the Enemy',
                      description: 'Your Heart of Azeroth seethes with anger',
                    },
                    tierId: 3,
                    majorPowerSpell: {
                      id: 298277,
                      name: 'Blood of the Enemy',
                      icon: 'inv_azeriteexplosion',
                      school: 0,
                      rank: null,
                    },
                    minorPowerSpell: {
                      id: 298275,
                      name: 'Blood-Soaked',
                      icon: 'inv_azeriteexplosion',
                      school: 0,
                      rank: null,
                    },
                  },
                },
                {
                  slot: 1,
                  id: 27,
                  rank: 3,
                  power: {
                    id: 104,
                    essence: {
                      id: 27,
                      name: 'Memory of Lucid Dreams',
                      shortName: 'Memory of Lucid Dreams',
                      description: 'An empty mind is a wasted tool.',
                    },
                    tierId: 3,
                    majorPowerSpell: {
                      id: 299374,
                      name: 'Memory of Lucid Dreams',
                      icon: 'spell_azerite_essence05',
                      school: 0,
                      rank: 'Azerite Essence',
                    },
                    minorPowerSpell: {
                      id: 299373,
                      name: 'Lucid Dreams',
                      icon: 'spell_azerite_essence05',
                      school: 0,
                      rank: null,
                    },
                  },
                },
                {
                  slot: 2,
                  id: 32,
                  rank: 3,
                  power: {
                    id: 123,
                    essence: {
                      id: 32,
                      name: 'Conflict and Strife',
                      shortName: 'Conflict and Strife',
                      description: '',
                    },
                    tierId: 3,
                    majorPowerSpell: {
                      id: 304121,
                      name: 'Conflict',
                      icon: 'spell_azerite_essence_17',
                      school: 0,
                      rank: 'Azerite Essence',
                    },
                    minorPowerSpell: {
                      id: 304123,
                      name: 'Strife',
                      icon: 'spell_azerite_essence_17',
                      school: 0,
                      rank: 'Azerite Essence',
                    },
                  },
                },
                {
                  slot: 3,
                  id: 35,
                  rank: 3,
                  power: {
                    id: 135,
                    essence: {
                      id: 35,
                      name: 'Breath of the Dying',
                      shortName: 'Breath of the Dying',
                      description: '',
                    },
                    tierId: 3,
                    majorPowerSpell: {
                      id: 311195,
                      name: 'Reaping Flames',
                      icon: 'ability_essence_reapingflames',
                      school: 0,
                      rank: 'Azerite Essence',
                    },
                    minorPowerSpell: {
                      id: 311198,
                      name: 'Lethal Strikes',
                      icon: 'ability_essence_reapingflames',
                      school: 0,
                      rank: 'Azerite Essence',
                    },
                  },
                },
              ],
              level: 92,
              progress: 0.6457160296025025,
            },
            corruption: {
              added: 0,
              resisted: 10,
              total: 0,
            },
            gems: [],
            bonuses: [6316, 4932, 4933],
          },
          shoulder: {
            item_id: 174133,
            item_level: 145,
            item_quality: 4,
            icon: 'inv_shoulder_leatherraidnzoth_d_01',
            is_legion_legendary: false,
            is_azerite_armor: true,
            azerite_powers: [
              {
                id: 13,
                spell: {
                  id: 263978,
                  name: 'Azerite Empowered',
                  icon: 'inv_smallazeriteshard',
                  school: 0,
                  rank: null,
                },
                tier: 999,
              },
              {
                id: 85,
                spell: {
                  id: 268596,
                  name: 'Gemhide',
                  icon: 'inv_jewelcrafting_argusgemcut_yellow_miscicons',
                  school: 0,
                  rank: null,
                },
                tier: 1,
              },
              {
                id: 21,
                spell: {
                  id: 263984,
                  name: 'Elemental Whirl',
                  icon: 'ability_skyreach_four_wind',
                  school: 0,
                  rank: null,
                },
                tier: 2,
              },
              {
                id: 582,
                spell: {
                  id: 317137,
                  name: 'Heart of Darkness',
                  icon: 'inv_heart_of_the_thunderking_icon',
                  school: 5,
                  rank: null,
                },
                tier: 3,
              },
              {
                id: 414,
                spell: {
                  id: 278683,
                  name: 'Inevitability',
                  icon: 'spell_shadow_rune',
                  school: 0,
                  rank: null,
                },
                tier: 3,
              },
            ],
            corruption: {
              added: 0,
              resisted: 0,
              total: 0,
            },
            gems: [],
            bonuses: [4824, 1517, 4786, 6512],
          },
          back: {
            item_id: 169223,
            item_level: 155,
            item_quality: 5,
            icon: 'inv_misc_cape_deathwingraid_d_03',
            is_legion_legendary: false,
            is_azerite_armor: false,
            azerite_powers: [],
            corruption: {
              added: 0,
              resisted: 125,
              total: 0,
              cloakRank: 15,
            },
            gems: [],
            bonuses: [6603, 1472],
          },
          chest: {
            item_id: 174136,
            item_level: 145,
            item_quality: 4,
            icon: 'inv_chest_leatherraidnzoth_d_01',
            is_legion_legendary: false,
            is_azerite_armor: true,
            azerite_powers: [
              {
                id: 13,
                spell: {
                  id: 263978,
                  name: 'Azerite Empowered',
                  icon: 'inv_smallazeriteshard',
                  school: 0,
                  rank: null,
                },
                tier: 999,
              },
              {
                id: 85,
                spell: {
                  id: 268596,
                  name: 'Gemhide',
                  icon: 'inv_jewelcrafting_argusgemcut_yellow_miscicons',
                  school: 0,
                  rank: null,
                },
                tier: 1,
              },
              {
                id: 21,
                spell: {
                  id: 263984,
                  name: 'Elemental Whirl',
                  icon: 'ability_skyreach_four_wind',
                  school: 0,
                  rank: null,
                },
                tier: 2,
              },
              {
                id: 582,
                spell: {
                  id: 317137,
                  name: 'Heart of Darkness',
                  icon: 'inv_heart_of_the_thunderking_icon',
                  school: 5,
                  rank: null,
                },
                tier: 3,
              },
              {
                id: 240,
                spell: {
                  id: 275896,
                  name: 'Blade In The Shadows',
                  icon: 'ability_rogue_shadowstrike',
                  school: 0,
                  rank: null,
                },
                tier: 3,
              },
            ],
            corruption: {
              added: 0,
              resisted: 0,
              total: 0,
            },
            gems: [],
            bonuses: [4824, 1517, 4786, 6510],
          },
          waist: {
            item_id: 159341,
            item_level: 115,
            item_quality: 4,
            enchant: 5967,
            icon: 'inv_belt_leather_kultirasdungeon_c_01',
            is_legion_legendary: false,
            is_azerite_armor: false,
            azerite_powers: [],
            corruption: {
              added: 0,
              resisted: 0,
              total: 0,
            },
            gems: [168642],
            bonuses: [6530, 4802, 6516, 6513, 1528, 4786],
          },
          wrist: {
            item_id: 173472,
            item_level: 120,
            item_quality: 4,
            icon: 'inv_bracer_leatherraidnzoth_d_01',
            is_legion_legendary: false,
            is_azerite_armor: false,
            azerite_powers: [],
            corruption: {
              added: 17,
              resisted: 0,
              total: 17,
            },
            gems: [168642],
            bonuses: [6412, 4802, 6515, 6578, 6579, 6493, 6612, 1514, 4786],
          },
          hands: {
            item_id: 174137,
            item_level: 130,
            item_quality: 4,
            icon: 'inv_glove_leatherraidnzoth_d_01',
            is_legion_legendary: false,
            is_azerite_armor: false,
            azerite_powers: [],
            corruption: {
              added: 0,
              resisted: 0,
              total: 0,
            },
            gems: [],
            bonuses: [4824, 6516, 6515, 1517, 4786],
          },
          legs: {
            item_id: 174139,
            item_level: 130,
            item_quality: 4,
            icon: 'inv_pant_leatherraidnzoth_d_01',
            is_legion_legendary: false,
            is_azerite_armor: false,
            azerite_powers: [],
            corruption: {
              added: 0,
              resisted: 0,
              total: 0,
            },
            gems: [168642],
            bonuses: [4824, 1808, 6516, 6513, 1517, 4786],
          },
          feet: {
            item_id: 170434,
            item_level: 125,
            item_quality: 4,
            icon: 'inv_boot_leatherraidnzothmythic_d_01',
            is_legion_legendary: false,
            is_azerite_armor: false,
            azerite_powers: [],
            corruption: {
              added: 15,
              resisted: 0,
              total: 15,
            },
            gems: [168642],
            bonuses: [1715, 6573],
          },
          finger1: {
            item_id: 159460,
            item_level: 120,
            item_quality: 4,
            enchant: 6111,
            icon: 'inv_ring_80_01d',
            is_legion_legendary: false,
            is_azerite_armor: false,
            azerite_powers: [],
            corruption: {
              added: 0,
              resisted: 0,
              total: 0,
            },
            gems: [],
            bonuses: [6536, 6578, 6515, 1533, 4786, 6516],
          },
          finger2: {
            item_id: 174531,
            item_level: 130,
            item_quality: 4,
            enchant: 6111,
            icon: 'inv_70_pvp_ring2c',
            is_legion_legendary: false,
            is_azerite_armor: false,
            azerite_powers: [],
            corruption: {
              added: 0,
              resisted: 0,
              total: 0,
            },
            gems: [],
            bonuses: [4824, 6516, 6513, 1517, 4786],
          },
          trinket1: {
            item_id: 173946,
            item_level: 130,
            item_quality: 4,
            icon: 'achievement_boss_heraldvolazj',
            is_legion_legendary: false,
            is_azerite_armor: false,
            azerite_powers: [],
            corruption: {
              added: 0,
              resisted: 0,
              total: 0,
            },
            gems: [],
            bonuses: [4824, 6515, 1517, 4786],
          },
          trinket2: {
            item_id: 184058,
            item_level: 68,
            item_quality: 3,
            icon: 'ability_pvp_gladiatormedallion',
            is_legion_legendary: false,
            is_azerite_armor: false,
            azerite_powers: [],
            corruption: {
              added: 0,
              resisted: 0,
              total: 0,
            },
            gems: [],
            bonuses: [6513, 3122, 4785],
          },
          mainhand: {
            item_id: 172227,
            item_level: 140,
            item_quality: 4,
            enchant: 6148,
            icon: 'inv_knife_1h_nzothraid_d_02',
            is_legion_legendary: false,
            is_azerite_armor: false,
            azerite_powers: [],
            corruption: {
              added: 20,
              resisted: 0,
              total: 20,
            },
            gems: [],
            bonuses: [4824, 6578, 1517, 4786, 6513, 6476, 6470],
          },
          offhand: {
            item_id: 159135,
            item_level: 130,
            item_quality: 4,
            enchant: 5962,
            icon: 'inv_knife_1h_battledungeon_c_01',
            is_legion_legendary: false,
            is_azerite_armor: false,
            azerite_powers: [],
            corruption: {
              added: 15,
              resisted: 0,
              total: 15,
            },
            gems: [168637],
            bonuses: [6536, 4802, 6578, 6513, 1543, 4786, 6573],
          },
        },
      },
      seasonName: 'BFA Post-Season 4',
      mythicPlusScores: {
        all: {
          score: 217.9473722814063,
          scoreColor: '#ffffff',
          runs: [
            {
              zoneId: 9391,
              keystoneRunId: 176730,
              mythicLevel: 18,
              clearTimeMs: 1586635,
              score: 217.9473722814063,
            },
          ],
          rawRuns: [
            {
              id: 176730,
              region_id: 3,
              realm_id: 546,
              keystone_team_id: 84540524,
              keystone_platoon_id: null,
              zone_id: 9391,
              faction: 'alliance',
              mythic_level: 18,
              clear_time_ms: 1586635,
              par_time_ms: 1980999,
              period: 772,
              completed_at: '2020-10-17T15:58:05.000Z',
              affix_0_id: 10,
              affix_1_id: 8,
              affix_2_id: 14,
              affix_3_id: 120,
              created_at: '2020-10-17T16:10:28.000Z',
              updated_at: '2020-10-17T16:10:30.000Z',
              deleted_at: null,
              keystoneTeamId: 84540524,
              keystonePlatoonId: null,
            },
          ],
        },
        dps: {
          score: 217.9473722814063,
          scoreColor: '#ffffff',
          runs: [
            {
              zoneId: 9391,
              keystoneRunId: 176730,
              mythicLevel: 18,
              clearTimeMs: 1586635,
              score: 217.9473722814063,
            },
          ],
          rawRuns: [
            {
              id: 176730,
              region_id: 3,
              realm_id: 546,
              keystone_team_id: 84540524,
              keystone_platoon_id: null,
              zone_id: 9391,
              faction: 'alliance',
              mythic_level: 18,
              clear_time_ms: 1586635,
              par_time_ms: 1980999,
              period: 772,
              completed_at: '2020-10-17T15:58:05.000Z',
              affix_0_id: 10,
              affix_1_id: 8,
              affix_2_id: 14,
              affix_3_id: 120,
              created_at: '2020-10-17T16:10:28.000Z',
              updated_at: '2020-10-17T16:10:30.000Z',
              deleted_at: null,
              keystoneTeamId: 84540524,
              keystonePlatoonId: null,
            },
          ],
        },
        healer: {
          score: 0,
          scoreColor: '#ffffff',
          runs: [],
          rawRuns: [],
        },
        tank: {
          score: 0,
          scoreColor: '#ffffff',
          runs: [],
          rawRuns: [],
        },
        spec_0: {
          score: 0,
          scoreColor: '#ffffff',
          runs: [],
          rawRuns: [],
        },
        spec_1: {
          score: 0,
          scoreColor: '#ffffff',
          runs: [],
          rawRuns: [],
        },
        spec_2: {
          score: 217.9473722814063,
          scoreColor: '#ffffff',
          runs: [
            {
              zoneId: 9391,
              keystoneRunId: 176730,
              mythicLevel: 18,
              clearTimeMs: 1586635,
              score: 217.9473722814063,
            },
          ],
          rawRuns: [
            {
              id: 176730,
              region_id: 3,
              realm_id: 546,
              keystone_team_id: 84540524,
              keystone_platoon_id: null,
              zone_id: 9391,
              faction: 'alliance',
              mythic_level: 18,
              clear_time_ms: 1586635,
              par_time_ms: 1980999,
              period: 772,
              completed_at: '2020-10-17T15:58:05.000Z',
              affix_0_id: 10,
              affix_1_id: 8,
              affix_2_id: 14,
              affix_3_id: 120,
              created_at: '2020-10-17T16:10:28.000Z',
              updated_at: '2020-10-17T16:10:30.000Z',
              deleted_at: null,
              keystoneTeamId: 84540524,
              keystonePlatoonId: null,
            },
          ],
        },
        spec_3: {
          score: 0,
          scoreColor: '#ffffff',
          runs: [],
          rawRuns: [],
        },
      },
      bestMythicPlusScore: {
        score: 2644.67,
        scoreColor: '#b53bdb',
        season: {
          slug: 'season-bfa-4',
          name: 'BFA Season 4',
        },
      },
      bestMythicPlusTeamScore: null,
      keystoneAggregateStats: [
        {
          level: 15,
          count: 1,
        },
      ],
      previousMythicPlusScore: {
        score: 2644.67,
        scoreColor: '#b53bdb',
        season: {
          slug: 'season-bfa-4',
          name: 'BFA Season 4',
        },
      },
      mythicPlusRanks: {
        overall: {
          world: 776095,
          region: 445743,
          realm: 18681,
        },
        class: {
          world: 45176,
          region: 26115,
          realm: 1077,
        },
        faction_overall: {
          world: 280220,
          region: 156065,
          realm: 4319,
        },
        faction_class: {
          world: 15264,
          region: 8531,
          realm: 212,
        },
        dps: {
          world: 523313,
          region: 299598,
          realm: 12387,
        },
        class_dps: {
          world: 45176,
          region: 26115,
          realm: 1077,
        },
        faction_dps: {
          world: 188659,
          region: 104883,
          realm: 2825,
        },
        faction_class_dps: {
          world: 15264,
          region: 8531,
          realm: 212,
        },
        spec_259: {
          world: 0,
          region: 0,
          realm: 0,
        },
        faction_spec_259: {
          world: 0,
          region: 0,
          realm: 0,
        },
        spec_260: {
          world: 0,
          region: 0,
          realm: 0,
        },
        faction_spec_260: {
          world: 0,
          region: 0,
          realm: 0,
        },
        spec_261: {
          world: 17129,
          region: 10127,
          realm: 480,
        },
        faction_spec_261: {
          world: 5493,
          region: 3158,
          realm: 86,
        },
      },
      season: 'season-bfa-4-post',
      tier: 25,
      isMissingPersonaFields: false,
      isTournamentProfile: false,
    },
  };
