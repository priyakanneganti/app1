MyApp.controller("Task2Ctrl",function($scope){
    var vm = this;
    vm.data={
        imageList:[]
    }

    var imgCount=0;
    var tempInputFiles=null;
    
    $scope.displayImages=function(inputFiles){
      imgCount=0;
      vm.data.imageList=[];
      tempInputFiles=inputFiles;
      loadImage()
    }

    function loadImage(){
       
       if(imgCount<tempInputFiles.files.length){
         
        if (tempInputFiles.files && tempInputFiles.files[imgCount]) {
            var reader = new FileReader();
            reader.onload = function (e) {
              vm.data.imageList.push(e.target.result);
              $scope.$apply();
              imgCount++
              loadImage();
          }
          reader.readAsDataURL(tempInputFiles.files[imgCount]);
      }
        
       
        
       }
       console.log(vm.data.imageList);
      
    }

    vm.loadImg=function(){
       var fileInputElement=document.getElementById("txt-files");
       fileInputElement.click();
    }


});