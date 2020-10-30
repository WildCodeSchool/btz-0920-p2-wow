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
import DalApi from '../dal/DalApi';

import Hr from './Hr';
import LoadingSpinner from './LoadingSpinner';
import './GuildsArray.css';

class GuildsArray extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      serverSlug: '',
      realmName: '',
      loadingGuilds: true,
    };
  }

  componentDidMount() {
    DalApi.getTopGuild(
      (guildsRes) => {
        this.setState({
          results: guildsRes.raidRankings.rankedGuilds,
          serverSlug: guildsRes.raidRankings.rankedGuilds[0].guild.region.slug,
          realmName: guildsRes.raidRankings.rankedGuilds[0].guild.realm.name,
          loadingGuilds: false,
        });
      },
      'eu',
      "Vol'jin"
    );
  }

  render() {
    const { results, serverSlug, realmName, loadingGuilds } = this.state;
    // function suffisammentGrand(e) {
    //   return results[e].rank <= 5;
    // }
    if (loadingGuilds) return <LoadingSpinner />;
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
            <tbody>
              {results
                .map((result) => {
                  let style;
                  if (result.rank % 2 !== 0) {
                    style =
                      "style={{backgroundColor: 'rgba(255, 255, 255, 0.5'}}";
                  } else {
                    style =
                      "style={{backgroundColor: 'rgba(255, 255, 255, 0'}}";
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
                })
                .filter((e, index) => index < 5)}
            </tbody>
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
