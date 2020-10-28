import Axios from 'axios';
import { Component } from 'react';
import { Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import {
  BsFillSkipStartFill,
  BsFillSkipEndFill,
  BsFillSkipBackwardFill,
  BsFillSkipForwardFill,
} from 'react-icons/bs';

import GuildRow from './GuildRow';

const url =
  'https://raider.io/api/v1/raiding/raid-rankings?raid=nyalotha-the-waking-city&difficulty=mythic&region=kr&realm=Azshara';
//  "https://raider.io/api/v1/raiding/raid-rankings?raid=nyalotha-the-waking-city&difficulty=mythic&region=us&realm=Mal'Ganis";
class GuildsArray extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      serverSlug: '',
      realmName: '',
    };
  }

  componentDidMount() {
    Axios.get(url)
      .then((response) => response.data)
      .then((guildsRes) => {
        this.setState({
          results: guildsRes.raidRankings,
          serverSlug: guildsRes.raidRankings[0].guild.region.slug,
          realmName: guildsRes.raidRankings[0].guild.realm.name,
        });
      });
  }

  render() {
    const { results, serverSlug, realmName } = this.state;
    return (
      <div className="align-items-center">
        <h2>
          Top <span>{serverSlug}</span> {realmName} Guilds
        </h2>
        <Table striped className="table-striped mx-5">
          {results.map((result) => {
            return (
              <GuildRow
                name={result.guild.name}
                realm={result.guild.realm.name}
                slug={result.guild.region.slug}
                rank={result.rank}
                key={result.rank}
              />
            );
          })}
        </Table>
        <Pagination size="lg">
          <PaginationItem>
            <PaginationLink href="#">
              <BsFillSkipBackwardFill />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              <BsFillSkipStartFill />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              <BsFillSkipEndFill />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              <BsFillSkipForwardFill />
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </div>
    );
  }
}

export default GuildsArray;
