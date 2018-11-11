
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
    displayPicture:"https://images-na.ssl-images-amazon.com/images/I/41x8JsPOsML.jpg",
    allUploads: [
        {
          name: "meharfatimakhan",
          img: "https://images-na.ssl-images-amazon.com/images/I/41x8JsPOsML.jpg"
        },
        {
          name: "nimraijaz",
          img: "https://images-na.ssl-images-amazon.com/images/I/41x8JsPOsML.jpg",
          
        },
        {
            name:"minahilimtiaz",
            img:"https://images-na.ssl-images-amazon.com/images/I/41x8JsPOsML.jpg",
            
        },
        {
            name:"shaheerahmad",
            img: "https://images-na.ssl-images-amazon.com/images/I/41x8JsPOsML.jpg",
        },
        {
            name:"zarfishanwajid",
            img: "https://images-na.ssl-images-amazon.com/images/I/41x8JsPOsML.jpg",
        }
    ], 
    slideShow:[
        {
            img:"https://images-na.ssl-images-amazon.com/images/I/41x8JsPOsML.jpg"
        },
        {
            img:"https://images-na.ssl-images-amazon.com/images/I/41x8JsPOsML.jpg"
        },
        {
            img:"https://images-na.ssl-images-amazon.com/images/I/41x8JsPOsML.jpg"
        }

    ]
     }); }; 
 