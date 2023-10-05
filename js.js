const $=document;
const body=$.body;

const navBtn=$.querySelector(".mobilemenu")
const listMobile=$.querySelector(".listheaderMobile")
const overlay=$.querySelector(".overlay")
const closelist=$.querySelector(".closelist")


const newestWrapper=$.querySelector(".newest-wrapper")


const BestSellersArrowRight=$.querySelector(".bestSellers__arrowRight")
const BestSellersImageImg=$.querySelector(".bestSellers__image-img")
const BestSellersImageImgShowing=$.querySelector(".bestSellers__image-img__Showing")
const BestSellersImageImgShowingWrapperlink=$.querySelector(".bestSellers__image-imgShowingWrapper-link")
const BestSellersInformNameProduct=$.querySelector(".bestSellers__inform-nameProduct")
const BestSellersInformPriceProduct=$.querySelector(".bestSellers__inform-priceProduct")
const BestSellersInformBtnLink=$.querySelector(".bestSellers__inform-btnlink")
const BestSellersInformNameProductMobile=$.querySelector(".bestSellers__inform-nameProduct-mobile")
const BestSellersInformPriceProductMobile=$.querySelector(".bestSellers__inform-priceProduct-mobile")
const BestSellersInformBtnlinkMobile=$.querySelector(".bestSellers__inform-btnlink-mobile")


// =====================ArrayProducts====================================================================

let Products=[
    {id:1 , name:"شیشه شیرها" , imgsrc:"image/shisheshir.png" , href:"1" , price:850.081},
    {id:2 , name:"پیشبند" , imgsrc:"image/pishband.png" , href:"2" , price:370.007},
    {id:3 , name:"پستونک" , imgsrc:"image/pestonak.png" , href:"3" , price:650.000},
    {id:4 , name:"شیشه شیر" , imgsrc:"image/shisheshir.png" , href:"4" , price:560.760},
    {id:5 , name:"ihپیشبند" , imgsrc:"image/pishband.png" , href:"5" , price:400.018},
    {id:6 , name:"پسdتونک" , imgsrc:"image/pestonak.png" , href:"6" , price:454.890},
    {id:7 , name:"شیشهsfghf شیرها" , imgsrc:"image/shisheshir.png" , href:"7" , price:750.990},
    {id:8 , name:"شیشهsdf شیرها" , imgsrc:"image/shisheshir.png" , href:"8" , price:230.809},
    {id:9 , name:"شیشهsdirenf شیرها" , imgsrc:"image/pishband.png" , href:"9" , price:320.800},
]

// =========================================================productSlider============================
let show=3;
let count=1
let DivWrapperProduct=$.createElement("div")
DivWrapperProduct.className="newest__productwrapper displayflex"

let Fragment=$.createDocumentFragment()




function innerInHtml(products){
    DivWrapperProduct.innerHTML='<svg width="18" height="32" viewBox="0 0 18 32" fill="none" onclick="ArrowBtnRight()" class="arrowsliderright"><path d="M1.5 1L16.5 16L1.5 31" stroke="#FBB291" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    if(window.innerWidth<=786 &&window.innerWidth>576){
        show=count+1
    }else if(window.innerWidth<=576){
        show=count
    }else{
        show=count+2
    }
    products.forEach(function(product){
        if(count==product.id){
            if(count<=show){
                DivWrapperProduct.insertAdjacentHTML("beforeend", '<div class="newest__product displayflex"><a href="" class="newest__product-image"><img src="'+product.imgsrc+'" alt="" class="newest__product-img"></a><button type="button" class="newest-product__btn btn displayflex"><a href="" class="newest-product__btnlink displayflex">'+product.name+'</a></button></div>')
                Fragment.appendChild(DivWrapperProduct)
                count++
            }
            newestWrapper.append(Fragment)
        }
    })

    if(window.innerWidth<=786 &&window.innerWidth>576){
        count=count-2
    }else if(window.innerWidth<=576){
        count=count-1
    }else{
        count=count-3
        show=count+2
    }

    
    DivWrapperProduct.insertAdjacentHTML("beforeend", '<svg width="18" height="32" viewBox="0 0 18 32" fill="none" class="arrowsliderleft" onclick="ArrowBtnLeft()"><path d="M16.5 1L1.5 16L16.5 31" stroke="#FBB291" stroke-linecap="round" stroke-linejoin="round"></svg>')


}


// =============================setintervalNewest==========================================

setInterval(ArrowBtnRight,3500)

// ======================================ArrowBtnright Slider=================================================

function ArrowBtnRight(){
    DivWrapperProduct.innerHTML='<svg width="18" height="32" viewBox="0 0 18 32" fill="none" onclick="ArrowBtnRight()" class="arrowsliderright"><path d="M1.5 1L16.5 16L1.5 31" stroke="#FBB291" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    count++
    if(window.innerWidth<=786 &&window.innerWidth>576){
        show=count+1
    }else if(window.innerWidth<=576){
        show=count
    }else{
        show=count+2
    }
    Products.forEach(function(product){
        if(count==product.id){
            if(count<=show){
                DivWrapperProduct.insertAdjacentHTML("beforeend", '<div class="newest__product slideRight displayflex"><a href="" class="newest__product-image"><img src="'+product.imgsrc+'" alt="" class="newest__product-img fade"></a><button type="button" class="newest-product__btn btn displayflex"><a href="" class="newest-product__btnlink displayflex">'+product.name+'</a></button></div>')
                Fragment.appendChild(DivWrapperProduct)
                count++
            }
            newestWrapper.append(Fragment)
        }
    })
    if(window.innerWidth<=786 &&window.innerWidth>576){
        count=count-2
        if(count===Products.length-1){
            count=0
        }
    }else if(window.innerWidth<=576){
        count=count-1
        if(count===Products.length){
            count=0
        }
    }else{
        count=count-3
        if(count===Products.length-2){
            count=0
        }
    }
    DivWrapperProduct.insertAdjacentHTML("beforeend", '<svg width="18" height="32" viewBox="0 0 18 32" fill="none" class="arrowsliderleft" onclick="ArrowBtnLeft()"><path d="M16.5 1L1.5 16L16.5 31" stroke="#FBB291" stroke-linecap="round" stroke-linejoin="round"></svg>')
}
// ======================================ArrowBtnLeft Slider=================================================

function ArrowBtnLeft(){
    console.log(count)
    if(count>1){
        count--
    }else if(count===1){
        if(window.innerWidth<=786 &&window.innerWidth>576){
            count=Products.length-1
        }else if(window.innerWidth<=576){
            count=Products.length
        }else{
            count=Products.length-2
        }
    }
    if(window.innerWidth<=786 &&window.innerWidth>576){
        show=count+1
    }else if(window.innerWidth<=576){
        show=count
    }else{
        show=count+2
    }
    DivWrapperProduct.innerHTML='<svg width="18" height="32" viewBox="0 0 18 32" fill="none" onclick="ArrowBtnRight()" class="arrowsliderright"><path d="M1.5 1L16.5 16L1.5 31" stroke="#FBB291" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    Products.forEach(function(product){
        if(count==product.id){
            if(count<=show){
                DivWrapperProduct.insertAdjacentHTML("beforeend", '<div class="newest__product slideLeft displayflex"><a href="" class="newest__product-image"><img src="'+product.imgsrc+'" alt="" class="newest__product-img fade"></a><button type="button" class="newest-product__btn btn displayflex"><a href="" class="newest-product__btnlink displayflex">'+product.name+'</a></button></div>')
                Fragment.appendChild(DivWrapperProduct)
                count++
            }
            newestWrapper.append(Fragment)
        }
    })
    DivWrapperProduct.insertAdjacentHTML("beforeend", '<svg width="18" height="32" viewBox="0 0 18 32" fill="none" class="arrowsliderleft" onclick="ArrowBtnLeft()"><path d="M16.5 1L1.5 16L16.5 31" stroke="#FBB291" stroke-linecap="round" stroke-linejoin="round"></svg>')
    if(window.innerWidth<=786 &&window.innerWidth>576){
        count=count-2
    }else if(window.innerWidth<=576){
        count=count-1
    }else{
        count=count-3
    }
}


window.addEventListener("resize",function(){
    DivWrapperProduct.innerHTML='<svg width="18" height="32" viewBox="0 0 18 32" fill="none" class="arrowsliderright"><path d="M1.5 1L16.5 16L1.5 31" stroke="#FBB291" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    innerInHtml(Products)
    
})

innerInHtml(Products)


// =================================================menuMobile======================================
navBtn.addEventListener("click",function(){
    listMobile.style.right="0rem"
    overlay.style.display="block"
})
function close(){
    listMobile.style.right="-20rem"
    overlay.style.display="none"

}

overlay.addEventListener("click",close)
closelist.addEventListener("click",close)



// ===========================================BestSellersSliders======================================================

let IndexArr=1;
const BestSellersImageImgShowingWrapper=$.querySelector(".bestSellers__image-imgShowingWrapper")
function SliderBestSellers(){
    Products.forEach(function(product){
        if(IndexArr===product.id){
            BestSellersImageImgShowing.setAttribute("src",product.imgsrc)
            BestSellersImageImgShowingWrapperlink.setAttribute("href",product.href)
            BestSellersInformBtnLink.setAttribute("href",product.href)
            BestSellersInformNameProduct.innerHTML=product.name
            BestSellersInformPriceProduct.innerHTML="قیمت"+product.price+"ریال"

            BestSellersInformNameProductMobile.innerHTML=product.name
            BestSellersInformPriceProductMobile.innerHTML="قیمت"+product.price+"ریال"
            BestSellersInformBtnlinkMobile.setAttribute("href",product.href)
        }
        if(IndexArr===Products.length){
            BestSellersImageImg.setAttribute("src",Products[0].imgsrc)
        }else{
            BestSellersImageImg.setAttribute("src",Products[IndexArr].imgsrc)
        }
    })
    IndexArr++
    if(IndexArr>Products.length){
        IndexArr=1
    }
}
setInterval(SliderBestSellers,3500)
window.addEventListener("load",SliderBestSellers)
BestSellersArrowRight.addEventListener("click",SliderBestSellers)