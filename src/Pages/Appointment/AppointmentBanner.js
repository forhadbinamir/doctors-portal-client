import React from 'react';
import { DayPicker } from 'react-day-picker';
import bg from '../../assets/images/bg.png'
import chair from '../../assets/images/chair.png'
import 'react-day-picker/dist/style.css';
const AppointmentBanner = ({ date, setDate }) => {
  const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid currentColor;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: #0FCFEC;
    color: red;
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: #0FCFEC;
  }
`;

  return (

    <div style={{ backgroundImage: `url(${bg})` }} className=" bg-no-repeat cover hero min-h-screen my-10">
      <style>{css}</style>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className='basis-1/2'>
          <img src={chair} className="rounded-lg shadow-2xl" />
        </div>
        <div className='basis-1/2 lg:pl-10'>
          <DayPicker modifiersClassNames={{ selected: 'my-selected', today: 'my-today' }}
            mode="single"
            selected={date}
            onSelect={setDate}
          />
        </div>

      </div>
    </div>
  );
};

export default AppointmentBanner;