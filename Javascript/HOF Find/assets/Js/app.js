const cl=console.log;

games = [
    { id: 1, name: 'football' },
    { id: 2, name: 'tennis' },
    { id: 3, name: 'cricket' },
    { id: 4, name: 'carrom' },
    { id: 5, name: 'snooker' }
  ];

 let id=games.find(sports=>sports.id==2)
 cl(id);

 let names=games.find(name1=>name1.name=="carrom")
 cl(names);


 let players=[
    {
      "name": "Aaron Jones",
      "age": "29 years, 202 days",
      "country": "United States",
      "role": "Batsman"
    },
    {
      "name": "Ali Khan",
      "age": "33 years, 147 days",
      "country": "United States",
      "role": "Bowler"
    },
    {
      "name": "Corey Anderson",
      "age": "33 years, 147 days",
      "country": "United States",
      "role": "All-rounder"
    },
    {
      "name": "Andries Gous",
      "age": "30 years, 166 days",
      "country": "United States",
      "role": "Wicketkeeper-batsman"
    },
    {
      "name": "Harmeet Singh",
      "age": "31 years, 244 days",
      "country": "United States",
      "role": "Bowler"
    },
    {
      "name": "Nitish Kumar",
      "age": "29 years, 353 days",
      "country": "Canada",
      "role": "Batsman"
    },
    {
      "name": "Milind Kumar",
      "age": "33 years, 83 days",
      "country": "United States",
      "role": "Batsman"
    },
    {
      "name": "Sindhu Sriharsha",
      "age": "35 years, 265 days",
      "country": "United States",
      "role": "Wicketkeeper-batsman"
    },
    {
      "name": "Steven Taylor",
      "age": "30 years, 181 days",
      "country": "United States",
      "role": "Batsman"
    },
    {
      "name": "Jessy Singh (Jasdeep Singh)",
      "age": "31 years, 88 days",
      "country": "United States",
      "role": "Bowler"
    }
  ];


  let play=players.find(ele=>ele.age=31)
  cl(play);

  let play1=players.find(ele=>ele.name="Jessy Singh")
  cl(play1);

  let play2=players.find(ele=>ele.role="Bowler")
  cl(play2)
  

  let play3=players.find(ele=>ele.country="Canada")
  cl(play3);