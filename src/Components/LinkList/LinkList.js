import React from 'react';
import Link from '../../Components/Link/Link';

import './LinkList.css';

export default function LinkList({ pageList, redirect }) {
  const linkList = pageList.map((cur, idx) => (
    <Link key={`link-${idx}`} text={cur.name} cb={() => redirect(cur.link)} />
  ));
  return <ul className="link-list">{linkList}</ul>;
}
