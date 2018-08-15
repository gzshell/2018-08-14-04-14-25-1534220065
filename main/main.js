module.exports = function main(num) {
    var arr = num.split('');
    var led = {
        up :   ["._.","...","._.","._.","...","._.","._.","._.","._.","._."],
        mid :  ["|.|","..|","._|","._|","|_|","|_.","|_.","..|","|_|","|_|"],
        down : ["|_|","..|","|_.","._|","..|","._|","|_|","..|","|_|","..|"]
    }
    var l = arr.length;
    let u="";
    let m="";
    let d="";

    for (var i=0; i<l; i++){
        if (i<l-1){
            u=u+led.up[arr[i]]+" ";
            m=m+led.mid[arr[i]]+" ";
            d=d+led.down[arr[i]]+" ";
        }
        else{
            u=u+led.up[arr[i]]+"\n";
            m=m+led.mid[arr[i]]+"\n";
            d=d+led.down[arr[i]]+"\n";
        }
    }
    let out=u+m+d;
    return out;

};