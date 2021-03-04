import React from 'react';
import { useHistory } from 'react-router-dom';
import './Menu.css';

import { isUserLogged } from '../../Api/lib';
import LinkList from '../../Components/LinkList/LinkList';

export default function Menu({ testId, hide }) {
  const history = useHistory();
  const redirect = (path) => {
    hide();
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
      <LinkList pageList={pageList} redirect={redirect} />
    </div>
  );
}
