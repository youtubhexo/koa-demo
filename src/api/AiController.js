const Router = require('@koa/router')



const demo1=(ctx) => {
    // ctx.router available
    ctx.body = ('AI赋能开发')
  };
  const demo2= async(ctx) => {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
       resolve('AI赋能开发')
    }, 5000)
  })
    ctx.body = result
  }
  const demo3=(ctx) => {
    const fields = ctx.request.body.fields; // this will be undefined for file uploads
    const files = ctx.request.files;
    console.log('files', JSON.stringify(files, null, 2));
    /*{
      "requestFields": null,
      "requestFiles": {
        "source": {
          "size": 748831,
          "path": "/some-dir/upload_cc1e0c49b97af0b9ef17b7b2f96b307d",
          "name": "avatar.png",
          "type": "image/png",
          "mtime": "2018-07-07T14:16:22.576Z"
        }
      }
    }*/
  
    // respond with the fields and files for example purposes
    ctx.body = JSON.stringify(
      {
        requestFields: fields || null,
        requestFiles: files || null,
      },
      null,
      2,
    );
  };
  

  module.exports={
    demo1,
    demo2,
    demo3
  }