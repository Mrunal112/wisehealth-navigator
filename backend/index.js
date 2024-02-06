const express = require('express');
const cors = require('cors');
const { User, Patient } = require('./db');
const { addPatient, registerUser } = require('./types');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/getdata', async function (req, res) {
    const data = await Patient.find({});

    res.status(200).json({
        data
    })
});

app.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        const user = await User.findOne({
            username: username,
            password: password
        });

        if (!user) {
            return res.status(401).json({
                msg: "Authentication Failed"
            });
        }

        res.json({
            msg: 'Login successful'
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

    try {
        // const validatePatient = addPatient.safeParse({ name, age, tests });

        // if (!validatePatient.success) {
        //     return res.status(400).json({
        //         error: validatePatient.error.message
        //     });
        // }

        await Patient.create({
            name,
            age,
            tests,
            completed: false
        });

        res.json({
            msg: 'Patient added successfully'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});

app.put('/updateinfo', async (req, res) => {
    const name = req.body.name;

    try {
        const updatedPatient = await Patient.updateOne({ name }, { completed: true });
        res.status(200).json({ msg: 'Patient updated successfully' });
    } catch (error) {
        console.error('Error updating patient:', error);
        res.status(500).json({ error: 'Internal Server Error' });
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
