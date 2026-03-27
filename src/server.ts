import express from 'express';

const app =express();

const PORT= 3000;

app.get('/ping', (req,res)=>{
    res.send('ping pong');
});

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    console.log(`Press ctrl+c to stop the server`);
});