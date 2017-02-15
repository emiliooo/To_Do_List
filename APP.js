
// var ref = firebase.database().ref('todo-757bf');
// console.log(ref);

    var writeToFile = function (){
            // var fso = new ActiveXObject("Scripting.FileSystemObject");
            // var fh = fso.OpenTextFile("D:\\data.txt", 8);
            // fh.WriteLine(data.id + ',' + data.content);
            // fh.Close(); 

            console.log('sasd');
        };


var newEl = document.getElementById('plus');

newEl.addEventListener('click', writeToFile, false);







  
    var dane = document.getElementById("input_id").value;

    $(document).ready(function(){
        $("#plus").click(function(){
     

            var bla = $('#input_id').val();

                 if(bla.length<1){
                     document.querySelector('.error').style.display = "block";
                 }
                else {

                  $("ul").append("<li> "+bla+" <div class='remove'>  </div></li>"); 
                  document.getElementById("input_id").value = "";
                  document.querySelector('.error').style.display = "none";
                    }



        });
        $(document).on("click", ".remove" , function() {
            $(this).parent().slideUp();
        });
    });



