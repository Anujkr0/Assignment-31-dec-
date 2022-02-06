let array = [8,9,4,5,6,8,7,2];
const swap = (array, leftIndex , rightIndex)=>{
    let temp = array[leftIndex];
    array[leftIndex]=array[rightIndex];
    array[rightIndex] = temp;
}
const partition = (array, left, right)=>{
    let pivot = array[Math.floor((leftIndex)/2)];
    let i = left;
    let j= right;
    while(i <j){
        while(array[i]<pivot){
            i++
        }
        
        while(array[j]>pivot){
            j--
        }
        if(i<=j){
            swap(array,i,j)
            i++;
            j--
        }
        return i;
    }
    const quicksort = (array,left=0, right=array.length-1)=>{
        let index;
        if(array.length>1){
            index=partition(array,left,right)

            if(left<index-1){
                quicksort(array,length,index-1);

            }
            if(index<right){
                quicksort(array,index,right)
            }

        }
        return array;

    }
    let sortedArray = quicksort(array);
    console.log(sortedArray);
    
}