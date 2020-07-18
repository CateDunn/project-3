const axios = require ("axios");


module.exports = {
    questions: function(res){
        axios.get('https://api.infermedica.com/covid19/symptoms', {
            headers: {
                "App-Id": 'f3ec44a2', 
                "App-Key": 'ea2e478aeea48ed264c553324544937e' 
            }
         }).then(response => {
           console.log("response", response)
            console.log("response data", response.data)
         }) 
    },
    questionsPost: function(res){
        axios({
            url: 'https://api.infermedica.com/covid19/diagnosis',
            method: 'POST',
            headers: {
              'App-Id': 'f3ec44a2',
              'App-Key': 'ea2e478aeea48ed264c553324544937e'
              //   'Content-Type': 'application/json'
            },
            data: {
              sex: 'male',
              age: 30,
              evidence: []
            }
          })
            .then(response => {
              // response.data.headers['Content-Type'];
              //     console.log("headers", response.data.headers)
              //    console.log("response2", response)
              console.log('response2 data', response.data);
              console.log(response.data.question.items)
              return res.json(response.data)
            })
            .catch(function (error) {
              console.log(error);
              //   console.log('Show error notification!');
            });
                 
}
}






