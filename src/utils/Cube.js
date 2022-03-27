export const Cube = () => {
    let cube;
        let _startPointX, _startPointY, _endPointX, _endPointY;
        let _rotationOBJ={x:0,y:0};
        
          cube= document.querySelector('.cube');
          document.addEventListener('touchstart', (e)=>{
              //Getting Touch Start positions
              _startPointX = e.touches[0].clientX;
              _startPointY =  e.touches[0].clientY;
          })
          document.addEventListener('touchend', (e)=>{
              //Getting Touch End positions
              _endPointX =  e.changedTouches[0].clientX;
              _endPointY =  e.changedTouches[0].clientY;
              //Calling the Rotation Method
              rotateEl(cube);
          })
        //Will rotate the element
        function rotateEl(element){
            decideRotation(_startPointX, _startPointY, _endPointX, _endPointY, _rotationOBJ); 
            const rotationProperties= `translateZ(-100px) rotateX(${_rotationOBJ.x +'deg'}) rotateY(${_rotationOBJ.y+'deg'}) `;
            element.style.transform=rotationProperties;
        }
        //Will decide which Axis to rotate
        function decideRotation(startX, startY, endX, endY,result){
            const resultX = endX- startX;
            const resultY= endY - startY;
            if(Math.abs(resultX) > Math.abs(resultY)){
                result.axis='Y';
                if(resultX < 0){
                    result.y-=90;
                }else{
                    result.y+=90;
                }
            }else{
                result.axis='X';
                if(resultY < 0){
                    result.x+=90;
                }else{
                    result.x-=90;
                }
            }  
    }
}