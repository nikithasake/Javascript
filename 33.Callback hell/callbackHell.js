function test(){
    setTimeout(function(){
        console.log("In the step 1")
        setTimeout(function(){
            console.log("In the step 2")
            setTimeout(function(){
                console.log("In the step 3")
                setTimeout(function(){
                    console.log("In the step 4")
                    setTimeout(function(){
                        console.log("In the setp 5")
                    }, 3000)
                }, 3000)
            }, 3000)
        }, 3000)
    }, 3000)
}
test()