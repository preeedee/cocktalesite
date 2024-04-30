const menu = [
    {name:'Irish coffee',type:'Irish Whiskey',price:"8.00-23.00$",image:"coffee.png",sweet:3,tart:0,bitter:3,detail:'Smooth Irish whiskey blended with rich coffee, topped with velvety cream, creating a decadent and warming treat for any occasion.'},
    {name:'Manhattan',type:'Whiskey',price:"12.00-25.00$",image:"Manhattan.png",sweet:1,tart:3,bitter:4,detail:'Rye whiskey, sweet vermouth, a dash of bitters, stirred to perfection, garnished with a cherry. Timeless sophistication in a glass.'},
    {name:'Bourbon Mojito',type:'Bourbon Whiskey',price:"7.00-15.00$",image:"Bourbon Mojito.png",sweet:3,tart:4,bitter:0,detail:'A refreshing twist on the classic with bourbon, mint, lime, and soda, offering a flavorful burst of summer vibes.'},
    {name:'Creamsicle Punch',type:'Vodka',price:"11.00-20.00$",image:"Creamsicle Punch.png",sweet:5,tart:3,bitter:0,detail:'A nostalgic blend of orange juice, vanilla vodka, soda, and cream, reminiscent of the classic frozen treat. Refreshingly creamy!'},
    {name:'Moscow mule',type:'Vodka',price:"8.00-31.00$",image:"Moscow Mule.png",sweet:1,tart:1,bitter:4,detail:'Vodka, ginger beer, and lime juice served in a mug, delivering a zesty, effervescent, and timeless cocktail.'},
    {name:'Green Dream',type:'Vodka',price:"7.00-19.00$",image:"Green Dream.png",sweet:1,tart:5,bitter:1,detail:'Vibrant and refreshing blend of Midori melon liqueur, sour mix, and fresh lime, delivering a sweet-tart flavor sensation.'},
    {name:'EL diable',type:'Telquila',price:"11.00-35.00$",image:"EL diablo.png",sweet:3,tart:4,bitter:0,detail:'A spicy-sweet delight featuring tequila, ginger beer, lime, and crème de cassis, delivering a fiery and refreshing experience.'},
    {name:'Blue lagoon',type:'Telquila',price:"15.00-32.00$",image:"blue.png",sweet:4,tart:3,bitter:2,detail:'A tropical escape with vodka, blue curaçao, and lemonade, garnished with a cherry. Refreshing, vibrant, and irresistibly exotic.'},
    {name:'Margarita',type:'Telquila',price:"12.00-28.00$",image:"Margarita.png",sweet:1,tart:4,bitter:2,detail:'Smooth Irish whiskey blended with rich coffee, topped with velvety cream, creating a decadent and warming treat for any occasion.'},
    {name:'Classic gin and tonic',type:'Gin',price:"7.00-19.00$",image:"Classic Gin Tonic.png",sweet:1,tart:3,bitter:3,detail:'Rye whiskey, sweet vermouth, a dash of bitters, stirred to perfection, garnished with a cherry. Timeless sophistication in a glass.'},
    {name:'Martini',type:'Gin',price:"11.00-31.00$",image:"Martini.png",sweet:0,tart:2,bitter:3,detail:'A refreshing twist on the classic with bourbon, mint, lime, and soda, offering a flavorful burst of summer vibes.'},
    {name:'Rum Nehroni',type:'Rum',price:"11.00-31.00$",image:"Rum Nehroni.png",sweet:2,tart:1,bitter:5,detail:'A nostalgic blend of orange juice, vanilla vodka, soda, and cream, reminiscent of the classic frozen treat. Refreshingly creamy!'},
    {name:'Mojito',type:'Rum',price:"8.00-25.00$",image:"Mojito.png",sweet:3,tart:4,bitter:1,detail:'Vodka, ginger beer, and lime juice served in a mug, delivering a zesty, effervescent, and timeless cocktail.'},
    {name:'Brandy sour',type:'Brandy',price:"8.00-25.00$",image:"Brandy Sour.png",sweet:2,tart:4,bitter:3,detail:'Vibrant and refreshing blend of Midori melon liqueur, sour mix, and fresh lime, delivering a sweet-tart flavor sensation.'},
    {name:'French 95',type:'Brandy',price:"17.00-38.00$",image:"French 95.png",sweet:2,tart:2,bitter:4,detail:'A spicy-sweet delight featuring tequila, ginger beer, lime, and crème de cassis, delivering a fiery and refreshing experience.'},
    {name:'White russian',type:'Liqueur',price:"15.00-28.00$",image:"White Russian.png",sweet:4,tart:0,bitter:2,detail:'A tropical escape with vodka, blue curaçao, and lemonade, garnished with a cherry. Refreshing, vibrant, and irresistibly exotic.'}
]

const tools=[
    {name:'Cocktails Strainer',number:'03',detail:'Used to separate solid ingredients or ice from liquid when pouring a cocktail from a mixing glass or shaker into a serving glass. It prevents ice shards, fruit chunks, herbs, or other solid ingredients from entering the final drink.',type:['Boston shaker (two-piece),','cobbler shaker (three-piece),','or Parisian shaker (French-style).'],how:['Add ingredients to the shaker tin or glass.','Seal the shaker with the lid securely.','Hold with both hands and shake vigorously for 10-15 seconds','Strain the cocktail into a glass using a Hawthorne strainer or fine mesh strainer.'],image:'tools-18.png'},
    {name:'Muddler',number:'07',detail:'Used to crush and extract flavors from fruits, herbs, and spices. Typically made of wood, metal, or plastic, muddlers come in various shapes and sizes, but most have a flat bottom and a handle.',type:'',how:['Place the ingredients in the bottom of the mixing glass or shaker','Press and twist the muddler gently to release the flavors without damaging the ingredients.'],image:'tools-23.png'},
    {name:'Bar Spoon',number:'08',detail:'A specialized spoon used in cocktail making, typically longer than a regular spoon. It usually measures around 10 to 12 inches in length, with a twisted handle and a small bowl at the end.',type:'',how:['To mix cocktails directly in the glass, ensuring even distribution of ingredients and flavors.','They\'re also used for layering drinks, where different liquids are carefully poured over one another to create visually appealing and layered cocktails.','Simply hold the spoon by its handle and insert it into the cocktail glass, then gently stir or layer as desired, using a smooth and controlled motion.'],image:'tools-25.png'}
]

const toolMobileData=[
    [{name:'Bar Strainer',number:'01',detail:'Used for straining cocktails that are stirred or built directly in the serving glass.',image:'tools-16.png'},
    {name:'Garnish Tools',number:'02',detail:'Skewers or toothpicks used to hold garnishes such as fruit, olivers, or cocktail onions.',image:'tools-17.png'}],
    [{name:'Cocktail Shaker',number:'03',detail:'Used for straining cocktails that are stirred or built directly in the serving glass.',image:'tools-18.png'},
    {name:'Ice Scoop',number:'04',detail:'Used to add ice to cocktails without touching it with hands, maintaining cleanliness and hygiene.',image:'tools-19.png'}],
    [{name:'Citrus Juicer',number:'05',detail:'Manual or electric tool used to extract juice from citrus fruits such as lemons and limes.',image:'tools-20.png'},
    {name:'Strainer',number:'06',detail:'Its over the mouth of a shaker tin to strain out ice and solid ingredients.',image:'tools-21.png'}],
    [{name:'Garnish Tools',number:'07',detail:'Skewers or toothpicks used to hold garnishes such as fruit, olives, or cocktail onions.',image:'tools-22.png'},
    {name:'Mallet & Lewis',number:'08',detail:'Used for crushing ice cubes into smaller, more manageable pieces for cocktails.',image:'tools-23.png'}],
    [{name:'Muddler',number:'09',detail:'Used to crush and extract flavors from fruits, herbs, and spices.',image:'tools-24.png'},
    {name:'Bar Spoon',number:'10',detail:'Features a long handle for stirring cocktails and layering ingredients.',image:'tools-25.png'}]
]

const starters=[
    {topic:'First mention of the word \"cock-tail\"',detail:'It was in the decades and centuries prior to 1800 that the artform of the Mixed Drink was evolving. Instead of recipes for individual drinks, the pattern was to created mixed drink "categories".',image:['pre1.jpg','pre2.jpg']},
    {topic:'\"cocktail\" first appearing in print in 1803',detail:'The cocktail comes onto the scene in the beginning of the 1800\'s and very gradually begins to get noticed. The concept of "mixed drink categories" was still prevalent, but over time would lose its luster.',image:['dawn1.jpg','dawn2.jpg']},
    {topic:'From a Printed Definition to a Forbidden Fruit',detail:'Entering into this era, the cocktail is still just "yet another" mixed drink category, which isn\'t necessarily seen as being any more important than the others, but that changes quickly. ',image:['gold1.jpg','gold2.jpg']},
    {topic:'Prohibition Doesn\'t Mean No One is Drinking it',detail:'The "Great Cocktail Lobotomy" descends upon the US. During this decade the art and craft of the cocktail is all but forgotten, in the US anyway. Many American bartenders go to Europe where they can continue serving cocktails.',image:['american1.jpg','american2.jpg']},
    {topic:'Witnessed a cocktail revival, with Tiki and the Martini competing',detail:'With Prohibition over, the general public attempted to reestablish their pursuits of the well-turned drink, but too much had been forgotten, and too many bad habits had been formed. The birth of Tiki almost reminds us of the craft of the cocktail, but it eventually becomes a façade of itself. Renewed interest in the Martini tries to remind us of what we had forgotten, but the Vodka Martini turns it into little more than an alcohol delivery vehicle.',image:['','']},
    {topic:'\"Moonwalk\" cocktail in honor of the Apollo 11',detail:'The cocktail turns comical. Many eschew cocktails since they see them as "what their parents used to drink", and those who eventually do partake, favor the syrupy sweet beverages which remind them of their childhood.',image:['','darkage.jpg']},
    {topic:'A resurgence of interest in classic cocktails',detail:'The decade leading up to 2000 saw a slowly growing interest in rediscovering the cocktail. There was a small, but dedicated group of individuals who began to dig into the long forgotten cocktailian craft as it existed prior to Prohibition and would set the stage for giving the cocktail a greater exposure.',image:['redis1.jpg','redis2.jpg']},
    {topic:'The innovations of cocktails',detail:'In the early 2000s, Milk & Honey and Zig Zag Café kicked off the craft cocktail movement. Events like "A Tribute to Professor Jerry Thomas" and the founding of Tales of the Cocktail showcased cocktail culture\'s rise. The Museum of the American Cocktail and Regans\' Orange Bitters #6 added to the momentum. By 2014, cocktail trends were mapped through Estately Blog\'s state-by-state rankings.',image:['revival1.jpg','revival2.jpg']}
]


const bottles=[
    [{
        name:'Brandy',
        detail:'Brandy is a spirit distilled from fermented fruit juice, most but also from other fruits like apples or pears',
        image:'images/starter/Bottle/Bottle-01.png',
        percent:'35% to 60%',
        price:'$13-245'
    },
    {
        name:'Gin',
        detail:'Gin is a distilled spirit that is made from grain and flavored with botanicals. It is most noted for its pine flavor due to its main ingredient, juniper berries.',
        image:'images/starter/Bottle/Bottle-02.png',
        percent:'36% to 50%',
        price:'$24-109'
    }],
    [{
        name:'Tequila',
        detail:'Tequila is a distilled spirit made from the agave plant that can only be produce in certain regions of Mexico.',
        image:'images/starter/Bottle/Bottle-03.png',
        percent:'50% to 51%',
        price:'$50-150'
    },
    {
        name:'Rum',
        detail:'Rum is a liquor distilled from sugar. The sugar may be either pure cane sugar, a syrup, or molassses',
        image:'images/starter/Bottle/Bottle-04.png',
        percent:'36% to 50%',
        price:'$10-40'
    }],
    [{
        name:'Vodka',
        detail:'The name vodka originates from the Russian word "voda," meaning water.',
        image:'images/starter/Bottle/Bottle-05.png',
        percent:'40% to 95%',
        price:'$10-125'
    },
    {
        name:'Whisky',
        detail:'Whisky or Whiskey is a type of liquor made from fermented grain mash. Whisky is typically aged in wooden casks.',
        image:'images/starter/Bottle/Bottle-06.png',
        percent:'40% to 50%',
        price:'$27-270'
    }],

]

const levelBar=(data,size)=>{
    let html=''
    for(let i=0;i<5;i++){
        i<data? html+=`<div style="width:${size}rem; height:${size/4}rem; background:#FAF6EA;"></div>`:html+=`<div style="width:${size}rem; height:${size/4}rem; background:#8B9B86"></div>`;
    }
    return '<div style="display:flex;gap:0.2rem">'+html+'</div>';
}


const menuOver=(index)=>{
    let menuItem=document.querySelector(`#menuItem-${index}`)
    let price_bar=document.querySelector(`#price-bar-${index}`)
    price_bar.innerHTML=`
        <div style="animation:fade 1s;margin:1rem 0 0 0.5rem">
            <p class="fontOverused" style="animation:fade 1s;margin:0.3rem 0 0.3rem 0;">Sweetness</p>
            ${levelBar(menu[index].sweet,2)}
            <p class="fontOverused" style="animation:fade 1s;margin:0.3rem 0 0.3rem 0;">Tart/Citrusy</p>
            ${levelBar(menu[index].tart,2)}
            <p class="fontOverused" style="animation:fade 1s;margin:0.3rem 0 0.3rem 0;">Bitter</p>
            ${levelBar(menu[index].bitter,2)}
        </div>
    `
    
    menuItem.lastElementChild.remove()
    let detail=document.createElement('p')
    detail.innerText=menu[index].detail
    detail.style.padding='1rem'
    detail.style.fontFamily='Overused Grotesk Light'
    menuItem.appendChild(detail)
}

const menuOut=(index)=>{
    let test=document.getElementsByClassName('menu-list')
    let menuItem=document.querySelector(`#menuItem-${index}`)
    let price_bar=document.querySelector(`#price-bar-${index}`)
    price_bar.innerHTML=`<p class="fontOverused" style="margin:1rem 0 0 0.5rem;">${menu[index].price}</p>`
    menuItem.lastElementChild.remove()
    let pic=document.createElement('img')
    pic.src=`/images/menu/${menu[index].image}`
    pic.style.objectFit='cover'
    menuItem.appendChild(pic)
    console.log(test[index])
}



let droplist = document.createElement('div')
const list=document.getElementsByClassName('timeline-items')
const mouseOver=(index)=>{
    droplist.innerHTML=`
    <div style="animation:fade 1s;padding:1rem; display:grid; grid-template-columns:40% 30% 30%;justify-content:evenly;  gap:2rem; width:100%;">
        <div style="animation:fade 1s;display:flex; flex-direction:column; justify-content:space-between;">
            <h3 class="fontOverused" style="animation:fade 1s;font-size:2rem; margin:0; font-weight:100;font-style:normal">${starters[index].topic}</h3>
            <p class="fontOverused" style="animation:fade 1s;font-size:1rem; margin:0;font-style:normal">${starters[index].detail}</p>
        </div>
        <div>${starters[index].image[0]? `<img src="images/timeline/${starters[index].image[0]}" style="animation:fade 1s;padding-left:1rem; float:right;width:25rem;height:12rem;object-fit:cover;border-radius:0.5rem">`:''}</div>
        ${starters[index].image[1]? `<img src="images/timeline/${starters[index].image[1]}" style="animation:fade 1s;padding-left:1rem; width:25rem;height:12rem;object-fit:cover;border-radius:0.5rem">`:''}
    </div>
    `

    list[index].lastElementChild.appendChild(droplist)
    list[index].lastElementChild.setAttribute('class','drop-down')
}



const mouseOut=(index)=>{
    list[index].lastElementChild.setAttribute('class','test')
    list[index].lastElementChild.firstElementChild.remove()
}

var page=0
let bottleDisplay=document.getElementById('right-container');
const changeSlide=()=>{
    bottleDisplay.innerHTML=`
    <button onclick="prevSlide()" class="fontOverused" style="cursor:pointer;color:#4D644F;position: absolute; top: 30%; font-size: 2rem; background: none; border:none">&lt;</button>
    <button onclick="nextSlide()" class="fontOverused" style="cursor:pointer; color:#4D644F;position: absolute; left:95%; top: 30%; font-size: 2rem; background: none; border:none">&gt;</button>
    <div style="; ${mobile.matches? '':'border-left: solid 1px black;'}">
        <div style="margin:1rem 2rem 0 0;float:right;background:#415E43; border-radius:5rem;padding:0rem 1rem 0rem 1rem; width:fit-content">
            <h3 class="fontOverused" style="font-size:1.2rem;margin:0;text-align:center;color:white;font-weight: 100;">${bottles[page][0].percent}</h3>
            <p class="fontOverused" style="font-size:0.6rem;color:white;margin:0 0 0.3rem 0;">Concentration of Alcohol</p>
        </div>
        <img src="${bottles[page][0].image}" style="object-fit:cover; width:100%; margin-bottom:2rem">
        <div>
            <h3 id="name1" class="fontItalic" style="font-weight:100; color:#4D644F;font-size:2rem;border-bottom: solid 1px black;border-top: solid 1px black; padding:1rem 0.5rem 0.5rem 1rem;margin:0;">${bottles[page][0].name}</h3>
            <div class="fontOverused" style="font-size:1rem;display:flex; justify-content:space-between;padding:1rem">
                <p style="width:70%">${bottles[page][0].detail}</p>
                <p style="">${bottles[page][0].price}</p>
            </div>
        </div>
    </div>
    <div style="s; border-left: solid 1px black;">
        <div style="margin:1rem 2rem 0 0;float:right;background:#415E43; border-radius:5rem;padding:0rem 1rem 0rem 1rem; width:fit-content">
            <h3 class="fontOverused" style="font-size:1.2rem;margin:0;text-align:center;color:white;font-weight: 100;">${bottles[page][1].percent}</h3>
            <p class="fontOverused" style="font-size:0.6rem;color:white;margin:0 0 0.3rem 0;">Concentration of Alcohol</p>
        </div>
        <img src="${bottles[page][1].image}" style="object-fit:cover; width:100%; margin-bottom:2rem">
        <div>
            <h3 class="fontItalic" id="name1" style="font-weight:100; color:#4D644F;font-size:2rem;border-bottom: solid 1px black;border-top: solid 1px black; padding:1rem 0.5rem 0.5rem 1rem;margin:0;">${bottles[page][1].name}</h3>
            <div class="fontOverused" style="font-size:1rem;display:flex; justify-content:space-between;padding:1rem">
                <p style="width:70%">${bottles[page][1].detail}</p>
                <p style="">${bottles[page][1].price}</p>
            </div>
        </div>
    </div>
    `
}

const nextSlide=()=>{
    if(page<2){
        page+=1
        changeSlide()
    }
}

const prevSlide=()=>{
    if(page>0){
        page-=1
        changeSlide()
    }
}


const li_Display=(data)=>{
    let html=''
    data.forEach(e => {
        html+=`<li>- &nbsp;&nbsp; ${e}</li>`
    });
    return '<ul class="fontOverused" style="list-style:none;padding:1rem;">'+html+'</ul>'
}

const toolOver=(index)=>{
    let hoverTools=document.getElementsByClassName('hoverTools')
    hoverTools[index].innerHTML=`
        <div>
            <div style="animation:fade 1s;color:#FAF6EA;padding:1rem;margin:0;display:flex;justify-content:space-between;font-style: italic;font-weight:light;font-size:1.8rem;">
                <h3 style="animation:fade 1s;margin:0; font-weight: 100;">${tools[index].name}</h3>
                <h3 style="animation:fade 1s;margin:0; font-weight: 100;">${tools[index].number}</h3>
            </div>
            <p class="fontOverused" style="animation:fade 1s;padding:1rem;">${tools[index].detail}</p>
        </div>
        <div style="animation:fade 1s;padding:1rem">
            ${tools[index].type? '<p class="fontOverused" style="margin:0;">Types:</p>':''}
            ${tools[index].type? li_Display(tools[index].type):''}
            ${tools[index].how? '<p class="fontOverused" style="margin:0;">How to Use:</p>':''}
            ${tools[index].how? li_Display(tools[index].how):''}
        </div>
    `
}

const toolOut=(index)=>{
    let hoverTools=document.getElementsByClassName('hoverTools')
    hoverTools[index].innerHTML=`
        <div style="border-bottom:solid 1px black;color:#4D644F;padding:1rem;margin:0 0 0 0;display:flex;justify-content:space-between;font-style: italic;font-weight:light;font-size:1.8rem;">
            <h3 style="margin:0; font-weight: 100;">${tools[index].name}</h3>
            <h3 style="margin:0; font-weight: 100;">${tools[index].number}</h3>
        </div>
        <img class="img" src="/images/tools/${tools[index].image}" alt="" style="object-fit:cover;scale:80%">
    `
}

const disableEvent=(element)=>{
    let items=document.getElementsByClassName(element)
    for(let i=0;i<items.length;i++){
        items[i].removeAttribute('onmouseenter')
        items[i].removeAttribute('onmouseleave')
    }
}

const enableEvent=(element,value)=>{
    let items=document.getElementsByClassName(element)
    for(let i=0;i<items.length;i++){
        items[i].setAttribute('onmouseenter',value+`Over(${i})`)
        items[i].setAttribute('onmouseleave',value+`Out(${i})`)
    }
}

const timelineMobile=()=>{
    let items=document.getElementsByClassName('timeline-items')
    for(let index=0;index<items.length;index++){
        let info=document.createElement('div')
        info.innerHTML=`
            <div style="background:#415E43; padding:1rem;">
                <h3 class="fontOverused" style="color:#FAF6EA;font-size:5vw;font-style:normal;font-weight: 100; margin-block-start: 0em;">${starters[index].topic}</h3>
                ${starters[index].image[0]? `<img src="images/timeline/${starters[index].image[0]}" style="width:100%;height:auto;object-fit:cover;border-radius:0.5rem;display:block;margin:0 auto 0 auto">`:starters[index].image[1]? `<img src="images/timeline/${starters[index].image[1]}" style="width:100%;height:auto;object-fit:cover;border-radius:0.5rem;display:block;margin:0 auto 0 auto">`:''}
                <p class="fontOverused" style="color:#FAF6EA;font-size:3vw;font-style:normal;margin-block-end: 2rem;">${starters[index].detail}</p>
            </div>
        `

        items[index].lastElementChild.appendChild(info)
    } 
}

const createMenu=()=>{
    for (let cocktail = 0; cocktail <= menuList.length-1; cocktail++) {
        menuList[cocktail].innerHTML = `
        <div ${mobile.matches? '':'style="height:100%;"'}>
            <div id="menuItem-${cocktail}" style="height:100%;display:flex;flex-direction:column; justify-content:space-between">
                <div id='menuHeader'>
                    <div>
                        <div>${menu[cocktail].name}</div>
                        <div>${String((cocktail+1)).padStart(2, '0')}</div>
                    </div>
                    <p class="fontOverused" style="">${menu[cocktail].type}</p>
                    <div id="price-bar-${cocktail}" class="priceMenu"">
                        <p>${menu[cocktail].price}</p>
                    </div>
                </div>
                <img src="/images/menu/${menu[cocktail].image}" style="object-fit:cover; width:100%">
            </div>
            ${mobile.matches? `<div id="mobileInfo-${cocktail}"></div>`:''}
        </div>
        ` 
    }
}

let menuList=document.getElementsByClassName('menu-list')
const menuMobile=()=>{
    for(let index=0;index<menuList.length;index++){
        let info = document.querySelector(`#mobileInfo-${index}`)
        info.setAttribute('style','padding:1.5rem; margin:0; background:#415E43;')
        info.innerHTML=`
            <p class="fontOverused" style="margin:0.3rem 0 0.3rem 0; color:#FAF6EA;">Sweetness</p>
            ${levelBar(menu[index].sweet,2.5)}
            <p class="fontOverused" style="margin:0.3rem 0 0.3rem 0; color:#FAF6EA;">Tart/Citrusy</p>
            ${levelBar(menu[index].tart,2.5)}
            <p class="fontOverused" style="margin:0.3rem 0 0.3rem 0; color:#FAF6EA;">Bitter</p>
            ${levelBar(menu[index].bitter,2.5)}
        `

    }
}

const toolMobile=()=>{
    let data=''
    for(let i=0;i<5;i++){
        data+=`
            <div style="display:grid; grid-template-columns:50% 50%; border-top:solid 1px black">
                <img src="images/tools/${toolMobileData[i][0].image}" style="width:100%;border-right:solid 1px black">
                <div style="padding:1rem">
                    <h3 style="margin:0; font-weight: 100;font-family: 'PPEditorialNew-Italic';color:#415E43">${toolMobileData[i][0].name}</h3>
                    <h3 style="margin:0; font-weight: 100;font-family: 'PPEditorialNew-Italic';color:#415E43">${toolMobileData[i][0].number}</h3>
                    <p style="font-family: 'Overused Grotesk Light'; font-size:3vw">${toolMobileData[i][0].detail}</p>
                </div>
            </div>
            <div style="display:grid; grid-template-columns:50% 50%; border-top:solid 1px black; ${i==4? 'border-bottom:solid 1px black':''}">
                <div style="padding:1rem">
                    <h3 style="margin:0; font-weight: 100;font-family: 'PPEditorialNew-Italic';color:#415E43">${toolMobileData[i][1].name}</h3>
                    <h3 style="margin:0; font-weight: 100;font-family: 'PPEditorialNew-Italic';color:#415E43">${toolMobileData[i][1].number}</h3>
                    <p style="font-family: 'Overused Grotesk Light'; font-size:3vw">${toolMobileData[i][1].detail}</p>
                </div>
                <div style="width:100%;border-left:solid 1px black;">
                    <img src="images/tools/${toolMobileData[i][1].image}" style="width:100%; ${i==4? 'rotate: 90deg':''}">
                </div>
            </div>
        `
    }

    let tools=document.getElementById('grid');
    tools.innerHTML=`
        <div>
           ${data}
        </div>
    `
}


function responsive(mobile) {
    if (mobile.matches) {
        document.getElementById('banner').src='/images/banner_mobile.svg'
        disableEvent('timeline-items')
        timelineMobile()
        disableEvent('menu-list')
        createMenu()
        menuMobile()
        toolMobile()
        document.getElementById('footer-image').src='/images/footer/mobile.png'
        let starterMobile=document.getElementsByClassName('starter-text')
        {
            for(let i=0;i<2;i++){
                starterMobile[i].firstElementChild.remove()
                if(i==0){
                    starterMobile[i].lastElementChild.innerText='Cocktail Starters is the principal ingredient of the cocktail.'
                }
                else{
                    starterMobile[i].lastElementChild.innerText='Choose your Starter Choices wisely! Play safe or be Experimental?'
                }
                starterMobile[i].lastElementChild.style.fontSize='4vw'
                starterMobile[i].lastElementChild.style.marginTop='2rem'
            }
        }
        let price=document.getElementsByClassName('priceMenu')
        for(let i=0;i<price.length;i++){
            price[i].style.paddingLeft='0.5rem'
            price[i].style.fontSize='2.5vw'
        }
    } else {
        document.getElementById('banner').src='/images/banner_pic.svg'
        enableEvent('timeline-items','mouse')
        enableEvent('menu-list','menu')
        createMenu()
    }
  }
  
  var mobile = window.matchMedia("(max-width: 700px)")
  
  responsive(mobile);
  
  mobile.addEventListener("change", function() {
    responsive(mobile);
  });


changeSlide()





