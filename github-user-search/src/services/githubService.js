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

export const searchUsers = async (query, location = '', minRepos = '') => {
  try {
    let searchQuery = query;
    
    if (location) {
      searchQuery += `+location:${location}`;
    }
    
    if (minRepos) {
      searchQuery += `+repos:>=${minRepos}`;
    }
    
    const response = await axios.get(`${BASE_URL}/search/users?q=${searchQuery}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
