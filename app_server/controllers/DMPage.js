module.exports.directMessage = function(req, res)
{   res.render('dm', { 
    title: 'Instagram',
    data: [
        {
            username:"meharfatima",
            img:"what",
            incomingMsg:[
                {
                    msg:"mss",
                    date:"23 oct",
                    time:"time"
                }

            ],
            outgoingMsg:[
                {
                    msg:"mss",
                    date:"23 oct",
                    time:"time"
                }

            ]
        }
    ]






})

};