let Home = document.querySelector('#Home')
let Products = document.querySelector('#Product')
let Users = document.querySelector('#Users')
let Contact = document.querySelector('#Contact')
let Electronics = document.querySelector('#Electronics')
let Jewellery = document.querySelector('#Jewellery')
let Mens_wearing = document.querySelector('#Mens_wearing')
let Womans_Wearing = document.querySelector('#Womans_Wearing')
let Items_electronics = document.querySelector('#Items_electronics')
if (Products) {
  Products.addEventListener('click', redirect = () => {
    location.href = "Products.html"
  }, false)

}
let knowmore = document.querySelector('#knowmore')

if (knowmore) {
  knowmore.addEventListener('click', redirect = () => {
    location.href = "Products.html"
  }, false)

}

if (Home) {
  Home.addEventListener('click', redirect = () => {
    location.href = "index.html"
  }, false)

}
//Electronics section
let electronicsItems = () => {

  fetch('https://fakestoreapi.com/products/14').then((data) => {
    return data.json();
  }).then((Electronics) => {
    let items = " "
    items = `
  <h1 class="category">${Electronics.category}</h1>
  <div id="Items_electronics">
  <img id="computer" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhEQEREPEQ8RDw8PDw8PDxEPDw8PGBQZGRgUGBgcIS4lHB4rHxgYJjgmKy8xNUM1GiQ7QEg0Pzw0NTEBDAwMEA8QHhISGjEhISE0MTQxNDE0NDQ0MTQ0MTQxNDQxNDQ/NDQ0MTQ0NDQxNDQ0NDQ0NDQ0NDE0NDo0NDE0NP/AABEIANQA7gMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAwIEAQUGBwj/xABTEAABAwICBAYMBg8GBwAAAAABAAIDBBEFIQYHEjEiQVFxcpETMmGBkqGxsrPB0dIWM0JSU3UUF0NEVGJkc3SEk6KjwuIjJIKD0/EVNDWU4ePw/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAQCAwUBBv/EADgRAAIBAgQBCQYFBAMAAAAAAAABAgMRBBIhMWEFE0FRcZGxwdEUFSIjgfAyQoKh4VJykqIkM0P/2gAMAwEAAhEDEQA/APZkIUXPA3kDnICAJIVOXE6dnb1FO3pTRt8pWvn0tw2Pt6+iaeT7JjJ6gUAbxC5aXWDhLN9fAehtv80Fa+XWrg7chUvf0Keb1tCAO5QuBfrUoPkQ4hLydjpTn1kJB1nX+LwnFXcl6fYHXcqLnGO7sdSb2PRULzeXWDXH4vBKk8nZahsf8qUdNcadk3Cadndkq2uHiIUedp/1LvJKnN7RfcemoXlb9JdIHbocLiHdMjz4nHyJRxXSB2+qoI+hAX+c1SU4vZk/Z6v9J6yheOSPxx3b4vs9yOliA8QCqy0WJP8AjMYru72Muj81ysUW9iSwlV9C74+p7aoFwGZIA7pAXhUmByu+MxDEn8u1UvIPXdIOiUDs5H1Ep/HmJ9StWHk+lE/Y59Mor6nucuJ07O3qIGdKaNvlK182l2GsydiFCDyfZMRPUCvIodD6L6Ek92WX2q1Fo1SNP/LRnpbTvKVL2aXWiawLavnj+/oejS6wcIZvr4D0NuTzQVr5Na2Dt3VMjujTT+toXPUmB0rd1LTg/mWH1LYNoY29rHG3osY3yBVOFna4pODjxHS63sNHaR10vJ2Onbn4Tgku1sxH4vDcTfyXiaAeolQmZs7subJR2lNUbq9xbnXrpsDtZtY74rA6oj50kxZ4ux+tRk06xl3xeDxMvu7JUtd62qbZLJom3c646LBVHa5S+E2kbjb7GwyId0ucR1SFQfW6SybqrDoe62PaI8JjluJpMx3QnQvVMk0rjkKV5OJoBSY+/wCMxhjfzdNH6mNSH6OYm/OTHq0dyISMH7sg8i6svSnSKtOTH4YOD3Ry7tDXuFpMVxR/LedwB7xJU9TdbO4OjMsr2BlQ7Zc9zhtCSMbVjuPCPWuj21yWpo8J/QqvSQqcXcXxlGNLLlW9/IzSYQ6umr5ZqzEBsYpXQMjjqi2JsbX8EAEG2+1hlYBXzoFQu7cVMn5ypkN+op2iW/EfrnEPOC6NYmIr1OdklJpJ9YtUSjFM5yLQbDWbqVp6ckrx43K5Forh7d1FS/4omv8AOutuFNoVbnO3xSb+rKabcmUYMFpI+0paVnRgjHqVxkDG5NYxo/FY1vkTFgqhu5oQViBUHFTcoOUUXoW5KemOS3JimXREuUCmOUCtOgE2QKU8JpSnpyO4hXdkVZAk3TpCqr09TPO4rFVKezLUO9WnRcapUy20eYXJyaY3ybjJ1ItSIwtsrLWpbGprzYKh6s1HZq7KNTmkhuSsSC6W4ZJ1aRsKZLXbKrzvURIpPGRVe6siroo2tc2sjrhp5Lp0LlTDrtCZDIkpx+E9JGkucUl0peBcc9Jc9Rc9Jc5KRVh6MBzXrmtTZ4T+hVekhW/a7Nc9qcPDf0Kr0kK7DdmZyqrZP1eRu9Eh/wBQ+uMQ88LobLn9DhliH1viHnhdGsGt/wB0nxfiJTp54x7DDQmBYCFVJ3J06KguIFRJWVAlVtl8YmHFLcVJxSyVKEbl6iRcUtymVEpmKLLWFuUHJjkpy0KGxRUZApUic5IkTtNaiGJfwlSQqu5OlKr3zT8I6HlsVK7LdOFsoitbAVdiKrmhjBSyFxiXI9Dn5JaKcOk3ISugKTIVN7lXkcr0imrLqInO6qvCstdkVWeVbDcorPbsLUR4I7/lTmpMPahMJslam7seswqvCN+peBJzkvaWHlLY690olfUeS0GtOa0Op88N/QqvSQrdg5rQ6oDw39Cq9JCoR3Zkcrf+f6vI6LQ/ta762xD0i6Jc5oh2lb9bYh6RdDdYNdfNl2shSXwLsJXRdYui6peiJZQJUSUEqDncSrScpWRNRMFYssqN02lYk+BghRcFIrDlZEhcU5KKa5Lcn6K0KpasWVXlTyq0xT1FambjXaJSnfZU9rNMndc2UAFqwhoeKxFXNPQs08nEtpDkFraKO5utmCq5x1savJdGdTVkyVlxssMHGlyOXUug35NRWVEHvVKaRNnetbJJmmKdK5TGm5uyLXZMlHsiqdkQJFbzVjSo4JNm0jkyCy+TMKkyXcmdkueZJOlqz0lOjlS4FiV+SxAcu+q8r0+mOQ5iUpzeWLZNq0Rl81oNUR4cnRqfPhW62+EFotUx4cnRqfPiS+WzMTlfan+ryOl0RPArPrXEPSLfgrndE3cCs+s6/wBKt+HLDrx+ZLtCivlx7Bt1guS9pRc9LONy1RJucl3US5AKtjBQRPKTuhRui66RyklgrF0Eq2CuUzVhbkpyY8pRWlTjZFaIOVOpdkrb1RqtxWhh46mLynK0Ga0m5upxRlxsO+sRsLjYLZRRhg7q03oeWwWCnip2S06WMjaGiybE2+aXG0uKs24gqZHr4QhRiqdPvMOdfIblBzFYZHZVK2XZFhvUYO7tE41meWJra6XiWrdIm1clyqy1qUMsTUw1FJaEttZD0klZv41OSRtYLD5U5yLjJPGnNdlflVKM5q07Kw7njSjjvxH5RtaP393J3vnyK1G6zCeZoVR+QA4yc02R1msbxm7ik5RTXa/ASxFRbDGuzC0uqg8OTo1HnxLcQi5A7q0uqw8OTo1HnxLOq/iMnldfDS/V5HQ6KngVX1lX+lK320uc0YfwKn6wrfSlbwPWTWheTLqEflR7EPL1AuS9tG0qMli3KTupApQcpArjQNDboulgrN1E5YndBKjdRc5XUVeRVONzDyoFZuglaqjqKVG4oS9U5xdWpFVebmy0KMLamPVpSxLaatFbv0INs3dmeVNijJ3ojjCsteBuV8pdRXz9OhDJDRDGMACYxJaSVJ8myLDM+JUO7ZXRlOvK0SU81hYdsdwWoq37771amkAvc3J761FXUXTdCnZm1hsFUqO0Fp0vr7OH7vdlSU3KSSsucolaVz02HwOSKTMIasWvzKYCjJ6WH4xWy2RYpGXN+IZq2yO5JKZQ0+XPvWKx4aLDfuCUqVNcsd9hCrWvJ27Ctfafbivb2p05u7uBKpBa7u8FZij2iEvWnGHYkIx+bU4LyLVFFc3XNasT/aS81R58S7SCOwC4rVp8bN+sefGsClV52cpdAjyvLM4fXyNro9JZtR+n1p/ilbpsq53BH2bP+nVnpXLaNkTjoZopmnhqd6EHwXgbESKQcqTZE1r0rOhYm4FoOTAVWY5NaUlOFitoaCpApYKzdU2IWJlyW5yw5yim8NDW5xx0JgocVgJcj7BaUY3kKVIZtEJndxJbWrAzKsNYnU8qEuUXzNLm47iwptCnso2V29zz1DCc7K82RdLYZBKs45nLrurAaN5S5n2Uou2x6PDyp07U6MFxe5r6kWWnnfmr9dOtVvPdTlLRanq8HScYXluZRbqUrW7p8X+yxu9qvzDV83YCt0FMXkcnGlU8Bce5xldFQQBjVTWqqnHiKYvEqnHLH8XgTkaI2W7i0FQ8vd3Pkq/iE5edlu7jS6em4ylaXwLPLdmRUm4R4v7v6fwZjisAFsaOHjSWMubDvrZRMsFi8o13JZV0lkI83Tt0sm1q4HVubTT/AKx6Ri9CjbmvO9XhtNP+sekYlMJ+Zdhl8ov8H18h2Fy2bOPy2r9K5bJkq02HnKX9Mq/SuVxrl62lRUqUXwXgemwcE8NT/tXgbNkifHItZHIrMciWrYclOBs45FYY5a1kitRvWLiKNmKzgXA5BclB6wXJNU9SnKTupBLaVInJOUY6oJImSqlQ9MkkyVJz7laFOOoUqWt2WKcK2Aq9OMlYBUpO7MPlCLnNgsLJKW96kkIUqEm7IJJLLXVdQmVEy1U77lMU4nqeT8CoK7K8ri4oAtu38ZUjlzqABOQTSRuGHHiCsU9MTm7dxDjKbBThuZzPEOIK3FGSc1yVSy0E8Ri4wWjtx9BlLFusLAKxUSm2y3fxlTZFYZ5DxlLc4BIynml2HnqmKTlffqXm/u4mGnG85lOkdlYJRl4grVLTk5lVVp2WaRfRjrztXd7ffUMpIbZlXmtRHEnNYsSu7ttl06l3czE1eZ6Am01Rz1HpGL1FjV5VoObT1HSqPSMUcHvL6GTj3fL9RuGjgyn8rqvSuVsNS8GjvHIfymr9K5XuxL1tCqlTiuC8D1WCn/xqf9sfASxOYUCNMYxTnNNDEpDGOViORVgxMaFm14plEkmXmyLIcqzCnNcs1wsyhxHtKw9+SXtJE0ivow1IqF2YlmSI35qtLKiORanN2Q2qdom5icnCRaqKoTxOq3TZm1sHmZddIqssqU+dU5ZrqcYFlDBRi72M1EqquPWpDPNOjgJV2kTS0giuyK6uwwW4s1bp6JbSCjaMyqKuKUdDGx3K0YfDDU11PROdxK92NkYueE7k4gnyyACwVCY3SnOSqPV2R5upi6ledr68BFTVFVdouNt6sfYrnHLd31tKPDw3iz5VbKtTpRstxunKlh1r8Uurq7etlWioeN29baOKya2OyaGLLq1XN3ZL2iU3dsW1imGqWypAJSauMKoRsvJdCjaep6c/nsXrhXkGiJtUVPTn9I1XYeNriuM2j9Te6NxbUDj+U1fpXLaGnXN0WJPgaY2PswvkfZzWO4TnFxztuuVZ+EEvzh4LU7GrNaDtDlSnTpxi76JLY3XYFgQrSHSCT5zfBHsWPhDLys8EKz2iQx73o8e435iWBGtD8IpOWPwP/Kx8I5OSHwHe8q5VZNB71odb7johGpBq5v4RyfNi8B3vI+EknJD4DveVDzB70w/W+5nSOCqzhaQ6SSfNh8F3vJbtIHne2Pqd7yYozyvUlHlTDL8z7mW5QbrLLrXOxgn5DPGj/jH4jetaPtlK38DfvnCW/E/8ZehsHOIU2Tlah+K3+Q3wldENV2PswpSYtgSF7ZWloZs7dzbcdmzrHOxHKLzWLoW1f7P0O+98E1rP/WXoXHSqDc1qJcTLHOa6Gzmuc17ey9q5psR2vKFmPHNn7iD/AJ9v5EPFUeiX7P0O+9sElpU/1l6HRQxblsqaELlGaT7P3vf/ADz7iss0xA+9/wCP/QlKmIT2Zj4/lOM42ou/evGx2MZAUJaniC5F2mYP3A/tv6VAaWsvnC7vSD2JdZN2zzbjOWsjq23crUVNfeuUi00ibvgk7z2KyzT2EfcJuuP2qqpOX5UTWeCtBWOuigATw1cb9sCD6Cfri9qkNYNP9BU/wveS+WXUdjFo7MBSAXGjWHS/QVXeEPvqQ1iUn0NZ4EH+ouZJdQ1TkludjZFlyA1h0f0VZ4EH+os/bCovmVQ544/fRkfUNKpHrR1TyvHtFXf3ip6c/ntXaP08ozxVA542+8uJ0XP9vO61g4yvbe19kvaQroxsiGJnGUY5Xfc9mxHQCgmeZNiSJziS5sDgxhcd52SCB3rBVPtZUPz6v9pH7i7hC6JnCHVhRfS1Xhx+4onVdR/TVXhR+6u9Qu3A8/Oqyl/CKn9z2JbtVdPxVM452sK9EQuXA83OqmHiqpRzxtP8ygdU8fFWP78AP869LQu3A8xOqZvFWu/7b/2KJ1Tclb10/wDWvUELlwPKzqmdxVjf2B95QOqaTirGfsXD+ZeroRcDyU6p5uKri77HhPZq+xFgDWYlZoa1gYJahrQwAgNA3WAJyXqaEAeK45q9q4oqismqYZRFG+eQ7UjpHhjSSBduZNuMrhdptr8O3MPavobTZwGHVt9xp3t8Lg+teDMp29jXUcNZ9kMva78/xR7VvMN0bnqXsZCA5z7W32a024Trbmi+ZWjfCNsc69Y1Zj+9uHzaN5/fjHrXTpoXarcR5aY80rvdSzqxxIfJpzzTD1r3RC5cDwd2rTE/oojzTs9ZUDq4xT8HYf1iH3l72hFwPAXau8VH3sDzTwe8lu0AxUfehPNND7y+gkIuB88nQTFfwJ/7WD31A6EYoN9DL4cR8jl9EoRcD5zOhuJ8dBUdTD5ClnRPEhvoKrvRk+RfSCEXA+bpNFcRaSPsGrda2bIHlpy4slf0f0crxK+9FVMHYzwpIXtbfablnbP2FfQSEXAEIQuACEIQAIQhAAhCEACEKLnAAkkADMk5ABAEkLVvx+jBINXTXBsQJmEg94rA0go+KphPM+6ANqha1uOUp3TsPNf2KYxanO6Vvj9iANPrGfs4ZVnlELeuZg9a8RDuAF65rMxCN2GytY9rnOkpxYXubSNPqXjbn8Ecy6gKsh4Y516jqqO1VTHkpSOuRnsXlW3wxzr03VLWRioqi57GAQRhpe5rb3ebgX5kMD15CrNrojuliPNIw+tMZMx25zTzOBXAGoQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACTUS7DHP2XO2Wl2ywbTnWF7NHGU5YKAPMsZ1h1Ac6OCGOAg2Jndtyj/BkGnnuuPr8Yqqg3nnfIPml4DBzMFmjqXfY9q+ZVTyVBlex8jtp+zYgkNABsRlkAtWdVoH3Zx7pAv4gugcayYhWGVluM9RXRv1XO4pj1BJdqylG6VFzhrYcUA3u8qvR42z57etLk1bVY7WVh5w4etLOrysHy237l7eVFwMYtiTJYywva4Eg2uDmFycsTf/iuodoDWjc4Hr9qU/QavHIe+V0DkhTtvdbzBphGSbtFwAdwurEuhuJDdHt8zmjyrNHoNiJaAWBncJv5EAWpMUZ84HmzWvqK1ruLrAC3EOrmsd2zwOv2q9DqwkPby9QC5cDk21zm9rKWdGRzfIVcg0hqGbq+pHcbNK4dRJC7CDVgwdu9x61sYtXFIO2aXdYRc6U9BMXrquUltS6WnhcwTiYRtJa4OtskM2icr7wvSlpMEwKGkBbEwMDtm+yANq2653lbtcAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCAMIshCADZCxshZQgDGwORGyORCEAGyORGyEIQBnZQhCABZQhAAhCEACEIQAIQhAAhCEAf/9k=" alt="Electronics-Items">
  <div id="text">
  <p id="title"><b>Title:</b>${Electronics.title}</p>
  <p id="price"><b>Price:</b>$${Electronics.price}</p>  
  <p id="description"><b>Description:</b>${Electronics.description}</p>
  <p id="rating"><b>Rating:</b>${Electronics.rating.rate}</p>
  <p id="count"><b>Count:</b>${Electronics.rating.count}</p>
  </div>
  </div>
  
  `
    document.querySelector('#ele_page').innerHTML = items;
  }).catch((err) => {
    console.log(err)
  })
}

electronicsItems()

if (Electronics) {
  Electronics.addEventListener('click', redirect = () => {
    location.href = "Products.html"
  }, false)

}


//jewellery section

let JewelleryItems = () => {
  fetch(' https://fakestoreapi.com/products/5').then((data) => {
    return data.json();
  }).then((Jewellery) => {
    let items = " "
    items = `
  <h1 class="category">${Jewellery.category}</h1>
  <div id="Items_electronics">
  <img id="jewellery" src="data:image/jpeg;base64,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" alt="Electronics-Items">
  <div id="text">
  <p id="title"><b>Title:</b>${Jewellery.title}</p>
  <p id="price"><b>Price:</b>$${Jewellery.price}</p>  
  <p id="description"><b>Description:</b>${Jewellery.description}</p>
  <p id="rating"><b>Rating:</b>${Jewellery.rating.rate}</p>
  <p id="count"><b>Count:</b>${Jewellery.rating.count}</p>
  </div>
  </div>
  `
    document.querySelector('#Jewellerypage').innerHTML = items;
  }).catch((err) => {
    console.log(err)
  })
}

JewelleryItems()



if (Jewellery) {
  Jewellery.addEventListener('click', redirect = () => {
    location.href = "jewellery.html"
  }, false)

}


// menswearing section
let MensItems = () => {
  fetch('https://fakestoreapi.com/products/1').then((data) => {
    return data.json();
  }).then((Menswear) => {
    let items = " "
    items = `
  <h1 class="category">${Menswear.category}</h1>
  <div id="Items_electronics">
  <img id="jewellery" src="data:image/jpeg;base64,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" alt="Electronics-Items">
  <div id="text">
  <p id="title"><b>Title:</b>${Menswear.title}</p>
  <p id="price"><b>Price:</b>$${Menswear.price}</p>  
  <p id="description"><b>Description:</b>${Menswear.description}</p>
  <p id="rating"><b>Rating:</b>${Menswear.rating.rate}</p>
  <p id="count"><b>Count:</b>${Menswear.rating.count}</p>
  </div>
  </div>
  `
    document.querySelector('#menswear').innerHTML = items;
  }).catch((err) => {
    console.log(err)
  })
}

MensItems()



if (Mens_wearing) {
  Mens_wearing.addEventListener('click', redirect = () => {
    location.href = "mens.html"
  }, false)

}



//womans section

let WomansItems = () => {
  fetch('https://fakestoreapi.com/products/16').then((data) => {
    return data.json();
  }).then((WomansWear) => {
    let items = " "
    items = `
  <h1 class="category">${WomansWear.category}</h1>
  <div id="Items_electronics">
  <img id="jewellery" src="data:image/jpeg;base64,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" alt="Electronics-Items">
  <div id="text">
  <p id="title"><b>Title:</b>${WomansWear.title}</p>
  <p id="price"><b>Price:</b>$${WomansWear.price}</p>  
  <p id="description"><b>Description:</b>${WomansWear.description}</p>
  <p id="rating"><b>Rating:</b>${WomansWear.rating.rate}</p>
  <p id="count"><b>Count:</b>${WomansWear.rating.count}</p>
  </div>
  </div>
  `
    document.querySelector('#womanswear').innerHTML = items;
  }).catch((err) => {
    console.log(err)
  })
}

WomansItems()



if (Womans_Wearing) {
  Womans_Wearing.addEventListener('click', redirect = () => {
    location.href = "womans.html"
  }, false)

}

//Get Btn And Create Function
 Users.addEventListener('click', getData);

function getData() {
    // console.log('test');

    //Get API
    fetch('https://randomuser.me/api/?results=100')
        .then(res => res.json())
        .then(data => {
            // console.log(data);

            let author = data.results;
            // console.log(author);

            //Get Data Value
            let output = "<h2><center>Get User Data</center></h2>";

            //Get Data Loop Through
            author.forEach(function (lists) {
                output += `
                <div class="container">
                    <div class="card mt-4 bg-light">
                        <ul class="list-group">
                            <li class="list-group-item"><h2>Name: ${lists.name.first}</h2></li>
                            <li class="list-group-item"><img src="${lists.picture.large}"></li>
                            <li class="list-group-item">Phone Number: ${lists.cell}</li>
                            <li class="list-group-item">DOB: ${lists.dob.date}</li>
                            <li class="list-group-item">Age: ${lists.dob.age}</li>
                            <li class="list-group-item">Email ID: ${lists.email}</li>
                            <li class="list-group-item">Gender: ${lists.gender}</li>
                            <li class="list-group-item">City: ${lists.location.city}</li>
                            <li class="list-group-item">Country: ${lists.location.country}</li>
                            <li class="list-group-item">PostCode: ${lists.location.postcode}</li>
                        </ul>
                    </div>
                </div> `;
            });

            //Show On Our Screen All Data
            document.getElementById('Userinfo').innerHTML = output;

        });
};



let UserDetails = () => {
  fetch('https://randomuser.me/api/?results=1').then((data) => {
    return data.json();
  }).then((data) => {
    let author = data.results;
    let output = "";
    
   author.forEach(function (lists) {
    output += `
       <div class="container">
            <img  width="200px"src="${lists.picture.large}">
                    <div class="card">
                            <h2>Name: ${lists.name.first}</h2></li>
                            <h2 class="list-group-item">DOB: ${lists.dob.date}</h2>
                            <h2 class="list-group-item">Email ID: ${lists.email}</h2>
                             <h2 class="list-group-item">Phone Number: ${lists.cell}</h2>
                              <h2 class="list-group-item">City: ${lists.location.city}</h2>
                        </ul>
                    </div>
                </div>  `;
    })
    document.querySelector('#Userinfo').innerHTML = output;
  }).catch((err) => {
    console.log(err)
  })
}

UserDetails();



if(Users) {
 Users.addEventListener('click', redirect = () => {
    location.href = "user.html"
  }, false)

}


if(Contact) {
 Contact.addEventListener('click', redirect = () => {
    location.href = "contact.html"
  }, false)

}
