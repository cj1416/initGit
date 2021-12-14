class Visitor {
    id;
    firstName;
    lastName;
    address;
    city
    state;
    zip;
    phone;
    email;
    constructor(id, firstName, lastName, address, city, state, zip, phone, email){
       this.id = id;
       this.firstName = firstName;
       this.lastName = lastName;
       this.address = address;
       this.city = city
       this.state = state;
       this.zip = zip;
       this.phone = phone;
       this.email = email;
    }
}
 let visitors=[];
//  let visitorsOrig = [ 
//   new Visitor(1,"Ken","Jenson","1234 W. Main St.","Mapleton","Utah","84664","801-444-5555","ken@gmail.com",{google:true,yahoo:false,friend:true}, "notes"),
//   new Visitor(2,"Ben","Jenson","1234 W. Main St.","Mapleton","Utah","84664","801-444-5555","ben@gmail.com",{google:true,yahoo:false,friend:false}, "notes")
//  ];
 
 function modelAddVisitor(visitor) {
     visitors.push(visitor);
     return visitors;
 }//adds new visitor object to your array}
 function modelDeleteVisitor(id) {
    for (var i=0; i < visitors.length; i++) {
        if (visitors[i].id == id) {
            visitors.splice(i,1);
            break;
        }
    }
    return visitors;
 }//removes visitor object with given 'id' from array}
 function findVisitor(id) {
    for (var i=0; i < visitors.length; i++) {
        if (visitors[i].id == id) {
           return visitors[i];
        }
    }
    return null;
 }//returns visitor object with given 'id' from array}
 function findVisitorIndex(id) {
    for (var i=0; i < visitors.length; i++) {
        if (visitors[i].id == id) {
           return i;
        }
    }
    return null;
 }//returns index in the array of the visitor object with given 'id'.  Handy when trying to delete an object}
//  function modelUpdateVisitor(visitor) {
 function modelUpdateVisitor(visitor) {
     $("#id").val(visitor.id);
     $("#first-name").val(visitor.firstName);
     $("#last-name").val(visitor.lastName);
     $("#address").val(visitor.address);
     $("#city").val(visitor.city);
     $("#state").val(visitor.state);
     $("#zip").val(visitor.zip);
     $("#phone").val(visitor.phone);
     $("#email").val(visitor.email);
}
 //finds and updates a visitor object a your array}   //Only for extra credit 'edit' function

