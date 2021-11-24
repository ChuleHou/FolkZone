const followers = [
    {
        username:'Mack',
        follower:[
            'user1_Mack',
            'user2_Mack',
            'user3_Mack'
        ]
    },
    {
        username:'Zack',
        follower:[
            'user1_Zack',
            'user2_Zack',
            'user3_Zack'
        ]
    },
    {
        username:'Jack',
        follower:[
            'user1_Jack',
            'user2_Jack',
            'user3_Jack'
        ]
    }
]

const getFollower = (req, res) =>{
    const username = req.params.user
    const record = followers.filter((r) => {
        return r.username === username
    })
    res.status(200).send({
        username:username,
        followers:record[0].follower
    })
}

const putFollower = (req, res) => {
    followers.forEach(function(element){
        if(element.username === req.params.user){
            if(element.follower.includes(req.params.user)){
                res.status(401).send("this user already follow "+req.params.user)
            }
            else{
                element.follower.push(req.body.username)
                res.status(200).send({
                    username: req.params.user,
                    followers: element.follower
                })
            }
        }
    })

}

const deleteFollower = (req, res) => {
    followers.forEach(function(element){
        if(element.username === req.params.user){
            if(!element.follower.includes(req.body.follower)){
                res.status(401).send("this user is not a follower of "+req.params.user)
                return
            }
            else{
                element.follower = element.follower.filter((r) =>{
                    return r !== req.body.follower
                })
                res.status(200).send({
                    username: req.params.user,
                    following: element.follower
                })
            }
        }
    })
}

module.exports = (app) => {
    app.get('/following/:user?', getFollower)
    app.put('/following/:user', putFollower)
    app.delete('/following/:user?', deleteFollower)
}