import getHash from '../utils/getHash';
import getData from '../utils/getData';
const Beer=async()=>{
    const id= getHash();
    const beer= await getData(id);
    console.log(beer);
    const view=`
        <div class="beer_container">
            <div class="beer_container_imagen">
                <img src="${beer[0].image_url}" alt="">
            </div>
            <div class="beer_information">
                <h2>${beer[0].name}</h2>
                <p>${beer[0].description}</p>
                <h3>First brewed</h3>
                <p>${beer[0].first_brewed}</p>
                <h3>ABV</h3>
                <p>${beer[0].abv}</p>
                <h3>Food pairing:</h3>
                    <ul>
            ${beer[0].food_pairing.map(element =>`
                <li>${element}</li>
            `).join('')}
                    </ul>
            </div>
        </div>
    `;
    return view
};
export default Beer;