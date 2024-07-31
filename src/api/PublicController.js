import svgCaptcha from 'svg-captcha'
class PublicController{
constructor(){}
async demo(ctx){
    const captcha=svgCaptcha.create({
        height:38,
        width:100
    });
    ctx.body=captcha.data
}
}
export default new PublicController()