const {URL}=require('../model/urlSchema');
const { nanoid } = require('nanoid');
// import { nanoid } from 'nanoid'
const handleUserUrl=async(req,res)=>{
  const body=req.body;
  if(!body.url){
    res.status(400).json({msg:"Url req"});
  }
  const createdId=nanoid(8);
  console.log('NanoId ',createdId);
  const result=await URL.create({
    shortId:createdId,
    redirectUrl:body.url,
    visHistory:[],
  });
  res.status(200).json({msg:'Id generated successfully.'});
}

const handleAllUserUrl=async(req,res)=>{
    const result=await URL.find({});
    res.status(200).json(result);
}

const handleRedirectUrl=async(req,res)=>{
  const userId=req.params.id;
  // console.log('hey',userId);
  const result=await URL.findOneAndUpdate({shortId:userId},{
       $push:{
        visHistory:{timestamps:Date.now()},
       },
  }); 
  console.log(result);
  if(result){
    res.redirect(result.redirectUrl);
  }else{
    res.status(400).json({msg:"Id Not Available"});
  }
}

// handle analytics
const handleUrlAnalytics=async(req,res)=>{
  const userId=req.params.shortId;
  const result=await URL.findOne({shortId:userId});
  res.status(200).json({userTotalClicks:result.visHistory.length});

}

// handle final url
const handleFinalUrl=async(req,res)=>{
  const userId=req.params.shortId;
  // console.log(userId);
  const finalurl='http://localhost:8002/url/'+userId;
  console.log(finalurl);
  res.json({yourUrl:finalurl});

}
module.exports={handleUserUrl,handleAllUserUrl,handleRedirectUrl,handleUrlAnalytics,handleFinalUrl};