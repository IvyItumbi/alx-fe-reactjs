import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchUsers = async (query = '', location = '', minRepos = '', page = 1) => {
  try {
    let searchQuery = '';
    
    if (query.trim()) {
      searchQuery += query.trim();
    }
    
    if (location.trim()) {
      searchQuery += (searchQuery ? '+' : '') + `location:${location.trim()}`;
    }
    
    if (minRepos && parseInt(minRepos) > 0) {
      searchQuery += (searchQuery ? '+' : '') + `repos:>=${minRepos}`;
    }
    
    if (!searchQuery) {
      return { items: [], total_count: 0 };
    }
    
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: {
        q: searchQuery,
        page: page,
        per_page: 30
      }
    });
    
    return response.data;
  } catch (error) {
    throw error;
  }
};
