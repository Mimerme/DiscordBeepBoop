# DiscordBeepBoop
Neato Discord Server Bot

## Config.js
You'll probably need to setup config.js in the root of the project, otherwise you'll get a runtime error.

This is how it should look like

```
{
    "clientId" : <client_id>,
    "clientSecret" : <client_secret>,
    "discordUsername" : <discord_email_used_to_log_in>,
    "discordPassword" : <discord_passasd>
}
```

## Dependencies / Set Up
The bot requires the following dependencies

- Spotify Web Api Node
- Discord.js

Install With

```
npm install --save discord.js spotify-web-api-node
```

Discord.js requires Node 6
