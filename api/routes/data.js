const express =  require('express');

const router = express.Router();


//Respond with initial object
router.get('/:initial', (req, res, next) => {
    res.status(200).json(
        [
            {
               "id":"p1",
               "active":true,
               "LH":1,
               "RH":1
            },
            {
               "id":"p2",
               "active":false,
               "LH":1,
               "RH":1
            }
         ]
    );
});



router.post('/', (req, res, next) => {
    const move = {
        id: req.body.id,
        active: req.body.active,
        LH: req.body.LH,
        RH: req.body.RH
    }
    
    res.status(201).json({
        message: 'Handling POST request to /response',
        move: move
    });
});

module.exports = router;