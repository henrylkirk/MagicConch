angular.module('magicconch.services', [])

.factory('Memes', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var memes = [
  	{title:"demoing my app like", imgURI:"img/meme1.jpg", captionTop:"", captionBottom:""},
  	{title:"making the memes was the hardest part", imgURI:"img/meme2.jpg", captionTop:"when you make", captionBottom:"the dankest app"},
  	{title:"when you first meet someone and act all proper", imgURI:"img/meme3.jpg", captionTop:"", captionBottom:""},
  	{title:"looking forward to finals week", imgURI:"img/meme4.jpg", captionTop:"when a test", captionBottom:"isn't multiple choice"},
  	{title:"\"I wanted to make an app that helps people\"", imgURI:"img/meme5.jpg", captionTop:"nobody", captionBottom:"cares"},
  	{title:"my thoughts this Sunday", imgURI:"img/meme6.jpg", captionTop:"let's take ionic", captionBottom:"and push it somewhere else"},
  	{title:"i aM tHe BeSt sPoNgeBoB mEmE", imgURI:"img/meme7.jpg", captionTop:"", captionBottom:""},
    {title:"i aM tHe BeSt sPoNgeBoB mEmE", imgURI:"img/meme8.jpg", captionTop:"", captionBottom:""}
  ];

  return {
    all: function() {
      return memes;
    }
    // ,remove: function(chicken) {
    //   chickens.splice(chickens.indexOf(chickens), 1);
    // },
    // get: function(chickenId) {
    //   for (var i = 0; i < chickens.length; i++) {
    //     if (chickens[i].id === parseInt(chickenId)) {
    //       return chickens[i];
    //     }
    //   }
    //   return null;
    // }
  };
}) // end Memes

; // end services