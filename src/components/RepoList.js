import React from 'react'

const RepoList = ({repos}) => {
  return (
    <div>
        <h3>Repositories:</h3>
        <ul>
            {repos.map((repo)=>(
                <li key={repo.id}>
                    <strong>{repo.name}</strong>: {repo.description || "No Description"}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default RepoList