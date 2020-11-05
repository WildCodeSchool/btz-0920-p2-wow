import { useEffect, useState } from 'react';
import {
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Container,
} from 'reactstrap';
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from 'react-icons/bs';

import { useParams } from 'react-router-dom';
import GuildRow from './GuildRow';
import ToolsFilters from './ToolsFilters';
import DalApi from '../dal/DalApi';

import Hr from './cssPages&Components/Hr';
import LoadingSpinner from './LoadingSpinner';
import './cssPages&Components/GuildsArray.css';

const GuildsArray = () => {
  const params = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverSlug, setServerSlug] = useState('');
  const [realmName, setRealmName] = useState('');
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(5);

  useEffect(() => {
    DalApi.getTopGuild(
      params.region.toLowerCase(),
      params.realm.toLowerCase()
    ).then(({ data }) => {
      setResults(data.raidRankings.rankedGuilds);
      setServerSlug(params.region);
      setRealmName(params.realm);
      setLoading(false);
    });
  }, []);

  function page1() {
    setMin(0);
    setMax(5);
  }

  function page2() {
    setMin(5);
    setMax(10);
  }

  function page3() {
    setMin(10);
    setMax(15);
  }

  function page4() {
    setMin(15);
    setMax(20);
  }

  return (
    <>
      {loading ? (
        <div className="cssStyle d-flex flex-column align-items-center">
          <div style={{ height: '100px', minWidth: '95vw' }} />
          <LoadingSpinner />
        </div>
      ) : (
        <div
          className="cssStyle d-flex flex-column align-items-center text-center"
          style={{ maxWidth: '100vw' }}
        >
          <div style={{ height: '100px', minWidth: '99vw' }} />
          <div>
            <h2>
              Top <span>{serverSlug}</span> {realmName} Guilds
            </h2>
            <Hr />
          </div>
          <Container>
            <div className="row align-self-center">
              <div className="col-1 d-flex align-items-center">
                <ToolsFilters />
              </div>
              <Table className="col-10" w-auto text-nowrap hover>
                <tbody className="container">
                  {results
                    .map((result) => {
                      return (
                        <GuildRow
                          name={result.guild.name}
                          faction={result.guild.faction}
                          slug={result.guild.region.slug}
                          rank={result.rank}
                          region={result.guild.region.name}
                          realm={result.guild.realm.name}
                          key={result.rank}
                        />
                      );
                    })
                    .filter((_, index) => index >= min && index < max)}
                </tbody>
              </Table>
            </div>
          </Container>
          <Pagination className="align-self-center" size="lg clearfix">
            <PaginationItem className="paginationItem">
              <PaginationLink onClick={page1}>
                <BsFillSkipBackwardFill />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className="paginationItem">
              <PaginationLink onClick={page1}>1</PaginationLink>
            </PaginationItem>
            <PaginationItem className="paginationItem">
              <PaginationLink onClick={page2}>2</PaginationLink>
            </PaginationItem>
            <PaginationItem className="paginationItem">
              <PaginationLink onClick={page3}>3</PaginationLink>
            </PaginationItem>
            <PaginationItem className="paginationItem">
              <PaginationLink onClick={page4}>4</PaginationLink>
            </PaginationItem>
            <PaginationItem className="paginationItem">
              <PaginationLink onClick={page4}>
                <BsFillSkipForwardFill />
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </div>
      )}
    </>
  );
};

export default GuildsArray;
