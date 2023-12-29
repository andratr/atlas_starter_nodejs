const { MongoClient } = require("mongodb");
const exampleData = [
  {
    username: "jaycb64",
    timeAgo: "21h",
    text: `Summoning the Threads Gaming community at large - show me your Christmas video game hauls!`,
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    replies: 14,
    likes: 34,
    images: [
      "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww",
    ],
  },
  {
    username: "brfootball",
    timeAgo: "17h",
    text: "Rasmus Højlund after 𝐟𝐢𝐧𝐚𝐥𝐥𝐲 scoring his first Premier League goal: “I am the happiest man in the world right now”",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    replies: 7,
    likes: 962,
    images: [
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww",
    ],
  },
  {
    username: "thatericalper",
    timeAgo: "12h",
    text: "Dolly Parton in the 70s",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    replies: 13,
    likes: 765,
    images: [
      "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
  },
  {
    username: "carriescubby",
    timeAgo: "22h",
    text: "Miss you sweet Lollipup.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    replies: 3,
    likes: 14,
    images: [""],
  },
  {
    username: "__passionatefoodie__",
    timeAgo: "1d",
    text: "Plum cake",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    replies: 1,
    likes: 27,
    images: [
      "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg",
    ],
  },
  {
    username: "realmadridxtra",
    timeAgo: "11h",
    text: "Legends ❤️",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    replies: 1,
    likes: 144,
    images: ["https://i.redd.it/jeuusd992wd41.jpg"],
  },
  {
    username: "ingenangiven",
    timeAgo: "17h",
    text: "Stunned to learn that hotel “stars” indicate the number and type of amenities offered by the hotel, not the quality of the hotel. A “three-star” hotel isn’t necessarily better than a “two-star” hotel.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    replies: 8,
    likes: 76,
    images: [""],
  },
  {
    username: "davidbcooper",
    timeAgo: "1d",
    text: "My brother in law got me this, so expect the intelligence of my character blog posts to go up DRAMATICALLY next year.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    replies: 4,
    likes: 80,
    images: [""],
  },
  {
    username: "smallstepfinance",
    timeAgo: "14h",
    text: "Joe & Kari are 30 & earn $125,000 annually. They have a 4% 401k employer match. They have a 2-year old child & 1 cat. They contribute 10% to a 401k & max out a Roth IRA. By age 65, they’ll have $5.2 million invested. They will retire with a paid off house, debt free, & get paid $208,000 annually. Middle-class millionaires in the making.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    replies: 17,
    likes: 97,
    images: [""],
  },
  {
    username: "dollish.exe",
    timeAgo: "20h",
    text: "Just longpressed 300lbs 🖤",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    replies: 5,
    likes: 20,
    images: [
      "https://lh3.googleusercontent.com/hwau7OVWx96XaME5KpRuJ0I_MscrerK6SbRH1UwYHYaxIDQQtn7RZK02LDSfBzCreidFgDsJeXyqDct6EZiH6vsV=w640-h400-e365-rj-sc0x00ffffff",
    ],
  },
  {
    username: "lapsingluddite",
    timeAgo: "16h",
    text: "SUMMERJOURNEY 🐝💜",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    replies: 2,
    likes: 63,
    images: [""],
  },
  {
    username: "sebacestaro",
    timeAgo: "18h",
    text: "New places",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    likes: 100,
    images: [""],
  },
  {
    username: "chialga",
    timeAgo: "12h",
    text: "Dragon merch for next year Art Threads",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    replies: 1,
    likes: 13,
    images: [
      "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg",
      "https://miro.medium.com/v2/resize:fit:1400/1*TzaiFDmkiEkOxNU7eG43pw.jpeg",
    ],
  },
];

const uri =
  "mongodb+srv://andratrandafir:ASlshkV1ZP48aIUS@database.mcxiylv.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();

    const database = client.db("database"); // Replace with your actual database name
    const postsCollection = database.collection("posts");

    // Insert example data into the "posts" collection
    await postsCollection.insertMany(exampleData);

    console.log("Example data inserted successfully!");
  } finally {
    await client.close();
  }
}

run().catch(console.error);
