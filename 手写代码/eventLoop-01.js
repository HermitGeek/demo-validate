<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

</body>
<script>
    console.log('start')

    setTimeout(() => {
        console.log('timer1')
        Promise.resolve().then(function () {
            console.log('promise1')
        })
    }, 0)

    setTimeout(() => {
        console.log('timer2')
        Promise.resolve().then(function () {
            console.log('promise2')
        })
    }, 0)

    Promise.resolve().then(function () {
        console.log('promise3')
    })

    console.log('end')
    // node 11: start end promise3 timer1 promise1 timer2 promise2
    // node 10: start end promise3 timer1 timer2 promise1 promise2
</script>


</html>