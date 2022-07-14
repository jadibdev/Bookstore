import http from '../lib/http';
import { APP_ID } from '../data/constants';

const getAll = () => http.get(`/apps/${APP_ID}/books`);

const get = (id) => http.get(`/apps/${APP_ID}/books/${id}`);

const create = (book) => http.post(`/apps/${APP_ID}/books`, book);

const remove = (id) => http.delete(`/apps/${APP_ID}/books/${id}`);

export default {
  getAll,
  get,
  create,
  remove,
};
