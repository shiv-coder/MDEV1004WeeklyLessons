const axios = require('axios');
const Repository = require('../Models/Repository');

const getRepositories = async(req,res)=>{
    try{
        const username = req.query.username || 'shiv-coder';
        const url = `https://api.github.com/users/${username}/repos`;
        //axios.get(url, {headers:{...}})
        const response = await axios.get(url,{
            headers:{
                Authorization:`token $process.env.GITHUB_TOKEN`,
            },
        });
        const repoData = response.data;

        const repositories = repoData.map((repo)=>({
        name :repo.name,
        full_name : repo.full_name,
        description :repo.description,
        language : repo.language,
        url:repo.html_url,
        created_at:new Date(repo.created_at),
        updated_at:new Date(repo.updated_at)

        }));

        //Insert the repositories into MOngoDB

        await Repository.insertMany(repositories);

        res.status(200).json({
            message:`Fteched and saved ${repositories.length} repositories for user ${username}`,
            data:repositories,
        })
    }catch(error){
        console.error('Error fetching repositories',error);
        res.status(500).json({error:'Failed to fetch reppositories'})
        };

    }
