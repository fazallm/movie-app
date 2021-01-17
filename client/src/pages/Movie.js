import React, {useState, useEffect} from 'react';
import axios from 'axios'
import star from '../static/star.png'
import {useParams} from 'react-router-dom'
import loading from '../static/loading.svg'
import _ from 'lodash'

const Movie = (props)=>{
    const param = useParams()
    const [data,setData] = useState({})
    useEffect(()=>{
        const fetch = async (id)=>{
            const result = await axios.get(`/api/v1/movie/${id}`)
            setData(result.data)
        }
        fetch(param.id)
    },[])

    return(
        <div>
            {!_.isEmpty(data)?
            <div className="container">
                <div className="image-container">
                    <img src={data.imageURL} className="image"></img>
                </div>
                <div className="details">
                    <div className="title">
                        {data.title}({data.year})
                    </div>
                    <div className="small">
                        <div classname="rating-container">
                            <img src={star} className="star"/>
                            <div className="rating">{data.avg_vote}</div>
                        </div>
                        <div className="booking">
                            <a href="https://www.gv.com.sg/" target="_blank">
                            <button className="book-button">BOOK</button>
                            </a>
                        </div>
                    </div>
                    <div className="info">
                        <div className="key">
                            Release:
                        </div>
                        <div className="value">
                            {data.date_published}
                        </div>
                    </div>
                    <div className="info">
                        <div className="key">
                            Country:
                        </div>
                        <div className="value">
                            {data.country}
                        </div>
                    </div>
                    <div className="info">
                        <div className="key">
                            Duration:
                        </div>
                        <div className="value">
                            {data.duration} m
                        </div>
                    </div>
                    <div className="info">
                        <div className="key">
                            Actor:
                        </div>
                        <div className="value">
                            {data.actors}
                        </div>
                    </div>
                    <div className="info">
                        <div className="key">
                            Director:
                        </div>
                        <div className="value">
                            {data.director}
                        </div>
                    </div>
                    <div className="info">
                        <div className="key">
                            Writer:
                        </div>
                        <div className="value">
                            {data.writer}
                        </div>
                    </div>
                    <div className="info">
                        <div className="key">
                            Production:
                        </div>
                        <div className="value">
                            {data.production_company}
                        </div>
                    </div>
                    <div className="desc">
                        <div className="key">
                            Description:
                        </div>
                        <div className="value">
                            {data.description}
                        </div>
                    </div>
                </div>
            </div> : <img src={loading} className="loading"/>}
            <style jsx>
                {`
                    .container{
                        padding: 50px;
                        display: flex;
                        justify-content: flex-start;
                    }
                    .image{
                        height:400px;
                        padding: 50px;
                    }
                    .title{
                        padding:50px 0px;
                        font-size:50pt;
                        font-family:Lato;
                    }
                    .small{
                        display: flex;
                        justify-content: flex-start;
                    }
                    .rating-container{
                        width:180px;
                        display: flex;
                        justify-content: flex-start;
                    }
                    .rating{
                        font-size: 30pt;
                        padding-bottom: 0px;
                    }
                    .star{
                        height:50px;
                    }
                    .info{
                        margin:20px 0px;
                        display: flex;
                        justify-content: flex-start;
                        font-size:20pt;
                    }
                    .key{
                        font-weight: 600;
                        margin-right:20px;
                    }
                    .desc{
                        font-size:20pt;
                    }
                    .booking{
                        padding-left:100px;
                    }
                    .book-button{
                        width:100px;
                        border-radius: 12px;
                        background-color: red;
                        color: white;
                        font-size: 20pt;
                        font-family: Nunito;
                        boder: 2px solid black;
                        cursor:pointer;
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

export default Movie