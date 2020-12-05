let button = $('#button')
let form = $('#formAjax')
    button.click(function (e) {
        form.submit(function (){
            let data = $(this).serialize()
            $.ajax({
                url: "index.php",
                type:"POST",
                data:data,
                success:function (res){
                    console.log(res)
                },
                error:function (){
                    console.log('error')
                }
            })
            e.preventDefault()
        })

    })

