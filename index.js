const express= require('express')
const app= express();
const  users= require('./MOCK_DATA.json')
const port=process.env.PORT||5000

app.get('/users',(req,res)=>{
    // return res.json(users);
    
    const html=`
    <ul>
        ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>`
    res.send(html)
});
// Latest Version //

app.route('/users/:id')
.get((req,res)=>{
    const id=Number(req.params.id);
    console.log("hello")
    const user=users.find((user)=>user.id===id)
    return res.json(user)
})
.put((_,res)=>{
    return res.json({status: 'Pending'});
})
.patch((_,res)=>{
    return res.json({status: 'Pending'});
})
.delete((_,res)=>{
    return res.json({status: "Pending"});
})

///////////////////Old Version /////////////////////////////


// app.get('/users/:id',(req,res)=>{
//     const id=Number(req.params.id);
//     console.log("hello",1)
//     const user=users.find((user)=>user.id===id)
//     return res.json(user)
// })

// app.post('/users/:id',(req,res)=>{
//     return res.json({status: 'Pending'});
// })

// app.patch('users/:id',(req,res)=>{
//     return res.json({status: 'Pending'})
// })

// app.delete('users/:id',(req,res)=>{
//     return res.json()
// })
app.listen(port,()=>{
    console.log(`Server is running on port:${port}`)
})