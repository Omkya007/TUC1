const cl=console.log;

games = [
    { id: 1, name: 'football' },
    { id: 2, name: 'tennis' },
    { id: 3, name: 'cricket' },
    { id: 4, name: 'carrom' },
    { id: 5, name: 'snooker' }
  ];

 let sport=games.findIndex(ele=>ele.name==="football")
 cl(sport);


 let sport1=games.findIndex(ele=>ele.id==4)
cl(sport1);

let sport2=games.findIndex(ele=>ele.games)
cl(sport2);


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


  let play=players.findIndex(ele=>ele.name=="Steven Taylor")
  cl(play);


  let play1=players.findIndex(ele=>ele.country="United States")
  cl(play1);

  let play3=players.findIndex(ele=>ele.role="bowler")
  cl(play3)

  
