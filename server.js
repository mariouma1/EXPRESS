const exp=require('express')

const hbs=require('hbs')
const app=exp()
/*app.use(date=(req,res,next)=>{
    console.log(new Date())
    next()
})*/

app.set('view engine',hbs)
app.get('/user/:nom',(req,res)=>{
    res.render('user.hbs',{name:req.params.nom})

})
app.get('/home/',(req,res)=>{
   res.sendFile(__dirname+'/public/home.html')

})
app.get('/ourservices/',(req,res)=>{
    day=new Date()
    time=day.getHours()
    if(time<=17&&time>=8)
    res.sendFile(__dirname+'/public/ourservices.html')
    else 
    res.sendFile(__dirname+'/public/home1.html')
 
 })

 app.get('/contact/',(req,res)=>{
    res.sendFile(__dirname+'/public/contact.html')
 
 })


app.listen(3000,(err)=>{
    if(err)console.log("server is not run")
    else console.log("server is running")
})