import { useState, useEffect } from "react"
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositoies.scss'

interface IRepository {
    id: string;   
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repos, setRepos] =  useState<IRepository[]>([])


    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepos(data))
    }, [])
    
    return (
        <section className="repository-list">
            <h1>Lista de repositorio</h1>
            <ul>
                { repos.map(repository => {
                    return <RepositoryItem key={repository.id} repository={repository} />
                })}
            </ul>
        </section>
    )
}