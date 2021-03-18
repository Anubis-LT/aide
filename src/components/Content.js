import images from "../assets/Images/images.png";
const Content = () => {
   return (
      <div className="container content">
         <div>
            <a href="https://fr.wikipedia.org/wiki/RTFM_(expression)">
               <img src={images} />
            </a>
         </div>
         <div> courage ... ce n'est que le début ;-)</div>
      </div>
   );
};

export default Content;
