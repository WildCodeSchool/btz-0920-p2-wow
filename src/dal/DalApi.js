import axios from 'axios';
import {
  regions,
  factions,
  classesAndSpecs,
  roles,
  raids,
  seasons,
} from './staticData';

class DalApi {
  constructor() {
    this.propRegions = regions;
    this.propFactions = factions;
    this.propFlassesAndSpecs = classesAndSpecs;
    this.propRoles = roles;
    this.propRaids = raids;
    this.propSeasons = seasons;

    this.binder(this);
  }

  binder(thisClass) {
    this.getRegions = this.getRegions.bind(thisClass);
    this.getFactions = this.getFactions.bind(thisClass);
    this.getClassesAndSpecs = this.getClassesAndSpecs.bind(thisClass);
    this.getRoles = this.getRoles.bind(thisClass);
    this.getRaids = this.getRaids.bind(thisClass);
    this.getSeasons = this.getSeasons.bind(thisClass);
    this.createReqParamDifficulty = this.createReqParamDifficulty.bind(
      thisClass
    );
    this.createReqParamRegion = this.createReqParamRegion.bind(thisClass);
    this.createReqParamFaction = this.createReqParamFaction.bind(thisClass);
    this.createReqParamLimit = this.createReqParamLimit.bind(thisClass);
    this.createReqParamPage = this.createReqParamPage.bind(thisClass);
    this.createReqParamRaid = this.createReqParamRaid.bind(thisClass);
    this.createReqParamRealm = this.createReqParamRealm.bind(thisClass);
    this.createReqParamRecent = this.createReqParamRecent.bind(thisClass);
  }

  /**
   * description: return an array of all 4 regions with id, name and request slug
   */
  getRegions() {
    return this.propRegions;
  }

  /**
   * description: return an array of all 2 factions with id, name and request slug
   */
  getFactions() {
    return this.propFactions;
  }

  /**
   * description: return an array of all 12 factions with id, name, request slug and specs object for each of them
   * spec object contain id, name and request slug
   */
  getClassesAndSpecs() {
    return this.propClassesAndSpecs;
  }

  /**
   * description: return an array of all 3 roles with id, name and request slug
   */
  getRoles() {
    return this.propRoles;
  }

  /**
   * description: return an array of 10 latest raids with id, name and request slug
   */
  getRaids() {
    return this.propRaids;
  }

  /**
   * description: return an array of all available seasoons with id, name and request slug
   */
  getSeasons() {
    return this.propSeasons;
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
  getTopGuild(
    raid = 'nyalotha-the-waking-city',
    difficulty = 'mythic',
    region = 'world',
    realm = 'all',
    page = 0,
    faction = '',
    recent = false,
    limit = 0,
    callback
  ) {
    const requestBase = 'https://raider.io/api/raids/instance-rankings?';
    const request = requestBase
      .concat(this.createReqParamRaid(raid, false))
      .concat(this.createReqParamDifficulty(difficulty, true))
      .concat(this.createReqParamRegion(region, true))
      .concat(this.createReqParamRealm(realm, true))
      .concat(this.createReqParamPage(page, true))
      .concat(this.createReqParamFaction(faction, true))
      .concat(this.createReqParamRecent(recent, true))
      .concat(this.createReqParamLimit(limit, true));

    axios.get(request).then((response) => callback(response.data));
  }

  /**
   * static method because it don't use 'this' then this méthod is common for all instances
   * @param {*} raid : slug of te raid default = nyalotha-the-waking-city
   * @param {*} and : liaison '&' for joining parameters
   * @returns string parameter for raid
   */
  static createReqParamRaid(raid, and = false) {
    return and ? '&raid='.concat(raid) : 'raid='.concat(raid);
  }

  /**
   * static method because it don't use 'this' then this méthod is common for all instances
   * @param {*} difficulty : difficulty slug of the raid (mythic, heroic, normal) default = mythic
   * @param {*} and : liaison '&' for joining parameters
   * @returns string parameter for difficulty
   */
  static createReqParamDifficulty(difficulty, and = false) {
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
  static createReqParamRegion(region, and = false) {
    return and ? '&region='.concat(region) : 'region='.concat(region);
  }

  /**
   * static method because it don't use 'this' then this méthod is common for all instances
   * @param {*} realm : ream slug for request default = all
   * @param {*} and : liaison '&' for joining parameters
   * @returns string parameter for realm
   */
  static createReqParamRealm(realm, and = false) {
    return and ? '&realm='.concat(realm) : 'realm='.concat(realm);
  }

  /**
   * static method because it don't use 'this' then this méthod is common for all instances
   * @param {*} page page number for request (20 guilds/page) default = 0
   * @param {*} and : liaison '&' for joining parameters
   * @returns string of parameter for page
   */
  static createReqParamPage(page, and = false) {
    return and ? '&page='.concat(page) : 'page='.concat(page);
  }

  /**
   * static method because it don't use 'this' then this méthod is common for all instances
   * @param {*} faction : faction slugfor the request (horde or alliance)
   * @param {*} and : liaison '&' for joining parameters
   * @returns string parameter for faction
   */
  static createReqParamFaction(faction, and = false) {
    return and ? '&faction='.concat(faction) : 'faction='.concat(faction);
  }

  /**
   * static method because it don't use 'this' then this méthod is common for all instances
   * @param {*} recent
   * @param {*} and : liaison '&' for joining parameters
   * @returns string parameter for recent
   */
  static createReqParamRecent(recent, and = false) {
    return and ? '&recent='.concat(recent) : 'recent='.concat(recent);
  }

  /**
   * static method because it don't use 'this' then this méthod is common for all instances
   * @param {*} limit
   * @param {*} and : liaison '&' for joining parameters
   * @returns string parameter for limit
   */
  static createReqParamLimit(limit, and = false) {
    return and ? '&limit='.concat(limit) : 'limit='.concat(limit);
  }
}

export default DalApi;
