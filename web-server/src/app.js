

const path=require('path')
const express=require('express');
const hbs=require('hbs')
const app=express();
const publicDirectoryPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
res.render('index', {
title: 'ExpressApp',
name: 'Archie'
})
})

app.get('/about', (req, res) => {
res.render('about', {
title: 'About Me',
name: 'Archie'
})
})

app.get('/about/*',(req,res)=>
{
    res.render('404',
    {
        title:'404',
        name:'Archie',
        errormessage:"About page not found"
    })
})

app.get('/help', (req, res) => {
res.render('help', {
helpText: 'This is some helpful text.',
title: 'Help',
name: 'Archie'
})
})

app.get('/help/*',(req,res)=>
{
    res.render('404',
    {
        title:'404',
        name:'Archie',
        errormessage:"Help page not found"
    })
})


app.get('/intro', (req, res) => {
    res.render('intro', {
    helpText: 'This is some introductory text.',
    title: 'Intro',
    name: 'Archie'
    })
    })

    app.get('/intro/*',(req,res)=>
{
    res.render('404',
    {
        title:'404',
        name:'Archie',
        errormessage:"Intro page not found"
    })
})


app.get('/history', (req, res) => {
    res.render('history', {
    helpText: 'This is some historical text.',
    title: 'History',
    name: 'Archie'
    })
    })

    app.get('/history/*',(req,res)=>
    {
        res.render('404',
        {
            title:'404',
            name:'Archie',
            errormessage:"History page not found"
        })
    })
    

app.get('*',(req,res)=>
    {
        res.render('404',
        {
            title:'404',
            name:'Archie',
            errormessage:"No page found"
        })
    })


app.listen(8000, () => {
console.log('Server is up on port 8000.')
})
