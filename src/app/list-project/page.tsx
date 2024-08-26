'use client';
import { useState, useEffect } from 'react';
import { fetchGitHubAccountByEmail, fetchGitHubRepos } from '@/utils/github';
import { useSession } from 'next-auth/react';

const ListProject = () => {
  const [repos, setRepos]: any = useState([]);  

  useEffect(() => {
    // fetchRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-auto max-w-7xl sm:py-8 px-4 lg:px-8 min-h-screen ">
      {/* {repos && repos.length > 0 && <GithubProjects data={repos} />} */}
    </div>
  );
};

export default ListProject;
