export default function FruitsList(fruits){

   /* const DisplayFruits = function(){         //Premier methode

            return fruits.map(function (fruitt){
             return <li> {fruitt}</li>

})}*/
const DisplayFruits = ()=> fruits.map(fruitt => <li>{fruitt}</li>)      //2eme methode
    
    return <>

<h1> Fruits :</h1>
    <ul>
     {DisplayFruits()}
     </ul>
   
</>}