const express = require('express')
const {MongoClient} = require('mongodb');
const cors = require('cors')

const uri = "mongodb+srv://root:test1234@movie-booking.skd0z.mongodb.net/sample_movies?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true }, );


const app = express()
const env = process.env.NODE_ENV



const router = express.Router()
app.use(cors())
router.get('/movie', (req,res)=>{
    client.connect(err=>{
        if (err){
            res.status(500)
            res.send({error: err})
        }else{
            const collection = client.db("sample_movies").collection("movies")
        collection.find().sort({avg_value:-1}).toArray((err, result)=>{
            // console.log(result)
            if (err){
                res.status(500)
                res.send({error:err})
            }else{
                res.send(result)
            }
        })
        }
    })
})

router.get('/movie/:id', (req,res)=>{
    const {id} = req.params
    client.connect(err =>{
        if (err){
            res.status(500)
            res.send({error: err})
        }else{
            const collection = client.db("sample_movies").collection("movies")
            console.log(id)
            collection.findOne({imdb_title_id:id}, (err,result)=>{
                if (err){
                    res.status(500)
                    res.send({error:err})
                }else{
                    res.send(result)
                }
            })
        }
        
    })
})

app.use('/api/v1', router)
if (env === 'production') {
    // Set static folder
    app.use(express.static('../client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

module.exports= app;