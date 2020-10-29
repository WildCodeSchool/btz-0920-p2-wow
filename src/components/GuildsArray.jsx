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
import ToolsFilters from './ToolsFilters';

import Hr from './Hr';
import './GuildsArray.css';

const url =
  //  'https://raider.io/api/v1/raiding/raid-rankings?raid=nyalotha-the-waking-city&difficulty=mythic&region=kr&realm=Azshara';
  //  "https://raider.io/api/v1/raiding/raid-rankings?raid=nyalotha-the-waking-city&difficulty=mythic&region=us&realm=Mal'Ganis";
  "https://raider.io/api/v1/raiding/raid-rankings?raid=nyalotha-the-waking-city&difficulty=mythic&region=eu&realm=Vol'jin";
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
        <div className="title">
          <h2>
            Top <span>{serverSlug}</span> {realmName} Guilds
          </h2>
          <Hr />
        </div>
        <main className="main">
          <div className="filter">
            <ToolsFilters />
          </div>
          <Table className="guildsTable">
            {results.map((result) => {
              let style;
              if (result.rank % 2 !== 0) {
                style = "style={{backgroundColor: 'rgba(255, 255, 255, 0.5'}}";
              } else {
                style = "style={{backgroundColor: 'rgba(255, 255, 255, 0'}}";
              }
              return (
                <GuildRow
                  name={result.guild.name}
                  faction={result.guild.faction}
                  slug={result.guild.region.slug}
                  rank={result.rank}
                  key={result.rank}
                  bckgrdStyle={style}
                />
              );
            })}
          </Table>
        </main>
        <Pagination className="pagination" size="lg clearfix">
          <PaginationItem className="paginationItem">
            <PaginationLink href="#">
              <BsFillSkipBackwardFill />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="paginationItem">
            <PaginationLink href="#">
              <BsFillSkipStartFill />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="paginationItem">
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem className="paginationItem">
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem className="paginationItem">
            <PaginationLink href="#">
              <BsFillSkipEndFill />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="paginationItem">
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
