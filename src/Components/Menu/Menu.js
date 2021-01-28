import React from 'react';
import { useHistory } from 'react-router-dom';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Menu.css';

import { isUserLogged } from '../../Api/lib';
import Icon from '../../Components/Icon/Icon';
import LinkList from '../../Components/LinkList/LinkList';

export default function Menu({ testId, hideMenu }) {
  const history = useHistory();
  const redirect = (path) => {
    hideMenu();
    history.push(path);
  };
  const pageList = isUserLogged()
    ? [
        { name: 'Home', link: '/' },
        { name: 'Tags', link: '/tags' },
        { name: 'Notes', link: '/notes' },
        { name: 'Sign Off', link: '/sign-off' },
      ]
    : [
        { name: 'Home', link: '/' },
        { name: 'Sign In', link: '/sign-in' },
        { name: 'Sign Up', link: '/sign-up' },
      ];

  return (
    <div data-testid={testId} className="menu">
      <div className="menu__header">
        <div className="icon">
          <Icon
            testId={'id-close'}
            icon={faTimes}
            light={true}
            cb={() => hideMenu()}
          />
        </div>
        <h2 className="title">Menu</h2>
      </div>
      <div className="menu__body">
        <LinkList pageList={pageList} redirect={redirect} />
      </div>
    </div>
  );
}
