$('#formLogin').submit(function(e) {
    e.preventDefault();
    var usuario = $.trim($("#usuario").val());
    var password = $.trim($("#password").val());

    if(usuario.length == "" || password.length == ""){
        Swal.fire({
            type:'warning',
            title:'Debe ingresar un usuario y/o password'
        });
        return false;
    }
    else{
        $.ajax({
            url:"bd/login.php" ,
            type:"POST",
            datatype: "json",
            data: {usuario:usuario, password:password},
            success:function(data){
                if(data == "null"){
                    Swal.fire({
                        type:'error',
                        title:'Usuario y/o contraseña incorrecta',
                    });
                }
                else{
                    Swal.fire({
                        type:'success',
                        title:'Bienvenido',
                        confirmButtonColor:'#666',
                        confirmButtonText:'Ingresar'
                    }).then((result) => {
                        if(result.value){
                            window.location.href = "vistas/paginaInicio.php";
                        }
                    })
                }
            }
        });
    }
});

