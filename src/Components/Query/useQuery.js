const ACCESS_TOKEN = sessionStorage.getItem('ACCESS_TOKEN')
  ? `Bearer ${sessionStorage.getItem('ACCESS_TOKEN')}`
  : '';
const REFRESH_TOKEN = sessionStorage.getItem('REFRESH_TOKEN')
  ? `Bearer ${sessionStorage.getItem('REFRESH_TOKEN')}`
  : '';
const API = 'http://localhost:4000/api/v1';

const GET = async (route) =>
  await fetch(`${API}${route}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: ACCESS_TOKEN,
      Refresh: REFRESH_TOKEN,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
const POST = async (route, body = {}) =>
  await fetch(`${API}${route}`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: ACCESS_TOKEN,
      Refresh: REFRESH_TOKEN,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(body),
  });

export { GET, POST };
