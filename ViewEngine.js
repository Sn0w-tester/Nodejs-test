const ViewEngine=(app)=>{
    app.set("view engine","ejs")
    app.set("views","./")
    app.get('/ejs', (req, res) =>{
        res.render("test")
    })
}
export default ViewEngine