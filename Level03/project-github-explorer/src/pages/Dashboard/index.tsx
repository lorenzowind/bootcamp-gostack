import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="button">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/48891746?s=460&u=c53ef00e81830ae2549ded78efff6a68c2c97f10&v=4"
            alt="Lorenzo Windmoller"
          />
          <div>
            <strong>Code Helpers</strong>
            <p>
              The Code Helpers is an application to share errors or programming
              difficulties
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/48891746?s=460&u=c53ef00e81830ae2549ded78efff6a68c2c97f10&v=4"
            alt="Lorenzo Windmoller"
          />
          <div>
            <strong>Code Helpers</strong>
            <p>
              The Code Helpers is an application to share errors or programming
              difficulties
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/48891746?s=460&u=c53ef00e81830ae2549ded78efff6a68c2c97f10&v=4"
            alt="Lorenzo Windmoller"
          />
          <div>
            <strong>Code Helpers</strong>
            <p>
              The Code Helpers is an application to share errors or programming
              difficulties
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/48891746?s=460&u=c53ef00e81830ae2549ded78efff6a68c2c97f10&v=4"
            alt="Lorenzo Windmoller"
          />
          <div>
            <strong>Code Helpers</strong>
            <p>
              The Code Helpers is an application to share errors or programming
              difficulties
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/48891746?s=460&u=c53ef00e81830ae2549ded78efff6a68c2c97f10&v=4"
            alt="Lorenzo Windmoller"
          />
          <div>
            <strong>Code Helpers</strong>
            <p>
              The Code Helpers is an application to share errors or programming
              difficulties
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
