import {
  regions,
  factions,
  classesAndSpecs,
  roles,
  raids,
  seasons,
} from './staticData';

class ContextApi {
  constructor() {
    this.regions = regions;
    this.factions = factions;
    this.classesAndSpecs = classesAndSpecs;
    this.roles = roles;
    this.raids = raids;
    this.seasons = seasons;

    this.binder(this);
  }

  binder(thisClass) {
    this.getRegions = this.getRegions.bind(thisClass);
    this.getFactions = this.getFactions.bind(thisClass);
    this.getClassesAndSpecs = this.getClassesAndSpecs.bind(thisClass);
    this.getRoles = this.getRoles.bind(thisClass);
    this.getRaids = this.getRaids.bind(thisClass);
    this.getSeasons = this.getSeasons.bind(thisClass);
  }

  /**
   * description: return an array of all 4 regions with id, name and request slug
   */
  getRegions() {
    return this.regions;
  }

  /**
   * description: return an array of all 2 factions with id, name and request slug
   */
  getFactions() {
    return this.factions;
  }

  /**
   * description: return an array of all 12 factions with id, name, request slug and specs object for each of them
   * spec object contain id, name and request slug
   */
  getClassesAndSpecs() {
    return this.classesAndSpecs;
  }

  /**
   *
   */
  getRoles() {
    return this.roles;
  }

  /**
   *
   */
  getRaids() {
    return this.Raids;
  }

  /**
   *
   */
  getSeasons() {
    return this.seasons;
  }
}

export default ContextApi;
