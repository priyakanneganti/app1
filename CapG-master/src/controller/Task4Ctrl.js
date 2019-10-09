MyApp.controller("Task4Ctrl", function ($http) {
    var vm = this;
    vm.data = {
        serviceData: []
    }

    $http.get("/products").then(function(res){
        vm.data.serviceData=res.data;
    },function(){

    });
});