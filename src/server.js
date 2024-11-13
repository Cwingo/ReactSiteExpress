const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3002;

// Array of game schedule data
const schedule = [
    {
        "_id": 1,
        "team": "Western Kentucky",
        "logo": "imageslogos/wku.png",
        "date": "August 31, 2024",
        "location": "Tuscaloosa, Ala.",
        "result": "W, 63-0"
    },
    {
        "_id": 2,
        "team": "South Florida",
        "logo": "imageslogos/usf.png",
        "date": "September 7, 2024",
        "location": "Tampa, Fla.",
        "result": "W, 42-16"
    },
    {
        "_id": 3,
        "team": "Georgia",
        "logo": "imageslogos/georgia.jpeg",
        "date": "September 14, 2024",
        "location": "Athens, Ga.",
        "result": "W, 41-31"
    },
    {
        "_id": 4,
        "team": "Wisconsin",
        "logo": "imageslogos/wisconsin.png",
        "date": "September 21, 2024",
        "location": "Madison, Wis.",
        "result": "W, 42-10"
    },
    {
        "_id": 5,
        "team": "Vanderbilt",
        "logo": "imageslogos/vanderbilt.png",
        "date": "September 28, 2024",
        "location": "Nashville, Tenn.",
        "result": "L, 40-35"
    },
    {
        "_id": 6,
        "team": "South Carolina",
        "logo": "imageslogos/South_Carolina_Gamecocks_logo.svg.png",
        "date": "October 5, 2024",
        "location": "Tuscaloosa, Ala.",
        "result": "W, 27-25"
    },
    {
        "_id": 7,
        "team": "Tennessee",
        "logo": "imageslogos/tennessee.png",
        "date": "October 12, 2024",
        "location": "Knoxville, Tenn.",
        "result": "17-24"
    },
    {
        "_id": 8,
        "team": "LSU",
        "logo": "imageslogos/lsu.webp",
        "date": "October 19, 2024",
        "location": "Baton Rouge, La.",
        "result": "42-13"
    },
    {
        "_id": 9,
        "team": "Missouri",
        "logo": "imageslogos/missouri_tigers_football.png",
        "date": "October 26, 2024",
        "location": "Columbia, Mo.",
        "result": "34-0"
    },
    {
        "_id": 10,
        "team": "Auburn",
        "logo": "imageslogos/Auburn-Tigers-Logo.png",
        "date": "November 2, 2024",
        "location": "Tuscaloosa, Ala.",
        "result": "Upcoming"
    },
    {
        "_id": 11,
        "team": "Mercer",
        "logo": "imageslogos/mercer.webp",
        "date": "November 16, 2024",
        "location": "Tuscaloosa, Ala.",
        "result": "Upcoming"
    },
    {
        "_id": 12,
        "team": "Oklahoma",
        "logo": "imageslogos/Oklahoma-Sooners-logo.png",
        "date": "November 30, 2024",
        "location": "Norman, Okla.",
        "result": "Upcoming"
    }
];

// Serve static files (CSS, images) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get the schedule
app.get('/api/schedule', (req, res) => {
    res.json(schedule);
});

// Home route with information on available API endpoints
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the Alabama Football Schedule API</h1>
        <p>Available endpoints:</p>
        <ul>
            <li><a href="/api/schedule">/api/schedule</a> - Get the full game schedule</li>
        </ul>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
