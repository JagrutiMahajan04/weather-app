import express  from "express";

const app = express();
app.use(express.json());

app.get('/book',(req,res)=>{
      const title = req.query.title;
    res.json({
        title:"title",
        description:"Physcis is the natural science."
    })
//d5511abf7a9efe13e05e7389dd6c4690

    app.post('/add', (req,res)=>{

        const {a, b} = req.body;

        const sum = a+b;
        res.json({
            sum : sum
        })

    })

})


app.listen(5000, ()=>{
    console.log('Server is running on port 5000');
})