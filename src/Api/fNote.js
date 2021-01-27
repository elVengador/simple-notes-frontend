import { API, getUser, getOptions } from './lib';

const fNote = {};

fNote.create = async (body) => {
  const response = await fetch(`${API}/note`, getOptions('POST', body));
  const res = await response.json();
  if (response.ok) return res;
  throw new Error(res.message);
};

fNote.findAll = async () => {
  const response = await fetch(
    `${API}/note/user/${getUser()}`,
    getOptions('GET')
  );
  const res = await response.json();
  if (response.ok) return res;
  throw new Error(res.message);
};

fNote.find = async (id) => {
  const response = await fetch(`${API}/note/${id}`, getOptions('GET'));
  const res = await response.json();
  if (response.ok) return res;
  throw new Error(res.message);
};

fNote.update = async ({ id, body }) => {
  const response = await fetch(`${API}/note/${id}`, getOptions('PUT', body));
  const res = await response.json();
  if (response.ok) return res;
  throw new Error(res.message);
};

fNote.remove = async (id) => {
  const response = await fetch(`${API}/note/${id}`, getOptions('DELETE'));
  const res = await response.json();
  if (response.ok) return res;
  throw new Error(res.message);
};

export { fNote };
