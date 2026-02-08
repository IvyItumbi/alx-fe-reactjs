import { useState } from 'react';
import { fetchUserData, searchUsers } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);

  const handleBasicSearch = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    setLoading(true);
    setError(false);
    setUserData(null);
    setSearchResults([]);
    setIsAdvancedSearch(false);
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserData(null);
    setSearchResults([]);
    setIsAdvancedSearch(true);
    try {
      const data = await searchUsers(username, location, minRepos);
      setSearchResults(data.items || []);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">GitHub User Search</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <form onSubmit={handleBasicSearch} className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Basic Search</h2>
          <div className="flex gap-2">
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter GitHub username" className="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
            <button type="submit" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Search</button>
          </div>
        </form>
        <form onSubmit={handleAdvancedSearch} className="border-t pt-6">
          <h2 className="text-xl font-semibold mb-4">Advanced Search</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2">Username</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="w-full px-4 py-3 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g., Kenya" className="w-full px-4 py-3 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Min Repos</label>
              <input type="number" value={minRepos} onChange={(e) => setMinRepos(e.target.value)} placeholder="10" min="0" className="w-full px-4 py-3 border rounded-lg" />
            </div>
          </div>
          <button type="submit" className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Advanced Search</button>
        </form>
      </div>
      {loading && <div className="text-center py-8"><div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div><p className="mt-4">Loading...</p></div>}
      {error && !loading && <div className="text-center py-8 bg-red-50 rounded-lg"><p className="text-red-600">Looks like we cant find the user</p></div>}
      {userData && !isAdvancedSearch && !loading && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-4">
            <img src={userData.avatar_url} alt={userData.login} className="w-24 h-24 rounded-full" />
            <div>
              <h2 className="text-2xl font-bold">{userData.name || userData.login}</h2>
              <p className="text-gray-600">@{userData.login}</p>
              <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Profile</a>
            </div>
          </div>
          {userData.bio && <p className="mt-4">{userData.bio}</p>}
          <div className="mt-4 flex gap-4 text-sm"><span>📍 {userData.location || 'Not specified'}</span><span>📚 {userData.public_repos} repos</span><span>👥 {userData.followers} followers</span></div>
        </div>
      )}
      {isAdvancedSearch && searchResults.length > 0 && !loading && (
        <div>
          <p className="mb-4 font-medium">Found {searchResults.length} users</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {searchResults.map(user => (
              <div key={user.id} className="bg-white rounded-lg shadow-md p-5">
                <div className="flex items-start gap-4">
                  <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full" />
                  <div>
                    <h3 className="text-xl font-bold">{user.login}</h3>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Profile</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
