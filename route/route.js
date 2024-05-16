const express=require('express');
const { handleUserUrl, handleAllUserUrl,handleRedirectUrl ,handleUrlAnalytics,handleFinalUrl} = require('../controller/user');

const router=express.Router();
router.post('/',handleUserUrl);
router.get('/',handleAllUserUrl);
router.get('/:id',handleRedirectUrl);
router.get('/analytics/:shortId',handleUrlAnalytics);
router.get('/final/:shortId',handleFinalUrl);

module.exports=router;