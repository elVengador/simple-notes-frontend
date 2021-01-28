import { API, getUser, removeUser, getOptions } from './lib';

const fTag = {};

fTag.create = async (body) => {
  const response = await fetch(`${API}/tag`, getOptions('POST', body));
  const res = await response.json();
  if (response.ok) return res;
  throw new Error(res.message);
};

fTag.findAll = async () => {
  const response = await fetch(
    `${API}/tag/user/${getUser()}`,
    getOptions('GET')
  );
  const res = await response.json();
  if (response.ok) return res;
  throw new Error(res.message);
};

fTag.find = async (id) => {
  const response = await fetch(`${API}/tag/${id}`, getOptions('GET'));
  const res = await response.json();
  if (response.ok) return res;
  throw new Error(res.message);
};

fTag.update = async ({ id, body }) => {
  const response = await fetch(`${API}/tag/${id}`, getOptions('PUT', body));
  const res = await response.json();
  if (response.ok) return res;
  throw new Error(res.message);
};

fTag.remove = async (id) => {
  const response = await fetch(`${API}/tag/${id}`, getOptions('DELETE'));
  const res = await response.json();
  if (response.ok) return res;
  throw new Error(res.message);
};

export { fTag };
