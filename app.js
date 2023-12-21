$(document).ready(function() {
    $('#myDescForm').submit(function(event) {
      event.preventDefault();
      var inputValue = $('#myDescInput').val();
      //console.log(inputValue);
      const settings = {
        async: true,
        crossDomain: true,
        url: `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${inputValue}`,
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f13bff4380msh7e79ddbacb97160p1e7830jsnb2cfe74e0f06',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };


    $.ajax(settings).done(function (res) {
        var myDefination = res.definition;
        var trimmedValue = myDefination.replace(/; 2.*/, '');
        console.log(trimmedValue)
    });

    });
  });