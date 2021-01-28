import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { fAuth } from '../../Api/fAuth';

export default function SignOff({ showMessage }) {
  const history = useHistory();
  useEffect(() => {
    fAuth.signOff();
    history.push('/');
  }, []);
  return <p>signing off...</p>;
}
