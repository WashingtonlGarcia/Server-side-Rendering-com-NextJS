import React from 'react';
import axios from 'axios';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '~/hocs/withAnalytics';

function Users({ users }) {
  return (
    <div>
      <Head>
        <title>Users</title>
      </Head>
      <strong>Aperte em Usuario abaixo</strong>
      <ul>
        {users.map(user => (
          <Link key={user.id} href={`/users/${user.login}`}>
            <li>{user.login}</li>
          </Link>
        ))}
      </ul>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </div>
  );
}

Users.getInitialProps = async () => {
  const response = await axios.get(
    'https://api.github.com/orgs/rocketseat/members'
  );
  return { users: response.data };
};

export default withAnalytics()(Users);
