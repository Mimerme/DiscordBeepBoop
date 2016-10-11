const Discord = require('discord.js');
const client = new Discord.Client();
const needs_join = true;
const invite = "https://discord.gg/vnQh5";
const music_play = ".music play ";

var config = require("./config.json");

var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({clientId: config.clientId, clientSecret: config.clientSecret});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

client.on('ready', () => {
    console.log('I am ready!');
    if (needs_join) {
        //Joi code here TODO
    }
});

client.on('message', message => {
    console.log(message.content);

    if (message.content.includes(".spotify ")) {
        message.reply("PLAYING SPOTIFY PLAYLIST")
        message.reply("choosing 5 random songs")

        let split = message
            .content
            .split(" ");
        spotifyApi
            .clientCredentialsGrant()
            .then(function (data) {
                var token = data.body['access_token'];
                spotifyApi.setAccessToken(data.body['access_token']);

                console.log(token);
                spotifyApi.setAccessToken(token);
                spotifyApi.getPlaylistTracks(split[1], split[2])
                    .then(function (data) {
                        var length = data.body.items.length;
                        for (let i = 0; i < 5; i++) {
                            let asdasd = getRandomInt(0, length);
                            let e = data.body.items[asdasd]
                            message
                                .channel
                                .sendMessage(music_play + e.track.name + " from " + e.track.album.name);
                        }
                    }, function (err) {
                        console.log('Something went wrong!', err);
                    });
            });

    }

    if (message.content.includes("spotify:")) {
        message.reply("PLAYING SPOTIFY PLAYLIST")
        message.reply("choosing 5 random songs")

        let split = message
            .content
            .split(":");

        spotifyApi
            .clientCredentialsGrant()
            .then(function (data) {
                var token = data.body['access_token'];
                spotifyApi.setAccessToken(data.body['access_token']);

                console.log(token);
                spotifyApi.setAccessToken(token);
                spotifyApi.getPlaylistTracks(split[2], split[4])
                    .then(function (data) {
                        var length = data.body.items.length;
                        for (let i = 0; i < 5; i++) {
                            let asdasd = getRandomInt(0, length);
                            let e = data.body.items[asdasd]
                            message
                                .channel
                                .sendMessage(music_play + e.track.name + " from " + e.track.album.name);
                        }
                    }, function (err) {
                        console.log('Something went wrong!', err);
                    });
            });
    }

});

client.login(config.discordUsername, config.discordPassword);