// Crie a variável canvas
var canvas = new fabric.Canvas('myCanvas')


block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 480;

var block_image_object= "";

// Termine de programar a função new_image() para adicionar uma nova imagem
function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img)
    {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({top: block_y, left: block_x});
        canvas.add(block_image_object);
    }
    
    )
      ;

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
	// Utilize keycode para adicionar a imagem do ranger vermelho (red)
	if(keyPressed == '76') 
	{

        block_x = 10;
        new_image('luffy.png');
        console.log('L')

	}
	// Utilize keycode para adicionar a imagem do ranger verde (green)
	if(keyPressed == '90')
	{

        block_x = 310;
        new_image('zoro.webp');
        console.log('Z')

	}
	// Utilize keycode para adicionar a imagem da ranger amarela (yellow)
	if(keyPressed == '78')
	{

        block_x = 560;
        new_image('nami.png');
        console.log('N')

	}
	// Utilize keycode para adicionar a imagem da ranger rosa (pink)
	if(keyPressed == '83')
	{
	
        block_x = 880;
        new_image('sanji feih.png');
        console.log('S')

	}
	// Utilize keycode para adicionar a imagem do ranger azul (blue)
	if(keyPressed == '85')
	{

        block_x = 1040;
        new_image('usopp.png');
        console.log('U')

	}
	
}
