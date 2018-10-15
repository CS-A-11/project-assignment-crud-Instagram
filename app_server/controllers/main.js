/* GET home page */ 
module.exports.index = function(req, res)
{   res.render('feed', { 
    title: 'Instagram',
    story: [
        {
          name: "meharfatimakhan",
          img: "https://images-na.ssl-images-amazon.com/images/I/41x8JsPOsML.jpg"
        },
        {
          name: "nimraijaz",
          img: "https://images-na.ssl-images-amazon.com/images/I/41x8JsPOsML.jpg"
        },
        {
            name:"minahilimtiaz",
            img: "https://images-na.ssl-images-amazon.com/images/I/41x8JsPOsML.jpg"
        },
        {
            name:"shaheerahmad",
            img: "https://images-na.ssl-images-amazon.com/images/I/41x8JsPOsML.jpg"
        },
        {
            name:"zarfishanwajid",
            img: "https://images-na.ssl-images-amazon.com/images/I/41x8JsPOsML.jpg"
        }
    ],
    allUploads: [
        {
          name: "meharfatimakhan",
          img: "https://images-na.ssl-images-amazon.com/images/I/41x8JsPOsML.jpg",
          likes:0,
          comments:"nice pic"
        },
        {
          name: "nimraijaz",
          img: "https://images-na.ssl-images-amazon.com/images/I/41x8JsPOsML.jpg",
          likes:10,
          comments:"nice pic"
        },
        {
            name:"minahilimtiaz",
            img:"https://images-na.ssl-images-amazon.com/images/I/41x8JsPOsML.jpg",
            likes:20,
            comments:"nice pic"
        },
        {
            name:"shaheerahmad",
            img: "https://images-na.ssl-images-amazon.com/images/I/41x8JsPOsML.jpg",
            likes:30,
            comments:"nice pic"
        },
        {
            name:"zarfishanwajid",
            img: "https://images-na.ssl-images-amazon.com/images/I/41x8JsPOsML.jpg",
            likes:40,
            comments:"nice pic"
        }
    ]
     }); }; 
 