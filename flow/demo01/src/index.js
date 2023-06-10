// @flow

let obj: {} = {
    name: 1
};

http.createServer(function (req, res) {
 m1 (req, res) {
    m2 (req, res) {
        m3 (req, res) {}
    }
 }
})

http.createServer(function (req, res) {
    console.log('m1')
    m1 (req, res) {
        console.log('m2')
        m2 (req, res) {
            m3 (req, res) {
                console.log('m3')
                res.end('hello')
            }
        }
        console.log('m2 end')
    }
    console.log('m1 end')
})