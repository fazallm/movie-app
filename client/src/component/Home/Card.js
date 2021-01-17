import React from 'react'
import {Link} from 'react-router-dom'


const Card = (props)=>{
    const actor = props.data.actors.split(',')
    return(
        <div className="all">
            <div className="image">
                <img src={props.data.imageURL}/>
            </div>
            <div className="body">
                <div className="title">
                    <a>
                        <Link to={`/movie/${props.data.imdb_title_id}`} className="title">
                            {props.data.title}
                        </Link>
                    </a>
                </div>
                <div className="rating">
                    Rating: {props.data.avg_vote}
                </div>
                <div className="meta">
                    Genre: {props.data.genre}<br/>
                    Actor: {actor.slice(0,2).join(',')}
                </div>
            </div>
            <style jsx>
                {`
                    .all{
                        left: 0;
                        position: relative;
                        display: flex;
                        justify-content: flex-start; 
                        border-bottom: 2px solid #C0BBBA;
                        padding: 50px 20px;
                        height: 250px;
                    }
                    .image{
                        padding: 0px 20px;
                    }
                    .rating{
                        font-size:15pt;
                    }
                    a{
                        font-size:30pt;
                        font-family:Nunito;
                        color: black;
                    }
                    .meta{
                        position:absolute;
                        bottom:50px;
                        font-size:20pt;
                        display:inline;
                        justify-content: space-around;
                    }
                `}
            </style>
        </div>
    )
}

export default Card;