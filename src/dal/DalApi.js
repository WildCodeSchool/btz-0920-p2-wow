import axios from 'axios';
import {
  regions,
  factions,
  classesAndSpecs,
  roles,
  raidDifficulty,
  raids,
  seasons,
} from './staticData';

const TIPS_BASILE = 'https://cors-anywhere.herokuapp.com/';
const INSTANCE_RANKING = 'https://raider.io/api/raids/instance-rankings?';
const MYTHIC_PLUS_RANKING_CHARACTER =
  'https://raider.io/api/mythic-plus/rankings/characters?';
class DalApi {
  /**
   * description: return an array of all 4 regions with id, name and request slug
   */
  static getRegions() {
    return regions;
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
   * description: return an array of all available seasoons with id, name and request slug
   */
  static getSeasons() {
    return seasons;
  }

  /**
   *
   * @param {*} raid : raid for the ranking. default = nyalotha-the-waking-city
   * @param {*} difficulty : difficulty for ranking. default = mythic
   * @param {*} region : region for guild ranking. default = world
   * @param {*} realm : realm for guild ranking. default = all
   * @param {*} page : page numer for request (20 guild/page). default = 0
   * @param {*} faction : faction for guild ranking. default = ''
   * @param {*} recent  : latest boss killed for guild ranking. default = false
   * @param {*} limit : don't know .... default = 0
   * @param {*} callback : function or method to execute when result is ok
   */
  static getTopGuild(
    callback,
    raid = 'nyalotha-the-waking-city',
    difficulty = 'mythic',
    region = 'world',
    realm = 'all',
    page = 0,
    faction = '',
    recent = false,
    limit = 0
  ) {
    const requestBase = TIPS_BASILE.concat(INSTANCE_RANKING);

    // Construc the request
    const request = requestBase
      .concat(DalApi.createReqParamRaid(raid, false))
      .concat(DalApi.createReqParamDifficulty(difficulty))
      .concat(DalApi.createReqParamRegion(region))
      .concat(DalApi.createReqParamRealm(realm))
      .concat(DalApi.createReqParamPage(page))
      .concat(DalApi.createReqParamFaction(faction))
      .concat(DalApi.createReqParamRecent(recent))
      .concat(DalApi.createReqParamLimit(limit));

    // call the method who return the request result
    DalApi.axiosRequest(request, callback);
  }

  /**
   *
   * @param {*} callback function or method to execute when result is ok
   * @param {*} classe
   * @param {*} role
   * @param {*} region
   * @param {*} season
   */
  static getTopPlayer(
    callback,
    classe = 'all',
    role = 'all',
    region = 'world',
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

    DalApi.axiosRequest(request, callback);
  }

  /**
   *
   * @param {*} url url of the request
   * @param {*} callback function or method called when result is ok
   */
  static axiosRequest(url, callback) {
    axios.get(url).then((response) => callback(response.data));
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
    return and ? '&realm='.concat(realm) : 'realm='.concat(realm);
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
}

export default DalApi;
