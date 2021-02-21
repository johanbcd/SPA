import getData from '../utils/getData';

const Home=async()=>{
    const beers = await getData();
    const view=`
    <div class="beers_main_container">
    ${beers.map( elemento =>`
        <div class="beers_container">
            <div class="beers_container_img">
                <a href="#/${elemento.id}/">
                    <img src="${elemento.image_url}" alt="">
                </a>
            </div>
            <div class="beers_container_ description">
                <a href="#/${elemento.id}/">
                    <h2 class="beers_title">${elemento.name}</h2>
                </a>
            </div>
        </div>
    `).join('')}
    </div>`;
    return view
};
export default Home;