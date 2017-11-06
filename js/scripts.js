
function Pet (name, type, age, color) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.color = color;
  this.adoptionAvailable = true;
}

// Pet.prototype.

$(document).ready(function() {

  $("#addAnimal").submit(function(event) {
    event.preventDefault();
    var name = $("#animalName").val();
    var type = $("input:radio[name=animalType]:checked").val();
    var age = parseInt($("#animalAge").val());
    var color = $("#animalColor").val();

    var newPet = new Pet(name,type,age,color);


    $("#availableAdoptions").append(
                        '<span class="show-animal"><li>' +
                         newPet.name +
                        '</li></span>')

    $(".show-animal").last().click(function() {
      $(".displayAnimal").show();
      $(".name").text(newPet.name);
      $(".type").text(newPet.type);
      $(".age").text(newPet.age);
      $(".color").text(newPet.color);
    });

  })
})
