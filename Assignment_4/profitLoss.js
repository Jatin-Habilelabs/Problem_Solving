const profitLoss=(arr,cP,sP)=>{
 
if(arr[cP]<arr[sP]){
    
    let profit=arr[sP]-arr[cP];
    let profitPercent=profit/arr[cP]*100
    console.log(profit +" Rs"+" profit");
    console.log("Profit Percentage "+profitPercent);
}
    else{
        let loss=arr[cP]-arr[sP];
        let lossPercent=loss/arr[cP]*100;
        console.log(loss+ " Rs"+" loss");
        console.log("Loss Percentage "+lossPercent);
    }
   

}
profitLoss([1,3,6,4,5,6,7],5,1) //   index 1 is selected for our cost price and 2 is index that select for selling price
