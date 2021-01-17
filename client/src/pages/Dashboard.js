import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Card from '../component/Home/Card'

const Dashboard = (props)=>{
    const [movies, setMovies] = useState([]);
    useEffect(()=>{

        const fetch = async ()=>{
            const result = await axios.get('/api/v1/movie')
            // console.log(result)
            setMovies(result.data)
            
        }
        fetch()
    },[])
    return(
        <div>    
            <div className="home-page">
                TOP 10 BLOCKBUSTER MOVIE 2019
            </div>
            <div className="content">
                {movies ? movies.map(movie=>{
                    return(
                        <Card data={movie}/>
                    )
                    
                }) : <div>Loading</div>
                }
            </div>
            <style jsx>
                {`
                    .home-page{
                        text-align:center;
                        padding:30px;
                        font-family: Lato;
                        font-size: 30pt;
                    }
                `}
            </style>
        </div>
    )
}

export default Dashboard