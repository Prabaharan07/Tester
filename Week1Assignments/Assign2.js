const browserName = 'Chrome';

 function getBrowserName() {
   if (browserName==='Chrome') 
    {   
        //var browserName = 'Chrome';
        let browserName = 'Chrome';
        console.log("Block scope", browserName);
    }
    console.log("outside scope inside function", browserName);
}
getBrowserName();