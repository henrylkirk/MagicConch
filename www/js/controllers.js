angular.module('magicconch.controllers', ['ionic', 'ionic.closePopup', 'ngCordova'])

.controller('MemeCtrl',function($scope, $ionicPopup, $ionicListDelegate, $cordovaCamera, IonicClosePopupService, Memes){

  $scope.memes = Memes.all(); // get all memes from service

  $scope.imgURI; // stores last photo chosen

  // Choose a photo from device camera
  $scope.choosePhoto = function () {
    var options = {
      quality: 75,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
  };
      $cordovaCamera.getPicture(options).then(function (imageData) {
          $scope.imgURI = "data:image/jpeg;base64," + imageData;
          // alert($scope.imgURI);
      }, function (err) {
          // An error occured. Show a message to the user
      });
  }

  // When a meme is clicked on, it is shown in popup
  $scope.viewMeme = function(meme) {
    $scope.meme = meme; // allows meme data to be accessed by template
    // Custom popup
      var viewPopup = $ionicPopup.show({
         templateUrl: 'templates/viewmeme.html',
         title: meme.title,
         scope: $scope
      });
      IonicClosePopupService.register(viewPopup); // close on background click
  };

  // show popup to get user input & create meme
  $scope.newMeme = function() {
    $scope.data = {};
    $scope.imgURI = "img/default-meme.jpg"; // default image
    // Custom popup
    var createPopup = $ionicPopup.show({
       templateUrl: 'templates/newmeme.html',
       title: 'Create a new meme',
       scope: $scope,
       buttons: [
          {
            type: 'button ion-ios-camera-outline button-calm',
              onTap: function(e) {
                  e.preventDefault(); // prevent alert close if no photo selected
                  $scope.choosePhoto();
              }
          }, 
          {
             text: '<b>I\'m ready!</b>',
             type: 'button button-calm',
                onTap: function(e) {
                   if (!$scope.data.model) {
                      //don't allow the user to close unless he enters model...
                         e.preventDefault();
                   } else {
                      return $scope.data.model;
                   }
                }
          }
       ]
    });
    IonicClosePopupService.register(createPopup); // close on background click
    createPopup.then(function(res) {
      if (res) {
        var topText = document.getElementById("caption-top").value,
        bottomText = document.getElementById("caption-bottom").value;
        // push this meme to table
        $scope.memes.push({title: res, imgURI: $scope.imgURI, captionTop:topText, captionBottom:bottomText});
      }
      console.log(res);
    });    
  };

}) // end MemeCtrl

; // end controllers