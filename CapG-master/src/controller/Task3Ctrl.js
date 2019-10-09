MyApp.controller("Task3Ctrl", function ($scope) {
    var vm = this;
    vm.data = {
        imageList: [],
        rotateBy: 0,
        rotateClass: ""
    }

    var imgCount = 0;
    var tempInputFiles = null;

    $scope.displayImages = function (inputFiles) {
        imgCount = 0;
        vm.data.imageList = [];
        tempInputFiles = inputFiles;
        loadImage()
    }
    vm.rotateImg = function () {
        debugger;
        if(vm.data.rotateBy === 360){
            vm.data.rotateBy=90;
            vm.data.rotateClass="rotate-"+vm.data.rotateBy;
        }else{
            vm.data.rotateBy+=90;
            vm.data.rotateClass="rotate-"+vm.data.rotateBy;
        }
    }

    function loadImage() {

        if (imgCount < tempInputFiles.files.length) {

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
    }

    vm.loadImg = function () {
        var fileInputElement = document.getElementById("txt-files");
        fileInputElement.click();
    }


});