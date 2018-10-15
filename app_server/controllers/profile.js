module.exports.profilePage = function(req, res)
{   res.render('profile', { 
    title: 'Insta Profile',
    username:"meharfatimakhan",
    bio:"CS Student at FAST",
    followers:3,
    following:3,
    posts:5,
    uploadss:[
            {
                img:"https://i.ytimg.com/vi/mSnMTMlJzME/maxresdefault.jpg"
            },
            {
                img:"https://i0.wp.com/glamconscious.fr/wp-content/uploads/2017/03/emma-watson-mode-ethique-instagram-header.jpg?resize=1050%2C500"
            },
            {
                img:"http://los40mx00.epimg.net/los40/imagenes/2017/03/08/lacorneta/1488928608_327425_1488928900_noticia_normal.jpg"
            },
            {
                img:"https://i2.wp.com/theralphretort.com/wp-content/uploads/emma-watson-the-women-of-harry-potter-harry-potter-1939381811.jpg?resize=455%2C256&ssl=1"
            },
            {
                img:"https://s.libertaddigital.com/2013/05/16/emma-watson.jpg"
            }
        ]
    });
};