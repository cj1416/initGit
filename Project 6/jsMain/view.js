function renderTable(containerId, visitors) {
    $(containerId).html("");
    var table = "<table id = 'visitorLog'><tr><th>Name</th><th>Address</th><th id = phoneHeader>Phone</th><th id = emailHeader>Email</th><th id = actionHeader>Action</th></tr>";
                      
    for (var i=0; i < visitors.length; i++){
        table += "<tr><td>" + visitors[i].firstName + " " + visitors[i].lastName + "</td><td>" + visitors[i].address + "</td><td>" + visitors[i].phone + "</td><td>" + visitors[i].email + 
        "</td><td><button id = deleteButton onclick='deleteVisitor("+visitors[i].id+")'>Delete</button>" + 
        "<button id = editButton onclick='editVisitor("+visitors[i].id+")'>Edit</button></td></tr>";
    }
    table += "</table>"
    $(containerId).append(table);
    
}//renders table from global 'visitors' object array}

    function showVisitors()  {
        $("#formVisitors").show(); 
        $("#formContainer").hide();
    }//shows visitor container and hides all other site content containers }
    function showTable() {
        $("#myform").hide(); 
        $("#visitorLog").show();
        $("#editingOptions").show();
    }//shows visitor list and hides form }
    function showForm() {
        $("#myform").show();      
        $("#visitorLog").hide();
        $("#editingOptions").hide();
    }//shows visitor form and hides list }
    
    function clearForm() {
        $("#id").val("");
        $("#first-name").val("");
        $("#last-name").val("");
        $("#address").val("");
        $("#city").val("");
        $("#state").val("");
        $("#zip").val("");
        $("#phone").val("");
        $("#email").val("");
    }//clears values on inputs so next time form is loaded they don't have old contents}