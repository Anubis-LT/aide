import images from "../assets/Images/images.png";
const Content = () => {
   return (
      <div className="container content">
         <div>
            <a href="https://fr.wikipedia.org/wiki/RTFM_(expression)">
               <img src={images} alt="Clic ici" />
            </a>
         </div>
         <div> Courage ... ce n'est que le début ;-)</div>
      </div>
   );
};

export default Content;
