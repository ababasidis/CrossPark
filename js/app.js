
angular.module('starter', [])

.controller('HomeController', ['$scope','$interval',function($scope, $interval) {
  $scope.counter=10;

  var vm = this; 

  var slides = [
    'url(img/cheesecake.jpg)',
    'url(img/crosspark_corner.jpg)',
    'url(img/primerib.jpg)',
    'url(img/counter.jpg)',
  ];

  $scope.fadeIn = function() {
    
      // console.log('init!');
      $('#background-image').fadeIn(5000, function() {
        console.log('fade in');

      });
  }

  $scope.fadeOut = function() {
    $('#background-image').fadeOut(5000);
    console.log('fade out');
  }

  vm.slide = slides[0];
    $interval(function(){
      if(vm.slide == slides[0]) {
          $scope.fadeIn();
          vm.slide = slides[1];
          $scope.fadeOut();
          
      } else if(vm.slide == slides[1]) {
        $scope.fadeIn();
        vm.slide = slides[2];
        $scope.fadeOut();
      } else if(vm.slide == slides[2]) {
        $scope.fadeIn();
        vm.slide = slides[3];
        $scope.fadeOut();
      } else {
        $scope.fadeIn();
        vm.slide = slides[0];
        $scope.fadeOut();
      }
    }, 10000, 0);


    $interval(function(){
      $scope.counter--;
    }, 1000, 0);

}])

.controller('LocationController', ['$scope',function($scope) {

}])

.controller('MenuController', ['$scope','$interval',function($scope, $interval) {
    var vm = this; 

  var slides = [
    'url(img/primerib.jpg)',
    'url(img/wrap.jpg)',
    'url(img/fishfry.jpg)',
    'url(img/burger.jpg)',
    'url(img/cheesecake.jpg)'
  ];

  $scope.fadeIn = function() {
    
      // console.log('init!');
      $('#background-image').fadeIn(5000, function() {
        console.log('fade in');

      });
  }

  $scope.fadeOut = function() {
    $('#background-image').fadeOut(5000);
    console.log('fade out');
  }

  vm.slide = slides[0];
    $interval(function(){
      if(vm.slide == slides[0]) {
          $scope.fadeIn();
          vm.slide = slides[1];
          $scope.fadeOut();
          
      } else if(vm.slide == slides[1]) {
        $scope.fadeIn();
        vm.slide = slides[2];
        $scope.fadeOut();
      } else if(vm.slide == slides[2]) {
        $scope.fadeIn();
        vm.slide = slides[3];
        $scope.fadeOut();
      } else if(vm.slide == slides[3]) {
        $scope.fadeIn();
        vm.slide = slides[4];
        $scope.fadeOut();
      } else {
        $scope.fadeIn();
        vm.slide = slides[0];
        $scope.fadeOut();
      }
    }, 10000, 0);
}]);


var level2 = ['Select age','16','17','18','19','20','21+'];
var level3 = ['Select position','Busser/Dishwasher','Host/Hostess','Waiter/Waitress','Cook'];

//settings on page load
function init() {
  /*
    Create State Select dropdown menu
  */
  var stateList = ["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID", "IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY", "OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"];
  var mySelects = document.getElementById('stateselects');
  for (var i=0; i<stateList.length; i++) {
    var newOption = document.createElement('option');
    newOption.value=i;
    newOption.text=stateList[i];
    mySelects.appendChild(newOption);
  }
  submit.style.visibility='hidden';
  /*
    Browser redirect
    if not IE11, Firefox, Chrome or Safari (i.e. Netscape)
  */
  /*
  var browserName=navigator.appName; 
  if (browserName!="Netscape"){ 
    document.location.href="redirect.html";
  } */
}//end init()

//function to add second level of selects - AGE
function addAgeSelect(selectedOption) {
  var myDiv = document.getElementById("menuSelects");
  var selects = document.getElementById('selects');
  var value = selects.options[selects.selectedIndex].value;

  //check if new select already exists
  var check = document.getElementById('newSelect');
  var check2 = document.getElementById('citizenshipinput');
  if(check==null) {
    //if non-US citizen
    if(value==2) {
      //create node to specify citizenship
      var linebreak = document.createElement('br');
      var citizenlabel = document.createElement('label');
      var text = document.createTextNode("Country of Citizenship");
      citizenlabel.id='citizenlabel';
      citizenlabel.appendChild(text);
      citizenlabel.setAttribute('class','label');
      var newInput = document.createElement('input');
      newInput.id = 'citizenshipinput';
      newInput.setAttribute('type','text');
      newInput.setAttribute('class','input_width_full');
      var newDiv = document.getElementById('citizen-select');
      newDiv.appendChild(citizenlabel);
      newDiv.appendChild(newInput);
    } else if(value==0) {
      alert("Please select a menu!");
    } //end if statements
    //create new select element
    var newSelect = document.createElement('select');
    newSelect.id='newSelect';
    newSelect.setAttribute('name','age');
    newSelect.setAttribute('onchange', 'addJobSelect(this.selectedIndex)');
    var newagelabel = document.createElement('label');
    var text = document.createTextNode("Age ");
    newagelabel.id='newagelabel';
    newagelabel.appendChild(text);
    newagelabel.setAttribute('class','label');
    var newDiv = document.getElementById('age-select');
    newDiv.appendChild(newagelabel);
    newDiv.appendChild(newSelect);  
    //for every value in list create option
    for (var i=0; i<level2.length; i++) {
      //set options for level 2 select (ages)
      var newOption = document.createElement('option');
      var c = 15 + i; 
      newOption.id = "newOption";
      newOption.value=c;
      newOption.text=level2[i];
      newSelect.appendChild(newOption);
    }
  } else {
    //if the element exists, remove it and rerun addAgeSelect()
    var check3 = document.getElementById('newSubSelect');
    var check4 = document.getElementById('newInput');
    var check5 = document.getElementById('newInput2');
    if(check2) {
      document.getElementById('citizenlabel').remove();
      check2.remove();
    }
    document.getElementById('newerlabel').remove();
    check3.remove();
    document.getElementById('worklabel').remove();
    check4.remove();
    document.getElementById('cooklabel').remove();
    check5.remove();
    document.getElementById('newagelabel').remove();
    check.remove();
    addAgeSelect(value);
  } //end if check null
}//end addAgeSelect()

//function to add third level of selects - POSITION
function addJobSelect(selectedOption) {
  var myDiv = document.getElementById("menuSelects");
  var selects = document.getElementById('newSelect');
  var value = selects.options[selects.selectedIndex].value;

  //check if new select already exists
  var check = document.getElementById('newSubSelect');
  if(check==null) {
    //create new select element
    var newlabel = document.createElement('label');
    var text = document.createTextNode("Position ");
    newlabel.id='newerlabel';
    newlabel.appendChild(text);
    newlabel.setAttribute('class','label');
    var newSubSelect = document.createElement('select');
    newSubSelect.id='newSubSelect';
    newSubSelect.setAttribute('name','position');
    newSubSelect.setAttribute('onchange', 'createAppForm(this.selectedIndex)');
    var newDiv = document.getElementById('pos-select');
    newDiv.appendChild(newlabel);
    newDiv.appendChild(newSubSelect);

    //set options for level 3 select (position)
    if((value==16) || (value==17) ) {
      //if age = 16 or 17
      for (var i=0; i<4; i++) {
        var newOption = document.createElement('option');
        newOption.value=i;
        newOption.text=level3[i];
        newSubSelect.appendChild(newOption);
      }
    } else if((value==18)||(value==19)||(value==20)||(value==21)) {
      //if age = 18, 19, 20, or 21+
      for (var i=0; i<level3.length; i++) {
        var newOption = document.createElement('option');
        newOption.value=i;
        newOption.text=level3[i];
        newSubSelect.appendChild(newOption);
      }
    } else if (value==0) {
      alert("Please select a Position");
    }//end if statements
  }  else {
    var check2 = document.getElementById('newInput');
    var check3 = document.getElementById('newInput2');
    document.getElementById('newerlabel').remove();
    check.remove();
    if(check2!=null) {
      document.getElementById('worklabel').remove();
      check2.remove();
      document.getElementById('cooklabel').remove();
      check3.remove();
    } 
    addJobSelect(value);
  }//end if check null
}//end addJobSelect()

//function to add elements to application 
function createAppForm(selectedOption) {
  var newForm = document.getElementById('menuSelects');
  var selects = document.getElementById('newSubSelect');
  var value = selects.options[selects.selectedIndex].value;
  //check if new input field already exists
  var check = document.getElementById('newInput');
  var newDiv = document.getElementById('comment');

  if(check==null){
    //create first element
    var worklabel = document.createElement('label');
    var text = document.createTextNode("Employment History");
    worklabel.id="worklabel";
    worklabel.appendChild(text);
    worklabel.setAttribute('class','label');
    var newInput = document.createElement('textarea');
    newInput.id = 'newInput';
    newInput.setAttribute('type','text');
    newInput.setAttribute('name','newInput');
    newInput.setAttribute('placeholder','Please indicate any past employers as well as any experience...');
    newInput.setAttribute('rows','4');
    newDiv.appendChild(worklabel);
    newDiv.appendChild(newInput);
    //create second element
    var cooklabel = document.createElement('label');
    cooklabel.id="cooklabel";
    var cookInput = document.createElement('textarea');
    cookInput.id = 'newInput2';
    cookInput.setAttribute('type','text');
    cookInput.setAttribute('name','newInput2');
    cookInput.setAttribute('placeholder','Please descibe your work ethic and how you would contribute to our team...');
    cookInput.setAttribute('rows','4');
    newDiv.appendChild(cooklabel);
    newDiv.appendChild(cookInput);

    var cooktext = document.createTextNode("Work Experience");
    cooklabel.appendChild(cooktext);

    var check_input = document.createElement('input');
    check_input.setAttribute('type','checkbox');
    check_input.setAttribute('name','check');
    check_input.setAttribute('id','check');
    check_input.setAttribute('onclick','showSubmit()');
    var check_label = document.createElement('label');
    check_label.setAttribute('class','check_label');
    check_label.setAttribute('for','check');
    var info = document.createTextNode('I verify that I am fit for this position and have the legal right to work in the United States');
    check_label.appendChild(info);
    newDiv.appendChild(check_input);
    newDiv.appendChild(check_label);
  }//end if check null
}//end createAppForm()

function showSubmit() {
    submit.style.visibility='visible';
}
//function to submit cookies
function submitCookies() {
  var fname = document.forms["newForm"]["firstname"].value;
  var lname = document.forms["newForm"]["lastname"].value;
  var phone = document.forms["newForm"]["phone"].value;
  var email = document.forms["newForm"]["email"].value;
  var joboption = document.getElementById('newSubSelect');
  var jb = joboption.options[joboption.selectedIndex].text;
  var validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //if statements
    if (fname == null || fname == "" || lname == null || lname == "") {
        alert("Please fill in First and Last name");
        return false;
    } else if (phone==null || phone=="" || phone.length < 10) {
      alert("Phone must be ten digit number with area code");
      return false;
    } else if (validateEmail.test(email))  {
      //save data to local storage for thank you page
    localStorage.setItem("firstname",fname);
      localStorage.setItem("lastname",lname);
      localStorage.setItem("phone",phone);
      localStorage.setItem("email",email);
      localStorage.setItem("job",jb);
    return true;
  } else {
    alert("Please enter a valid Email");
  }//end if statements
}//end submitCookies()

//function to display personal thank you page
function complete() {
  //get info from local storage
  var phoneDiv = document.getElementById('phonefield');
  var emailDiv = document.getElementById('emailfield');
  var jobDiv = document.getElementById('jobfield');
  var myTitle = document.getElementById('thankstitle');
  var fname = localStorage.getItem('firstname');
  var phone = localStorage.getItem('phone');
  var email = localStorage.getItem('email');
  var job = localStorage.getItem('job');
  var name = document.createTextNode(fname);
  var phn = document.createTextNode(phone);
  var eml = document.createTextNode(email);
  var jb = document.createTextNode(job);
  myTitle.appendChild(name);
  phoneDiv.appendChild(phn);
  emailDiv.appendChild(eml);
  jobDiv.appendChild(jb);
}//end complete()