const express = require('express');
const cors = require('cors');
const { User, Patient } = require('./db');
const { addPatient, registerUser } = require('./types');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/getdata', async function(req, res) {
    const data = await Patient.find({});

    res.status(200).json({
        data
    })
});

app.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        const user = await User.find({
            where: {
                username: username,
                password: password
            }
        });

        if (!user) {
            return res.status(401).json({
                msg: "Authentication Failed"
            });
        }

        res.json({
            msg: 'Login successful',
            authToken: authToken
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});

app.post('/addpatient', async (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const tests = req.body.tests;

    const validatePatient = addPatient.safeParse({
        name: name,
        age: age,
        tests: tests
    })

    if (!validatePatient.success) {
        res.status(411).json({
            msg: "Invalid Inputs"
        })
    }

    try {
        await Patient.create({
            name: name,
            age: age,
            tests: tests,
            completed: false
        });
        res.json({
            msg: 'Patient added successfully'
        })
    } catch (error) {
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});

app.post('/register', async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const validateAdmin = registerUser.safeParse({
        username: username,
        password: password
    });

    if (!validateAdmin.success) {
        res.status(411).json({
            msg: "Invalid Inputs"
        })
    }

    try {
        await User.create({
            username: username,
            password: password
        });

        res.json({
            msg: 'User created successfully'
        })
    } catch (error) {
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
})

app.use(function (err, req, res, next) {
    res.json({
        msg: "Something went wrong"
    })
});

app.listen(3000);
