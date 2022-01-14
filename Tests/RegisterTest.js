module.exports = { 
    "Register Test": browser => {
        let randomNamegenerator = Math.ceil(Math.random().toString()*10000000) 
        browser 
        .url("https://dev3.diamondcbd.com/user/register")
        .setValue('#edit-mail', randomNamegenerator+'@mail.com')
        .setValue('#edit-pass-pass1','123456')
        .setValue('#edit-pass-pass2','123456')
        .click('#edit-submit')
        .pause(3 * 1000)
    }
}


