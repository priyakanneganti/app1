MyApp.controller("Task1Ctrl",function(){
    var vm = this;
    vm.data={
        counterValues:[]
    }
    
   

    vm.incrementValue=function(){
       var count = vm.data.counterValues.length+1;

       if(count % 5 === 0 && count % 3 === 0){
         vm.data.counterValues.push("Eagle Creek");
       }
       else if(count % 3 === 0){
         vm.data.counterValues.push("Eagle");
       }
       else if(count % 5 === 0){
          vm.data.counterValues.push("Creek");
       }else{
        vm.data.counterValues.push(count);
       }
       
       
    }


});