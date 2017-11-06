function Pet (name, type, age, color) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.color = color;
  this.owner;
  this.adoptionAvailable = true;
}

function Adoptor (firstName, lastName, street, city, state, zip) {
  this.name = firstName + " " + lastName;
  this.address = street + " " + city + ", " + state + " " + zip;
}

$(document).ready(function() {

  $("#addAnimal").submit(function(event) {
    event.preventDefault();
    var name = $("#animalName").val();
    var type = $("input:radio[name=animalType]:checked").val();
    var age = parseInt($("#animalAge").val());
    var color = $("#animalColor").val();

    var newPet = new Pet(name,type,age,color);

    if (newPet.adoptionAvailable) {
      $("#availableAdoptions").append(
                          '<span class="show-animal"><li>' +
                           newPet.name +
                          '</li></span>')
    }

    $(".show-animal").last().click(function() {
      $(".displayAnimal").show();
      $(".name").text(newPet.name);
      $(".type").text(newPet.type);
      $(".age").text(newPet.age);
      $(".color").text(newPet.color);

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

          var newOwner = new Adoptor(firstName, lastName, street, city, state, zip);
          newPet.owner = newOwner;

          newPet.adoptionAvailable = false;
        })
      });
    })
  })
})
