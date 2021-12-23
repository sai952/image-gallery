const { response } = require('express');
const express = require('express');


const router = express.Router();


const EmpModel = require('../models/employee_model');
const ImageModel = require('../models/image_schema');
//const EmpModel = require('../models/employee_schema');


/*

*/
router.post('/register', (req, res) => {

    const empobj = new EmpModel({
        empname: req.body.empname,
        empemail: req.body.empemail,
        empmobile: req.body.empmobile,
        empdob: req.body.empdob,
        emppass: req.body.emppass,
        empgender: req.body.empgender,
        empcountry: req.body.empcountry,
        empaddress: req.body.empaddress,
    });
    
    empobj.save()
        .then(inserteddocument => {
            res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' + '<br\>' + inserteddocument);
        })
        .catch(err => {
            res.status(500).send({ message: err.message || 'Error in Employee Save ' })
        });
}
);

router.delete('/remove/:emailid', (req, res) => {
    EmpModel.remove({ "empemail": req.params.emailid })
        .then(deleteddocument => {
            if (deleteddocument != null) {
                res.status(200).send('DOCUMENT DELETED successfully!' + deleteddocument);
            }
            else {
                res.status(404).send('INVALID EMP ID ' + req.params.empid);
            }
        }) 
        .catch(err => {
            return res.status(500).send({ message: "DB Problem..Error in Delete with id " + req.params.empid });
        })
}
); 


router.get('/search/:emailid', (req, res) => {
    EmpModel.find({ "empemail": req.params.emailid })
        .then(getsearchdocument => {
            if (getsearchdocument.length > 0) {
                res.send(getsearchdocument);
            }
            else {
                return res.status(404).send({ message: "Note not found with id " + req.params.empid });
            }
        }) 
        .catch(err => {
            return res.status(500).send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
        })
}
);


router.get('/', (req, res) => {
    EmpModel.find()
        .then(getalldocumentsfrommongodb => {
            res.status(200).send(getalldocumentsfrommongodb);
        }) 
        .catch(err => {
            res.status(500).send({ message: err.message || 'Error in Fetch Employee ' })
        });
}     
);

router.post('/logincheck', (req, res) => {
    
    EmpModel.find({ "empemail": req.body.empemail, "emppass": req.body.emppass })
        .then(getsearchdocument => {
            if (getsearchdocument.length > 0) {
                res.send(getsearchdocument);
            }
            else {
                return res.status(404).send({ message: "Note not found with id " + req.params.empid });
            }
        }) 
        .catch(err => {
            return res.status(500).send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
        })
}
);


router.put('/update', (req, res) => {

    EmpModel.findOneAndUpdate({ "empemail": req.body.empemail },
        {
            $set: {
                "empmobile": req.body.empmobile,
                "emppass": req.body.emppass,
                "empaddress": req.body.empaddress
            }
        }, { new: true })
        .then(getupdateddocument => {
            if (getupdateddocument != null)
                res.status(200).send('DOCUMENT UPDATED ' + getupdateddocument);
            else
                res.status(404).send('INVALID EMAILID ' + req.body.empemail);
        }) 
        .catch(err => {
            return res.status(500).send({ message: "DB Problem..Error in UPDATE with id " + req.params.empid });
        }) 
} 
); 



router.post('/upload', (req, res) => {

    const ImageObj = new ImageModel({
        title: req.body.title,
        catagory: req.body.catagory,
        img_path: req.body.img_path,
        authorname: req.body.authorname,
        authoremail: req.body.authoremail,
    })

    ImageObj.save()
        .then(inserteddocument => {
            res.status(200).send('Image INSERED IN MONGODB DATABASE' + '<br\>' + inserteddocument);
        })
        .catch(err => {
            res.status(500).send({ message: err.message || 'Error in News Upload ' })
        });
} 
); 

router.get('/viewall/:uid', (req, res) => {
    ImageModel.find({ "authoremail": req.params.uid })
        .sort({ "createdAt": -1 })
        .then(getsearchdocument => {
            
            if (getsearchdocument.length > 0) {
            
                res.send(getsearchdocument);
            }
            else {
                return res.status(404).send({ message: "Email-Id or Password Not Matched" });
            }
            
        })
        .catch(err => {
            res.status(500).send({ message: err.message || 'Error in Fetch News ' })
        })
})

router.delete('/remove1/:emailid', (req, res) => {
    ImageModel.findOneAndRemove({ "authoremail": req.params.emailid })
        .then(deleteddocument => {
            if (deleteddocument != null) {
                res.status(200).send('DOCUMENT DELETED successfully!' + deleteddocument);
            }
            else {
                res.status(404).send('INVALID EMP ID ' + req.params.empid);
            }
        }) 
        .catch(err => {
            return res.status(500).send({ message: "DB Problem..Error in Delete with id " + req.params.empid });
        })
}
); 
router.get('/image',(req,res)=> {
    ImageModel.find()
    .then(deleteddocument=> {
            res.status(200).send(deleteddocument);
    
    })
    .catch(err=>{
        res.status(500).send(err)
    })
})

module.exports = router;