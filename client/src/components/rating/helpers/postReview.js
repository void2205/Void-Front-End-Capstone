const axios = require('axios');

const postReview = (reviewObj) => {
  var data = JSON.stringify(reviewObj);
  console.log(reviewObj);

  var config = {
    method: 'post',
    url:  `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews`,
    headers: {
      Authorization: `${process.env.API_KEY}`,
      'Content-Type': 'application/json'
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

module.exports = postReview;
