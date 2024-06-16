import InputBox from "./components/InputBox"
import useCurrencyInfo from "./hooks/useCurrencyInfo"
import { useEffect, useState } from "react"


function App() {
 const [amount,setAmount] = useState(0)
 const[from,setFrom] = useState("usd")
 const[to,setTo] = useState("pkr")
 const [convertedAmount , setConvertedAmount] = useState(0)

 const currencyInfo = useCurrencyInfo(from)
 const options = Object.keys(currencyInfo)
 console.log(currencyInfo);

 useEffect(()=>{
    if(currencyInfo[to])
    {convert()}
 },[amount,from,to,currencyInfo])

 const swap = ()=>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
 }

 const convert = ()=>{
    console.log("convert function called");
    setAmount(amount)
    if( currencyInfo[to])
        { 
            
    const parseAmount = parseInt(amount)
    console.log(typeof amount)
    console.log("Amount is:",parseAmount);
    console.log(typeof parseAmount);
    const conversionRate = parseInt(currencyInfo[to])
    console.log("Conversion Rate:",conversionRate);
    console.log(typeof conversionRate);
    
    
   
    
    const newConvertedAmount = parseAmount * conversionRate
    console.log("New converted amount:",newConvertedAmount);
    console.log(typeof newConvertedAmount);
    setConvertedAmount(newConvertedAmount)   
    
 }}
 
    

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/002/256/477/small/stock-and-graph-design-background-business-graph-banner-design-eps10-illustration-free-vector.jpg')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                         convert()
                         
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                             amount={amount} 
                            
                             currencyOption={options}
                             onCurrencyChange={(amount)=>setAmount(amount)}
                             selectCurrency={from}
                             onAmountChange={(amount)=> setAmount(amount)}
                            
                          />
                          
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount} 
                             currencyOption={options}
                             onCurrencyChange={(currency)=>setTo(currency)}
                             selectCurrency={to}
                             Disabled = {true}
                             
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert{from.toUpperCase()} to {to.toUpperCase()}
                         
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );

}

export default App
