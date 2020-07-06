import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/48891746?s=460&u=c53ef00e81830ae2549ded78efff6a68c2c97f10&v=4"
            alt="Lorenzo Windmoller"
          />
          <div>
            <strong>Nome do projeto</strong>
            <p>Descrição do projeto</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>100</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>100</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>100</strong>
            <span>Issue abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="afasfasf">
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
