//back-end
function Pet (name, type, age, color) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.color = color;
  this.owner;

}

function Adoptor (firstName, lastName, street, city, state, zip) {
  this.name = firstName + " " + lastName;
  this.address = street + " " + city + ", " + state + " " + zip;
}

//front-end
$(document).ready(function() {
  var pets = [];
  var index = 0;

  $("#addAnimal").submit(function(event) {
    event.preventDefault();
    var name = $("#animalName").val();
    var type = $("input:radio[name=animalType]:checked").val();
    var age = parseInt($("#animalAge").val());
    var color = $("#animalColor").val();

    var newPet = new Pet(name,type,age,color);
    pets.push(newPet);
    $(".animalList").show();

    $("#availableAdoptions").append(
                        '<span class="show-animal"><li>' +
                         newPet.name +
                        '</li></span>')

    $(".show-animal").last().click(function() {

      index = pets.indexOf(newPet);
      $(".displayAnimal").show();
      $(".name").text(newPet.name);
      $(".type").text(newPet.type);
      $(".age").text(newPet.age);
      $(".color").text(newPet.color);
      if (pets[index].owner) {
        $(".status").text("Adopted by: " + pets[index].owner.name + " " + pets[index].owner.address);
        $(".adopt").hide();
      } else {
        $(".status").text("Available for adoption");
        $(".adopt").show();
      }
    })
  })

  $(".adopt").click(function() {
    $(".adoptorInfo").show();
    $("form#adoptionRequest").submit(function(event) {
      event.preventDefault();

      var firstName = $("#firstName").val();
      var lastName = $("#lastName").val();
      var street = $("#street").val();
      var city = $("#city").val();
      var state = $("#state").val()
      var zip = $("#zip").val();

      if (!firstName || !lastName || !street || !city || !state || !zip) {
        alert("Please fill out all information");
      } else {
        var newOwner = new Adoptor(firstName, lastName, street, city, state, zip);
        pets[index].owner = newOwner;
        $(".status").text("Adopted by: " + pets[index].owner.name + " " + pets[index].owner.address);
        $(".adopt").hide();
        $(".adoptorInfo").hide();
      }


    })
  });
})
