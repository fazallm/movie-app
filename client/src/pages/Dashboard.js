import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Card from '../component/Home/Card'
import loading from '../static/loading.svg'

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
                {movies.length!==0 ? movies.map(movie=>{
                    return(
                        <Card data={movie}/>
                    )
                    
                }) : <img src={loading} className="loading"/>
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
                    .loading{
                        display: block;
                        margin: 100px auto;
                        width: 150px;
                    }
                `}
            </style>
        </div>
    )
}

export default Dashboard