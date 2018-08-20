function Person(id,name,address,title){
 this.id=id;
 this.name= name;
  this.address= address;
  this.title= title;
}
function Address(street,state){
  this.street=street;
  this.state=state;
}
function Name(first,last){
  this.first=first;
  this.last=last;
}

let person = []
function myFunction(){
event.preventDefault();
  let at= document.getElementById("id").value;
  let nameFirst= document.getElementById("first").value;
  let nameLast= document.getElementById("last").value;
  let addStreet= document.getElementById("street").value;
  let addState= document.getElementById("state").value;
  let addTitle= document.getElementById("title").value;

var p = new Person(at,new Name(nameFirst,nameLast) ,new Address(addStreet,addState),addTitle)

person.push(p)

document.getElementById("form").reset()

}

function compare(a,b)
{
  let nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
  let nameB = b.name.first.toUpperCase();
// sorting the array by First Name
  if (nameA< nameB) return -1; if (nameA > nameB) return 1; return 0; }

$(() => {
    //console.log(person)
$("#print").click(function() {
  $("div#prints").empty()
person.sort(compare)
  for( let i=0;i<person.length;i++)
  {
// appending the list to  div
    $("div#prints").append("<p> <b>id  </b> " + person[i].id +"</p>" + "<p> <b>Name  </b>" + "</p>" +  "<p><b> First  :</b>" + person[i].name.first + "</p>"  + "<p><b> Last  :</b>" +  person[i].name.last+"</p>" +
  "<p> <b>Address  </b>" +"</p>"  +"<p> <b>Street  :</b>" +   person[i].address.street  +"</p>" + "\n"+ "<p> <b>State  :</b>" + person[i].address.state+"</p>" +"<p><b> Title  : </b>" + person[i].title +"</p>")
}
})
})
