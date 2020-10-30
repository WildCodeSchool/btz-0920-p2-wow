import { Component } from 'react';
import { Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from 'react-icons/bs';

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
      min: 0,
      max: 5,
    };
    this.pageUp = this.pageUp.bind(this);
    this.pageDown = this.pageDown.bind(this);
    this.page1 = this.page1.bind(this);
    this.page2 = this.page2.bind(this);
    this.page3 = this.page3.bind(this);
    this.page4 = this.page4.bind(this);
  }

  componentDidMount() {
    DalApi.getTopGuild(
      (guildsRes) => {
        this.setState({
          results: guildsRes.raidRankings.rankedGuilds,
          serverSlug: guildsRes.raidRankings.rankedGuilds[0].guild.region.slug,
          realmName: guildsRes.raidRankings.rankedGuilds[0].guild.realm.name,
          // min: 0,
          // max: 5,
          loadingGuilds: false,
        });
      },
      'us',
      "Mal'ganis"
    );
  }

  pageUp() {
    const { min, max } = this.state;
    this.setState({ min: min + 5, max: max + 5 });
  }

  pageDown() {
    const { min, max } = this.state;
    this.setState({ min: min - 5, max: max - 5 });
  }

  page1() {
    this.setState({ min: 0, max: 5 });
  }

  page2() {
    this.setState({ min: 5, max: 10 });
  }

  page3() {
    this.setState({ min: 10, max: 15 });
  }

  page4() {
    this.setState({ min: 15, max: 20 });
  }
  // pageUp() {
  //   const { min, max } = this.state;
  //   this.setState = { min: { min } + 5, max: { max } + 5 };
  // }

  render() {
    const {
      results,
      serverSlug,
      realmName,
      loadingGuilds,
      min,
      max,
    } = this.state;

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
                .filter((e, index) => index >= min && index < max)}
            </tbody>
          </Table>
        </main>
        <Pagination className="pagination" size="lg clearfix">
          <PaginationItem className="paginationItem">
            <PaginationLink onClick={this.page1} href="#">
              <BsFillSkipBackwardFill />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="paginationItem">
            <PaginationLink onClick={this.page1} href="#">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="paginationItem">
            <PaginationLink onClick={this.page2} href="#">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="paginationItem">
            <PaginationLink onClick={this.page3} href="#">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="paginationItem">
            <PaginationLink onClick={this.page4} href="#">
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="paginationItem">
            <PaginationLink onClick={this.page4} href="#">
              <BsFillSkipForwardFill />
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </div>
    );
  }
}

export default GuildsArray;
