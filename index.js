const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggables.forEach(draggable=>{
    draggable.addEventListener('dragstart',()=>{
        draggable.classList.add('dragging')
    });
    draggable.addEventListener('dragend',()=>{
        draggable.classList.remove('dragging')
    })
});

containers.forEach(container=>{
    container.addEventListener('dragover',(e)=>{
        const draggable =  document.querySelector('.dragging');
        e.preventDefault();
        const afterElement = getAfterElement(container,e.clientY);
        if (afterElement) {
            container.insertBefore(draggable,afterElement)
        }else{
            container.appendChild(draggable)
        } 
    })
})

function getAfterElement(container,y){
    const draggables = [...container.querySelectorAll('.draggable:not(.dragging)')];
    return draggables.reduce((closest,child)=>{
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height/2;
        if (offset < 0 && offset > closest.offset) {
            return {
                offset,
                element:child,
            }
        }
        else{
            return closest
        }
    },{offset:Number.NEGATIVE_INFINITY}).element
}




// JavaScript
// const draggables = document.querySelectorAll(".draggable");
// const containers = document.querySelectorAll(".container");

// draggables.forEach(draggable=>{
//   draggable.addEventListener("dragstart",()=>{
//     draggable.classList.add("dragging")
//     draggable.parentElement.classList.add("dragoverContainer")
//   });
  
//   draggable.addEventListener("dragend",()=>{
//     draggable.classList.remove("dragging")
//     draggable.parentElement.classList.remove("dragoverContainer")
//   });
// })

// containers.forEach(container=>{
//     container.addEventListener("dragover",(e)=>{
//         if (container.classList.contains('dragoverContainer')) {
//             e.preventDefault()
//             const draggable = document.querySelector(".dragging");
//             const afterElement = getAfterElement(container,e.clientY);
//             if (afterElement) {
//                 console.log("afterel",afterElement);
//                 container.insertBefore(draggable,afterElement);
//             }else{
//                 container.appendChild(draggable);
//             }   
//         }
//     });
// })



// function getAfterElement (container,y) {
//     const draggables = [...container.querySelectorAll(".draggable:not(.dragging)")];
//     return draggables.reduce((closest,child)=>{
//         const box = child.getBoundingClientRect();
//         const offset = y - box.top - box.height/2;
//         // console.log(offset > 0);
//         if (offset < 0 && offset > closest.offset) {
//             console.log('happend',child,offset);
//             return {
//                 element:child,
//             }
//         }
//         else{
//             console.log('not happend',child,offset);
//             console.log(closest.element);
//             return closest
//         } 
//     },{offset:Number.NEGATIVE_INFINITY}).element 
// }

