/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var accounts = [];



var f = (function () {
    var Cname = "";
    var Cdeposite = 0;



    function create() {
        Cname = Fname.value;
        Cdeposite = deposite.value;
        var Cdata = "";

        var account = {name: Cname, amount: Cdeposite};


        accounts.push(account);

        for (var i = 0; i < accounts.length; i++) {
            Cdata += accounts[i].name + " " + accounts[i].amount + "\n";
        }
        data.value = Cdata;
    }
    return {
        x: create
    };
})(); 