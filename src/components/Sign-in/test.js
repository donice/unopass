axios({
   method: 'post',
   url: 'https://unopass-api.herokuapp.com/login/token',
   data: {
      username:"testing@gmail.com", 
      password :"password"},
   headers: {
      'Content-Type': 'multipart/form-data' 
   }
   })
   
   .then(function (response) {
       //handle success
       console.log(response.data);
   })
   .catch(function (response) {
       //handle error
       console.log(response);
   });