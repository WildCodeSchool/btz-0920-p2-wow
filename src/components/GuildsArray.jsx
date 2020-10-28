import Axios from 'axios';
import { Component } from 'react';

import GuildRow from './GuildRow';

const url =
  "https://raider.io/api/v1/raiding/raid-rankings?raid=nyalotha-the-waking-city&difficulty=mythic&region=us&realm=Mal'Ganis";
class GuildsArray extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      title: {
        guild: {
          region: {
            slug: '',
          },
          realm: {
            name: '',
          },
        },
      },
    };
  }

  componentDidMount() {
    Axios.get(url)
      .then((response) => response.data)
      .then((guildsRes) => {
        this.setState({
          results: guildsRes.raidRankings,
          title: guildsRes.raidRankings[0],
        });
      });
  }

  render() {
    const { results, title } = this.state;
    return (
      <div>
        <h2>
          Top <span>{title.guild.region.slug}</span> {title.guild.realm.name}{' '}
          Guilds
        </h2>
        <hr />
        <table>
          {results.map((result) => {
            return (
              <GuildRow
                name={result.guild.name}
                realm={result.guild.realm.name}
                slug={result.guild.region.slug}
                key={result.rank}
              />
            );
          })}
        </table>
      </div>
    );
  }
}

export default GuildsArray;
