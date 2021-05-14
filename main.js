var images =
["Family Picture.jpg", "Grandfather Picture.jpg", "Grandmother Picture.jpg", "Father Picture.jpg", "Mother Picture.jpg", "Brother Picture.jpg", "Myself Picture.jpg"];

var names =
["My Family", "My Grandfather", "My Grandmother", "My Father", "My Mother", "My Brother", "Me"];

var i = 0;
function update()
{
    i++;
    var number_of_family_members_in_array = 6;
    if( i > number_of_family_members_in_array )
    {
        i = 0;
    }
    var updated_image = images[i];
    var updated_name = names[i];

    document.getElementById("family_member_image").src = updated_image;
    document.getElementById("family_member_name").innerHTML = updated_name;

}