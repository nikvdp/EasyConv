$(document).ready(function () {
        $("#calc").bind("click", function (ev) {
            // a = b
            // x = y
            // x*b = a*y
            var a = Number($('#num1').val());
            var b = Number($('#num2').val());
            var x = Number($('#res1').val());
            var y = Number($('#res2').val());

            var solveForY = function(a,b,x,y) {
            return Number((x*b)/a )
            }
            var solveForX = function(a,b,x,y) {
            return Number((a*y)/b);
            }
            var solveForA = function(a,b,x,y) {
            return Number((x*b)/y);
            }
            var solveForB = function(a,b,x,y) {
            return Number((a*y)/x);
            }


            var empties = 0;
            [a,b,x,y].forEach(function (i) {if (i == 0) empties++;});

            if (empties > 1) 
                alert("Only one zero or empty value allowed!");
            else {
                if (a == 0) 
                    $('#num1').val(solveForA(a,b,x,y));
                if (b == 0) 
                    $('#num2').val(solveForB(a,b,x,y));
                if (x == 0) 
                    $('#res1').val(solveForX(a,b,x,y));
                if (y == 0) 
                    $('#res2').val(solveForY(a,b,x,y));
            }
        });
});

