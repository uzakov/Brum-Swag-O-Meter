

  function predicter(){
    pics = new Array();
    $.get("http://52.10.115.116/api/getTweets.php?query=Brumhack", function(data)
  {
    pics = data;
  });
    console.log(pics);
  }
