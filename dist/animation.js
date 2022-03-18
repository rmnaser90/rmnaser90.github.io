
setTimeout(function () {
  $('#logoContainer').css('display','block')  
},800)
setTimeout(function () {
    const enterLogo = $('#enterLogo')
    setTimeout(function () {enterLogo.css('display','none')},1000)
    enterLogo.css('animation-duration','1s')
    enterLogo.css('animation-name','dissappear')
    
},3300)

const startMoving = function (background) {

    background=$(background)
        let distance = Math.floor(background.width() -  $('#mainContainer').width())- 20;
        const time = distance/8
        distance=`left: -${distance}px;`
        const styleSheet = document.styleSheets
        styleSheet[1].cssRules[1][1].style.cssText= distance
        background.css('animation-duration',`${time}s`)
       background.css('animation-name','moveRight')
       background.css('right','0px')
}