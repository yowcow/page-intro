import page from 'page'

const el = document.getElementById('main')

page('/',             require('./src/index.es6')(el))
page('/hello',        require('./src/hello.es6')(el))
page('/user/:userId', require('./src/user.es6')(el))
page('*',             require('./src/not-found.es6')(el))

page()
