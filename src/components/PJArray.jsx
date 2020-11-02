import { Component } from 'react';
import { Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from 'react-icons/bs';

import PJRow from './PJRow';
import ToolsFilters from './ToolsFilters';
import DalApi from '../dal/DalApi';

import Hr from './Hr';
import LoadingSpinner from './LoadingSpinner';
import './GuildsArray.css';

class PJArray extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      regionName: '',
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
    DalApi.getTopPlayer((PJRes) => {
      this.setState({
        results: PJRes.rankings.rankedCharacters,
        regionName: PJRes.rankings.region.name,
        loadingGuilds: false,
      });
    }, 'eu');
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

  render() {
    const { results, regionName, loadingGuilds, min, max } = this.state;

    if (loadingGuilds) return <LoadingSpinner />;
    return (
      <div className="align-items-center">
        <div className="title">
          <h2>
            Top <span>{regionName}</span> Characters
          </h2>
          <Hr />
        </div>
        <main className="main">
          <div className="filter">
            <ToolsFilters />
          </div>
          <Table className="guildsTable" w-auto text-nowrap hover>
            <tbody>
              {results
                .map((result) => {
                  return (
                    <PJRow
                      name={result.character.name}
                      pjClass={result.character.class.name}
                      faction={result.character.faction}
                      slug={result.character.region.slug}
                      rank={result.rank}
                      spec={result.character.spec.name}
                      realm={result.character.realm.name}
                      key={result.rank}
                    />
                  );
                })
                .filter((_, index) => index >= min && index < max)}
            </tbody>
          </Table>
        </main>
        <Pagination className="pagination" size="lg clearfix">
          <PaginationItem className="paginationItem">
            <PaginationLink onClick={this.page1}>
              <BsFillSkipBackwardFill />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="paginationItem">
            <PaginationLink onClick={this.page1}>1</PaginationLink>
          </PaginationItem>
          <PaginationItem className="paginationItem">
            <PaginationLink onClick={this.page2}>2</PaginationLink>
          </PaginationItem>
          <PaginationItem className="paginationItem">
            <PaginationLink onClick={this.page3}>3</PaginationLink>
          </PaginationItem>
          <PaginationItem className="paginationItem">
            <PaginationLink onClick={this.page4}>4</PaginationLink>
          </PaginationItem>
          <PaginationItem className="paginationItem">
            <PaginationLink onClick={this.page4}>
              <BsFillSkipForwardFill />
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </div>
    );
  }
}

export default PJArray;
