import { FunctionComponent } from "react";
import { Button, TextField } from "@mui/material";

const RecurringInvoices: FunctionComponent = () => {
  
  return (
    <div className="relative bg-white w-full h-[1253px] overflow-hidden text-left text-[48px] text-black-200 font-topper-text">
      <b className="absolute top-[230.88px] left-[338.64px] leading-[101.2%]">
        Recurring Invoices
      </b>
      <div className="absolute top-[335px] left-[339px] w-[1050px] flex flex-row items-start justify-start gap-[33px] text-sm text-text">
        <div className="flex-1 rounded-3xs bg-bg flex flex-col py-[33px] px-5 items-center justify-start gap-[42px]">
          <b className="relative uppercase"># recurring invoices</b>
          <b className="relative text-13xl text-black-200">215</b>
        </div>
        <div className="flex-1 rounded-3xs bg-bg flex flex-col py-[33px] px-5 items-center justify-start gap-[42px]">
          <b className="relative uppercase">recurring revenue</b>
          <b className="relative text-black-200 text-13xl">
            <span>€2500</span>
            <span className="text-base">/month</span>
          </b>
        </div>
        <div className="flex-1 rounded-3xs bg-bg flex flex-col py-[33px] px-5 items-center justify-start gap-[42px]">
          <b className="relative uppercase">recurring overdue</b>
          <b className="relative text-13xl text-black-200">22</b>
        </div>
      </div>
      <img
        className="absolute top-[0px] left-[0px] w-[1532.48px] h-[163px] object-cover mix-blend-hard-light"
        alt=""
        src="/rectangle-30@2x.png"
      />
      <Button
        className="absolute top-[229.88px] left-[1127.03px]"
        variant="contained"
        color="primary"
        sx={{
          width: '262px',
          height: '63px',
          background: '#000000',
        }}
      >
        Add recurring invoice +
      </Button>
      <div className="absolute top-[546.17px] left-[341px] flex flex-col items-start justify-start gap-[25px] text-13xl">
        <b className="relative inline-block w-[557.26px]">Per client</b>
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <TextField
            className="[border:none] bg-[transparent]"
            sx={{ width: 274 }}
            color="primary"
            variant="outlined"
            type="text"
            label="Search client"
            placeholder="Placeholder"
            size="medium"
            margin="none"
          />
          <Button variant="contained" color="primary"
          sx={{
            width: '155px',
            height: '53px',
            background: '#000000',
          }}>
            Search
          </Button>
        </div>
        <div className="flex flex-col items-start justify-start gap-[16px] text-sm text-text">
          <div className="relative w-[969.09px] h-[18px]">
            <b className="absolute top-[0px] left-[0px] uppercase">Client</b>
            <b className="absolute top-[0px] left-[327px] uppercase"># send</b>
            <b className="absolute top-[0px] left-[457px] uppercase">
              end date
            </b>
            <b className="absolute top-[0px] left-[650px] uppercase">
              Interval
            </b>
            <b className="absolute top-[0px] left-[780.09px] uppercase">
              amount
            </b>
            <b className="absolute top-[0px] left-[938.09px] uppercase">Edit</b>
          </div>
          <div className="flex flex-col items-end justify-start relative gap-[12px] text-base text-black-200">
            <div className="relative box-border w-[1048.38px] h-px z-[0] border-t-[1px] border-solid border-line-light" />
            <div className="w-[1049px] flex flex-row items-center justify-start gap-[44px] z-[1]">
              <div className="w-[283px] flex flex-row items-center justify-start gap-[15px]">
                <img
                  className="relative rounded-8xs w-[55px] h-[55px] object-cover"
                  alt=""
                  src="/rectangle-23@2x.png"
                />
                <div className="relative font-medium">MadeByMack</div>
              </div>
              <div className="relative font-medium inline-block w-[87.48px] shrink-0">
                25
              </div>
              <div className="relative font-medium inline-block w-[147.62px] shrink-0">
                24-20-2024
              </div>
              <div className="relative font-medium inline-block w-[86.45px] shrink-0">
                3/month
              </div>
              <div className="relative font-medium inline-block w-[114.5px] shrink-0">
                €3000
              </div>
              <Button variant="contained" 
              sx={
                {
                  width: '104px',
                  height: '51px',
                  top: '2px',
                  borderRadius: '5px',
                  border: '1px solid #000000',
                  background: '#eef2ff',
                  color: '#000000',
                }
              }>
                Edit 
              </Button>
            </div>
            <div className="relative box-border w-[1048.38px] h-px z-[2] border-t-[1px] border-solid border-line-light" />
            <div className="w-[1049px] flex flex-row items-center justify-start gap-[44px] z-[3]">
              <div className="w-[283px] flex flex-row items-center justify-start gap-[15px]">
                <img
                  className="relative rounded-8xs w-[55px] h-[55px] object-cover"
                  alt=""
                  src="/rectangle-23@2x.png"
                />
                <div className="relative font-medium">MadeByMack</div>
              </div>
              <div className="relative font-medium inline-block w-[87.48px] shrink-0">
                25
              </div>
              <div className="relative font-medium inline-block w-[147.62px] shrink-0">
                24-20-2024
              </div>
              <div className="relative font-medium inline-block w-[86.45px] shrink-0">
                4/month
              </div>
              <div className="relative font-medium inline-block w-[114.5px] shrink-0">
                €3000
              </div>
              <Button variant="contained" color="primary"
              sx={
                {
                  width: '104px',
                  height: '51px',
                  top: '2px',
                  borderRadius: '5px',
                  border: '1px solid #000000',
                  background: '#eef2ff',
                  color: '#000000',
                }
              }>
                Edit 
              </Button>
            </div>
            <div className="relative box-border w-[1048.38px] h-px z-[2] border-t-[1px] border-solid border-line-light" />
            <div className="w-[1049px] flex flex-row items-center justify-start gap-[44px] z-[3]">
              <div className="w-[283px] flex flex-row items-center justify-start gap-[15px]">
                <img
                  className="relative rounded-8xs w-[55px] h-[55px] object-cover"
                  alt=""
                  src="/rectangle-23@2x.png"
                />
                <div className="relative font-medium">MadeByMack</div>
              </div>
              <div className="relative font-medium inline-block w-[87.48px] shrink-0">
                25
              </div>
              <div className="relative font-medium inline-block w-[147.62px] shrink-0">
                24-20-2024
              </div>
              <div className="relative font-medium inline-block w-[86.45px] shrink-0">
                4/month
              </div>
              <div className="relative font-medium inline-block w-[114.5px] shrink-0">
                €3000
              </div>
              <Button variant="contained" color="primary"
              sx={
                {
                  width: '104px',
                  height: '51px',
                  top: '2px',
                  borderRadius: '5px',
                  border: '1px solid #000000',
                  background: '#eef2ff',
                  color: '#000000',
                }
              }>
                Edit 
              </Button>
            </div>
            <div className="relative box-border w-[1048.38px] h-px z-[2] border-t-[1px] border-solid border-line-light" />
            <div className="w-[1049px] flex flex-row items-center justify-start gap-[44px] z-[3]">
              <div className="w-[283px] flex flex-row items-center justify-start gap-[15px]">
                <img
                  className="relative rounded-8xs w-[55px] h-[55px] object-cover"
                  alt=""
                  src="/rectangle-23@2x.png"
                />
                <div className="relative font-medium">MadeByMack</div>
              </div>
              <div className="relative font-medium inline-block w-[87.48px] shrink-0">
                25
              </div>
              <div className="relative font-medium inline-block w-[147.62px] shrink-0">
                24-20-2024
              </div>
              <div className="relative font-medium inline-block w-[86.45px] shrink-0">
                4/month
              </div>
              <div className="relative font-medium inline-block w-[114.5px] shrink-0">
                €3000
              </div>
              <Button variant="contained" color="primary"
              sx={
                {
                  width: '104px',
                  height: '51px',
                  top: '2px',
                  borderRadius: '5px',
                  border: '1px solid #000000',
                  background: '#eef2ff',
                  color: '#000000',
                }
              }>
                Edit 
              </Button>
            </div>
            <div className="relative box-border w-[1048.38px] h-px z-[8] border-t-[1px] border-solid border-line-light" />
            <div className="w-[1049px] flex flex-row items-center justify-start gap-[44px] z-[9]">
              <div className="w-[283px] flex flex-row items-center justify-start gap-[15px]">
                <img
                  className="relative rounded-8xs w-[55px] h-[55px] object-cover"
                  alt=""
                  src="/rectangle-23@2x.png"
                />
                <div className="relative font-medium">MadeByMack</div>
              </div>
              <div className="relative font-medium inline-block w-[87.48px] shrink-0">
                25
              </div>
              <div className="relative font-medium inline-block w-[147.62px] shrink-0">
                24-20-2024
              </div>
              <div className="relative font-medium inline-block w-[86.45px] shrink-0">
                1/year
              </div>
              <div className="relative font-medium inline-block w-[114.5px] shrink-0">
                €3000
              </div>
              <Button variant="contained" color="primary"
              sx={
                {
                  width: '104px',
                  height: '51px',
                  top: '2px',
                  borderRadius: '5px',
                  border: '1px solid #000000',
                  background: '#eef2ff',
                  color: '#000000',
                }
              }>
                Edit 
              </Button>
            </div>
            <div className="relative box-border w-[1048.38px] h-px z-[10] border-t-[1px] border-solid border-line-light" />
            <div className="w-[1049px] flex flex-row items-center justify-start gap-[44px] z-[11]">
              <div className="w-[283px] flex flex-row items-center justify-start gap-[15px]">
                <img
                  className="relative rounded-8xs w-[55px] h-[55px] object-cover"
                  alt=""
                  src="/rectangle-23@2x.png"
                />
                <div className="relative font-medium">MadeByMack</div>
              </div>
              <div className="relative font-medium inline-block w-[87.48px] shrink-0">
                25
              </div>
              <div className="relative font-medium inline-block w-[147.62px] shrink-0">
                24-20-2024
              </div>
              <div className="relative font-medium inline-block w-[86.45px] shrink-0">
                2/month
              </div>
              <div className="relative font-medium inline-block w-[114.5px] shrink-0">
                €3000
              </div>
              <Button variant="contained" color="primary"
              sx={
                {
                  width: '104px',
                  height: '51px',
                  top: '2px',
                  borderRadius: '5px',
                  border: '1px solid #000000',
                  background: '#eef2ff',
                  color: '#000000',
                }
              }>
                Edit 
              </Button>
            </div>
            {/* <div className="my-0 mx-[!important] absolute top-[154px] left-[889px] rounded-3xs bg-white shadow-[0px_4px_26px_rgba(0,_0,_0,_0.13)] flex flex-col py-[23px] px-6 items-start justify-start gap-[10px] z-[12]">
              <b className="relative">Pause</b>
              <b className="relative">Duplicate</b>
              <b className="relative">Edit</b>
              <b className="relative">Terminate</b>
              <b className="relative">Skip next date</b>
            </div> */}
          </div>
        </div>
      </div>
      {/* <Button
        className="absolute top-[35.39px] left-[1159px]"
        variant="contained"
        color="primary"
      >
        Jort KKKKKKKKKKKK
      </Button> */}
       <div className="absolute w-[303.42px] h-[80.42px] top-[35.39px] left-[1159px] rounded-3xs bg-white shadow-[0px_4px_15px_rgba(0,_0,_0,_0.25)] flex flex-row py-[15px] px-5 items-center justify-center gap-[15px] text-xl">
        <img
          className="relative w-[50.42px] h-[50.42px] top-[15] left-[20.42] object-cover"
          alt=""
          src="/photo.svg"
        />
        <b className="relative w-[198px]  top-[27] left-[85.42] flex flex-row ">Jort kkk</b>
      </div>
      <section className="absolute top-[35.39px] left-[338.64px] rounded-3xs bg-white shadow-[0px_4px_18px_rgba(0,_0,_0,_0.25)] flex flex-row p-[13px] items-center justify-start gap-[23px] text-left text-base text-black-100 font-topper-text">
        <div className="relative">Last 30 days:</div>
        <div className="flex flex-row items-start justify-start gap-[5px] text-[10px] text-bg">
          <div className="rounded-8xs bg-green w-[102px] flex flex-col p-2.5 box-border items-start justify-start">
            <div className="relative uppercase">PAID</div>
            <div className="relative text-base text-white">€24.000</div>
          </div>
          <div className="rounded-8xs bg-grey w-[128px] flex flex-col p-2.5 box-border items-start justify-start">
            <div className="relative uppercase">PENDING</div>
            <div className="relative text-base text-white">€41.000</div>
          </div>
          <div className="rounded-8xs bg-salmon w-[189px] flex flex-col p-2.5 box-border items-start justify-start">
            <div className="relative uppercase">OVERDUE</div>
            <div className="relative text-base text-white">€65.600</div>
          </div>
        </div>
      </section>
      <div className="absolute top-[454.24px] left-[41.51px]" />
      <div className="absolute top-[16.63px] left-[21px] rounded-[15px] bg-white shadow-[0px_4px_60px_rgba(0,_0,_0,_0.1)] h-[895px] flex flex-row p-[30px] box-border items-start justify-start text-base text-darkslateblue">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-col items-center justify-start relative gap-[124px]">
            <div className="flex flex-col items-center justify-start gap-[65px] z-[0]">
              <img
                className="relative w-[104.65px] h-[35px]"
                alt=""
                src="/logo.svg"
              />
               <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="rounded-8xs w-[210px] flex flex-col p-5 box-border items-start justify-start">
                  <div className="flex flex-row items-center justify-start gap-[20px]">
                    <img
                      className="relative w-[17.5px] h-[17.5px]"
                      alt=""
                      src="/homeicons.svg"
                    />
                    <b className="relative">Home</b>
                  </div>
                </div>
                <div className="rounded-8xs w-[210px] flex flex-col p-5 box-border items-start justify-start">
                  <div className="flex flex-row items-center justify-start gap-[20px]">
                    <img
                      className="relative w-[17.5px] h-[17.5px]"
                      alt=""
                      src="/invoices.svg"
                    />
                    <b className="relative">Invoices</b>
                  </div>
                </div>
                <div className="rounded-8xs w-[210px] flex flex-col p-5 box-border items-start justify-start">
                  <div className="flex flex-row items-center justify-start gap-[20px]">
                    <img
                      className="relative w-[17.5px] h-[17.5px]"
                      alt=""
                      src="/customers.svg"
                    />
                    <b className="relative">Customers</b>
                  </div>
                </div>
                <div className="rounded-8xs w-[210px] flex flex-col p-5 box-border items-start justify-start">
                  <div className="flex flex-row items-center justify-start gap-[20px]">
                    <img
                      className="relative w-[17.5px] h-[17.5px]"
                      alt=""
                      src="/products.svg"
                    />
                    <b className="relative">Products</b>
                  </div>
                </div>
                <div className="rounded-8xs bg-accent w-[210px] flex flex-col p-5 box-border items-start justify-start text-black-200">
                  <div className="flex flex-row items-center justify-center gap-[20px]">
                    <img
                      className="relative w-[17.5px] h-[17.5px]"
                      alt=""
                      src="/recurring.svg"
                    />
                    <b className="relative">Recurring</b>
                  </div>
                </div>
                <div className="rounded-8xs w-[210px] flex flex-col p-5 box-border items-start justify-start">
                  <div className="flex flex-row items-center justify-start gap-[20px]">
                    <img
                      className="relative w-[17.5px] h-[17.5px]"
                      alt=""
                      src="/discount.svg"
                    />
                    <b className="relative">Discount</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="z-[1]" />
            <div className="my-0 mx-[!important] absolute top-[3.5px] left-[-14px] rounded-[32px] bg-lines w-7 h-7 flex flex-col p-2.5 box-border items-start justify-start z-[2]">
              <img
                className="absolute my-0 mx-[!important] top-[8.76px] left-[7.61px] w-[14.11px] h-[10.49px] z-[0]"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecurringInvoices;
