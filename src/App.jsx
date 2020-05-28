import React, { Component } from 'react';
import Button from '@material-ui/core/Button'



import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
  {
    name: 'photo1',
    url: "https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-1.2.1&auto=format&fit=crop&w=730&q=80"
  },
  {
    name: 'photo2',
    url: "https://images.unsplash.com/photo-1571301092535-61a418b457dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
  },
  {
    name: 'photo3',
    url: "https://images.unsplash.com/photo-1526815170550-79f226886ef3?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
  }
]
class App extends Component{

  render(){
    const settings = {
      dots: true,
      fade: true,
      infinte: true,
      speed: 400,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      navButtonsAlwaysVisible: true,
      timeout: 100,
      className: "slides"
      


    }
  

//function App() {
  return (

    <div class='pagPrin'>
       
      
      <div class='slider'>
        
      
                
            
      
            
      <div class='header'>
          <div class='header01'>
          
              
         </div>
         <div class='header02'>
              <Button href variant="text" color="dafault">Inicio
               
               </Button>
               <Button variant="text" color="dafault">Nuestra Historia
               
               </Button>
               <Button variant="text" color="dafault">Reuniciones en vivo
               
               </Button>
               <Button variant="text" color="dafault">Eventos
               
               </Button>
               <Button variant="text" color="dafault">Sugerencias
               
               </Button>
               



        </div>
      </div>
      <div class='portada'>
      
        <div class='portada01'>

         <div class='contenedorP'>
        
           <div>
             <p class='idin'>Iglesia Departamental Israel Norte</p>
             
           
            </div>
           <div><p>Tesalonicenses 5:16-18</p>
             <p>Estén siempre alegres, oren sin cesar, den gracias a Dios en toda situación, porque esta es su voluntad para ustedes en Cristo Jesús.</p>
            </div>
           <div class='botonP'>
             
             
             <div class='boton01'><Button variant="text" color="Secondary">En vivo
               
               </Button></div>
             <div class='boton02'><Button variant="text" color="Secondary">En vivo
               
               </Button></div>
             
           </div>
         </div>




        </div>
        <div class='#'></div>
      </div>
      <Slider {...settings}>
                {photos.map((photo)=>{
                  return(
                    
                      <img width='10%' src={photo.url} />
                    
                  )
                })}
      </Slider>
      </div>
      </div>
      

    
 

  );
  
}
}



export default App;
