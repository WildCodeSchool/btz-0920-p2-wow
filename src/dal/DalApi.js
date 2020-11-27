import axios from 'axios';
import {
  regions,
  factions,
  classesAndSpecs,
  roles,
  raidDifficulty,
  raids,
  seasons,
  basile,
} from './staticData';

// const TIPS_BASILE = 'https://cors-proxy.htmldriven.com/?url=';
// const TIPS_BASILE = 'https://thingproxy.freeboard.io/fetch/';
const TIPS_BASILE = 'https://cors-anywhere.herokuapp.com/';

const GUILD = 'https://raider.io/api/guilds/';
const INSTANCE_RANKING = 'https://raider.io/api/raids/instance-rankings?';
const MYTHIC_PLUS_RANKING_CHARACTER =
  'https://raider.io/api/mythic-plus/rankings/characters?';
const CHARACTER_DETAILS = 'https://raider.io/api/v1/characters/profile?';
const REALM = 'https://raider.io/api/connected-realms?';
class DalApi {
  /**
   * description: return an array of all 4 regions with id, name and request slug
   */
  static getRegions() {
    return regions;
  }

  /**
   *
   * @param {string} name
   */
  static getRegionByName(name) {
    return this.getRegions().filter((n) => n.name === name)[0];
  }

  /**
   * description: return an array of all 2 factions with id, name and request slug
   */
  static getFactions() {
    return factions;
  }

  /**
   * description: return an array of all 12 factions with id, name, request slug and specs object for each of them
   * spec object contain id, name and request slug
   */
  static getClassesAndSpecs() {
    return classesAndSpecs;
  }

  static getClassesAndSpecsBySlug(slug) {
    return slug
      ? DalApi.getClassesAndSpecs().filter((c) => c.slug === slug)[0]
      : null;
  }

  static getClassesAndSpecsByName(name) {
    return name
      ? DalApi.getClassesAndSpecs().filter((c) => c.name === name)[0]
      : null;
  }

  /**
   * description: return an array of all 3 roles with id, name and request slug
   */
  static getRoles() {
    return roles;
  }

  /**
   * description: return an array of all 3 raid difficulty with id, name and request slug
   */
  static getDifficulty() {
    return raidDifficulty;
  }

  /**
   * description: return an array of 10 latest raids with id, name and request slug
   */
  static getRaids() {
    return raids;
  }

  /**
   *
   * @param {string} slug Slug of the raid to find
   * @returns an object raid or null
   */
  static getRaidBySlug(slug) {
    return slug ? DalApi.getRaids().filter((r) => r.slug === slug)[0] : null;
  }

  /**
   * description: return an array of all available seasoons with id, name and request slug
   */
  static getSeasons() {
    return seasons;
  }

  static getRealmsByRegionSlug(slug) {
    const requestBase = TIPS_BASILE.concat(REALM);

    const request = requestBase.concat(
      DalApi.createReqParamRegion(slug, false)
    );
    return DalApi.axiosRequest(request);
  }

  static getBasile() {
    return basile;
  }

  /**
   *
   * @param {string} region : region for guild ranking. default = world
   * @param {string} realm : realm for guild ranking. default = all
   * @param {string} faction : faction for guild ranking. default = ''
   * @param {number} page : page numer for request (20 guild/page). default = 0
   * @param {string} difficulty : difficulty for ranking. default = mythic
   * @param {string} raid : raid slug for the ranking. default = nyalotha-the-waking-city
   * @param {string} recent  : latest boss killed for guild ranking. default = false
   * @param {number} limit : don't know .... default = 0
   */
  static getTopGuild(
    region = 'world',
    realm = 'all',
    faction = '',
    page = 0,
    difficulty = 'mythic',
    raid = 'nyalotha-the-waking-city',
    recent = false,
    limit = 0
  ) {
    const requestBase = TIPS_BASILE.concat(INSTANCE_RANKING);

    // Construc the request
    const request = requestBase
      .concat(DalApi.createReqParamRegion(region, false))
      .concat(DalApi.createReqParamRealm(realm))
      .concat(DalApi.createReqParamFaction(faction))
      .concat(DalApi.createReqParamPage(page))
      .concat(DalApi.createReqParamDifficulty(difficulty))
      .concat(DalApi.createReqParamRaid(raid))
      .concat(DalApi.createReqParamRecent(recent))
      .concat(DalApi.createReqParamLimit(limit));

    // call the method who return the request result
    return DalApi.axiosRequest(request);
  }

  /**
   * @param {string} region
   * @param {string} realm
   * @param {string} guildName
   */
  static getGuild(region, realm, guildName) {
    const requestBase = TIPS_BASILE.concat(GUILD).concat('details?');
    // Construct the request
    const request = requestBase
      .concat(DalApi.createReqParamRegion(DalApi.regionParam(region), false))
      .concat(DalApi.createReqParamRealm(realm))
      .concat(DalApi.createReqParamGuild(guildName));

    return DalApi.axiosRequest(request);
  }

  static getGuildRoster(region, realm, guildName) {
    const requestBase = TIPS_BASILE.concat(GUILD).concat('roster?');
    // Construct the request
    const request = requestBase
      .concat(DalApi.createReqParamRegion(DalApi.regionParam(region), false))
      .concat(DalApi.createReqParamRealm(realm))
      .concat(DalApi.createReqParamGuild(guildName));

    return DalApi.axiosRequest(request);
  }

  /**
   * @param {string} region
   * @param {string} realm
   * @param {string} name
   */
  static getPlayer(region, realm, name) {
    const requestBase = CHARACTER_DETAILS;
    const nameParam = name.replaceAll(' ', '%20');
    // Construct the request
    const request = requestBase
      .concat(DalApi.createReqParamRegion(DalApi.regionParam(region), false))
      .concat(DalApi.createReqParamRealm(realm))
      .concat(DalApi.createReqParamName(nameParam))
      .concat(
        '&fields=gear%2Cguild%2Cmythic_plus_scores_by_season:current%2Craid_progression'
      );
    return new Promise((resolve, reject) => {
      axios
        .get(request)
        .then((response) => resolve(response))
        .catch((error) => {
          // if (error.response) {
          //   // Request made and server responded
          //   console.log('response.data: ', error.response.data);
          //   console.log('response.status: ', error.response.status);
          //   console.log('response.headers: ', error.response.headers);
          // } else if (error.request) {
          //   // The request was made but no response was received
          //   console.log(error.request);
          // } else {
          //   // Something happened in setting up the request that triggered an Error
          //   console.log('Error', error.message);
          // }
          reject(error.response.data);
        });
    });
  }

  /**
   * @param {string} classe class of the character default = all
   * @param {string} role role of the character default = all
   * @param {string} region region for guild ranking. default = world
   * @param {string} season season for ranking season default = season-bfa-4-post
   */
  static getTopPlayer(
    region = 'world',
    classe = 'all',
    role = 'all',
    season = 'season-bfa-4-post',
    page = 0
  ) {
    const requestBase = TIPS_BASILE.concat(MYTHIC_PLUS_RANKING_CHARACTER);

    // Construct the request
    const request = requestBase
      .concat(DalApi.createReqParamRegion(region, false))
      .concat(DalApi.createReqParamClasse(classe))
      .concat(DalApi.createReqParamRole(role))
      .concat(DalApi.createReqParamSeason(season))
      .concat(DalApi.createReqParamPage(page));

    return DalApi.axiosRequest(request);
  }

  static regionParam(region) {
    switch (region) {
      case 'United States & Oceania':
        return 'us';
      case 'Europe':
        return 'eu';
      case 'China':
        return 'cn';
      case 'Taiwan':
        return 'tw';
      case 'Korea':
        return 'kr';
      default:
        return region;
    }
  }

  /**
   *
   * @param {*} url url of the request
   * @returns {Promise}
   */
  static axiosRequest(url) {
    return axios.get(url);
  }

  /**
   * static method because it don't use 'this' then this méthod is common for all instances
   * @param {*} classe : slug of the class default = all
   * @param {*} and : liaison '&' for joining parameters
   * @returns string parameter for raid
   */
  static createReqParamClasse(classe, and = true) {
    return and ? '&class='.concat(classe) : 'class='.concat(classe);
  }

  /**
   * static method because it don't use 'this' then this méthod is common for all instances
   * @param {*} role : slug of the role default = all
   * @param {*} and : liaison '&' for joining parameters
   * @returns string parameter for raid
   */
  static createReqParamRole(role, and = true) {
    return and ? '&role='.concat(role) : 'role='.concat(role);
  }

  /**
   * static method because it don't use 'this' then this méthod is common for all instances
   * @param {*} season : slug of the season default = season-bfa-4-post
   * @param {*} and : liaison '&' for joining parameters
   * @returns string parameter for raid
   */
  static createReqParamSeason(season, and = true) {
    return and ? '&season='.concat(season) : 'season='.concat(season);
  }

  /**
   * static method because it don't use 'this' then this méthod is common for all instances
   * @param {*} raid : slug of te raid default = nyalotha-the-waking-city
   * @param {*} and : liaison '&' for joining parameters
   * @returns string parameter for raid
   */
  static createReqParamRaid(raid, and = true) {
    return and ? '&raid='.concat(raid) : 'raid='.concat(raid);
  }

  /**
   * static method because it don't use 'this' then this méthod is common for all instances
   * @param {*} difficulty : difficulty slug of the raid (mythic, heroic, normal) default = mythic
   * @param {*} and : liaison '&' for joining parameters
   * @returns string parameter for difficulty
   */
  static createReqParamDifficulty(difficulty, and = true) {
    return and
      ? '&difficulty='.concat(difficulty)
      : 'difficulty='.concat(difficulty);
  }

  /**
   *  static method because it don't use 'this' then this méthod is common for all instances
   * @param {*} region : region slug for request (eu, us, kr, tw) default = world
   * @param {*} and : liaison '&' for joining parameters
   * @returns string parameter for region
   */
  static createReqParamRegion(region, and = true) {
    return and ? '&region='.concat(region) : 'region='.concat(region);
  }

  /**
   * static method because it don't use 'this' then this méthod is common for all instances
   * @param {*} realm : ream slug for request default = all
   * @param {*} and : liaison '&' for joining parameters
   * @returns string parameter for realm
   */
  static createReqParamRealm(realm, and = true) {
    const formatedRealm =
      realm.toLowerCase().replace(' ', '-') &&
      realm.toLowerCase().replace("'", '');
    return and
      ? '&realm='.concat(formatedRealm)
      : 'realm='.concat(formatedRealm);
  }

  /**
   * static method because it don't use 'this' then this méthod is common for all instances
   * @param {*} page page number for request (20 guilds/page) default = 0
   * @param {*} and : liaison '&' for joining parameters
   * @returns string of parameter for page
   */
  static createReqParamPage(page, and = true) {
    return and ? '&page='.concat(page) : 'page='.concat(page);
  }

  /**
   * static method because it don't use 'this' then this méthod is common for all instances
   * @param {*} faction : faction slugfor the request (horde or alliance)
   * @param {*} and : liaison '&' for joining parameters
   * @returns string parameter for faction
   */
  static createReqParamFaction(faction, and = true) {
    return and ? '&faction='.concat(faction) : 'faction='.concat(faction);
  }

  /**
   * static method because it don't use 'this' then this méthod is common for all instances
   * @param {*} recent
   * @param {*} and : liaison '&' for joining parameters
   * @returns string parameter for recent
   */
  static createReqParamRecent(recent, and = true) {
    return and ? '&recent='.concat(recent) : 'recent='.concat(recent);
  }

  /**
   * static method because it don't use 'this' then this méthod is common for all instances
   * @param {*} limit
   * @param {*} and : liaison '&' for joining parameters
   * @returns string parameter for limit
   */
  static createReqParamLimit(limit, and = true) {
    return and ? '&limit='.concat(limit) : 'limit='.concat(limit);
  }

  /**
   * static method because it don't use 'this' then this méthod is common for all instances
   * @param {*} name
   * @param {*} and : liaison '&' for joining parameters
   * @returns string parameter for recent
   */
  static createReqParamName(name, and = true) {
    return and ? '&name='.concat(name) : 'name='.concat(name);
  }

  static createReqParamGuild(guildName, and = true) {
    const encodedGuildName = encodeURIComponent(guildName);
    return and
      ? '&guild='.concat(encodedGuildName)
      : 'guild='.concat(encodedGuildName);
  }
}

export default DalApi;
