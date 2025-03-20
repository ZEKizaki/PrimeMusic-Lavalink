

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1003117516668813393", ""], 
  mongodbUri : "mongodb+srv://axo:axoop@cluster0.imckmpc.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "bf5ee2a72bae40ffadc71a47280e5ff9",
  spotifyClientSecret : "053469ffeb3844079fab734ebf30902",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "GlaceYT",
      password: "glaceyt",
      host: "193.226.78.187",
      port:  9372,
      secure: false
    }
  ]
}
