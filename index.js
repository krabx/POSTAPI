            let button = $('#button')
            let keyId = $('#key_id')
            let currencyPair = $('#currency_pair')
            let dualRing = $('.lds-dual-ring')
                dualRing.hide()
                    function checkInput (){
                        if ((keyId.val() && currencyPair.val()) === '' ){
                            button.attr('disabled','disabled')
                        }
                        else {
                            button.removeAttr('disabled','disabled')
                        }
                    }
                setInterval(checkInput,500)
                    let returnAjax = $('#returnAjax')
                    let form = $('#formAjax')
                    form.submit(function (e){
                        let data = $(this).serialize()
                        $.ajax({
                            url: 'index.php',
                            type: 'POST',
                            data: data,
                            beforeSend: function(){
                                dualRing.show()
                            },
                            success: function (res){
                                returnAjax.addClass("alert alert-secondary")
                                returnAjax.text(res)
                            },
                            error: function (){
                                console.log('error')
                            },
                            complete: function(){
                                dualRing.hide()
                            },
                        })
                        e.preventDefault()
                    })