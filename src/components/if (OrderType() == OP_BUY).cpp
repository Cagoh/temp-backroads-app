if (OrderType() == OP_BUY)
{
   // if (tradeMode == TakeProfitMode) 
   // {
      // Take Profit mode selected
      // Implement your logic for Take Profit mode here
      if (OrderModify(OrderTicket(),OrderOpenPrice(),0,takeProfitBuy,0,Blue) == false)
      {
         Print("ERROR - Unable to modify buy order take profit - ", GetLastError());
      }
   // }
   // if (tradeMode == StopLossMode) 
   // {
      // Stop Loss mode selected
      // Implement your logic for Stop Loss mode here
   //    if (OrderModify(OrderTicket(),OrderOpenPrice(),stopLossBuy,0,0,Blue) == false)
   //    {
   //       Print("ERROR - Unable to modify buy order stop loss - ", GetLastError());
   //    }
   // }
}
else if (OrderType() == OP_SELL)
{
   // if (tradeMode == TakeProfitMode) 
   // {
      // Take Profit mode selected
      // Implement your logic for Take Profit mode here
      if (OrderModify(OrderTicket(),OrderOpenPrice(),0,takeProfitSell,0,Red) == false)
      {
         Print("ERROR - Unable to modify sell order take profit - ", GetLastError());
      }
   // }
   // if (tradeMode == StopLossMode) 
   // {
      // Stop Loss mode selected
      // Implement your logic for Stop Loss mode here
   //    if (OrderModify(OrderTicket(),OrderOpenPrice(),stopLossSell,0,0,Red) == false)
   //    {
   //       Print("ERROR - Unable to modify sell order stop loss - ", GetLastError());
   //    }
   // }
}