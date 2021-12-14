let currentVisitor=null;
$(document).ready(function(){
    initValidation("#myform");   //in validation.js, should set up submit event handler
    // console.log(visitorsOrig[0]);
    $("#cancelBtn").click(function() {
        if (window.confirm("Are you sure you want to cancel?"))
            loadVisitors()
    })
    //initialize any of your button or other event handlers 
    loadVisitors();
 });
 
 function loadVisitors() {
    //called when 'visitors' menu item is clicked 
    //calls view 'showVisitors' 
    //calls view 'renderTable' 
    // renderTable("#visitorTable", getVisitorData())
    // showList();
    //calls view 'showTable'
 }
 
 function submitForm() {
     //called on form submit. Gets contents of form, creates visitor object, 
     var id = $("#id").val();
     if (id === "") {
        id = 1;
        for (var i=0; i < visitors.length; i++) {
            if (visitors[i].id >= id) {
                id = visitors[i].id + 1;
                
            }
        }
        var firstName = $("#first-name").val();
        var lastName = $("#last-name").val();
        var address = $("#address").val();
        var city = $("#city").val();
        var state = $("#state").val();
        var zip = $("#zip").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        var visitor = new Visitor(id,firstName, lastName,address,city,state,zip,phone,email);
        //calls model 'modelAddVisitor' function
        visitors = modelAddVisitor(visitor);
     }
     else {
        // for (var i=0; i < visitors.length; i++) {
            visitor = findVisitor(id);
            if (visitor.id == id) {
                visitor.firstName = $("#first-name").val();
                visitor.lastName = $("#last-name").val();
                visitor.address = $("#address").val();
                visitor.city = $("#city").val();
                visitor.state = $("#state").val();
                visitor.zip = $("#zip").val();
                visitor.phone = $("#phone").val();
                visitor.email = $("#email").val();
            }
        // }
     }
     //calls view 'renderTable' 
     renderTable("#formVisitors", visitors);
     //calls view 'showTable'
     showTable();

 }
 
 function addVisitor(visitor) {
   //called on 'click' of 'New Visitor' button 
   //calls view 'clearForm' to clear form contents
   clearForm();
   //calls view 'showForm'
   showForm();
 }
 
 function deleteVisitor(id) {
    //called on 'click' of 'delete' icon in visitor list 
    //calls model.js modelDeleteVisitor
    visitors = modelDeleteVisitor(id);
    //calls view 'renderTable' 
    renderTable("#formVisitors", visitors);
    //calls view 'showTable'
    showTable();
 }

 function editVisitor(id) {
     for (var i=0; i < visitors.length; i++) {
         if (visitors[i].id == id) {
            modelUpdateVisitor(visitors[i]);
            showForm();
            break;
         }
     }   
 }