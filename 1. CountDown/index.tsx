import "./index.css";
import { useState, useEffect } from "react";
import { countdown__container_style, countdown__number_style } from "./styles";

interface CountDownProps {
  dDay: string;
  countDownEnds: string;
  height?: string;
  bgColor?: string; 
  numberBgColor?: string;
  color?: string;
  borderColor?: string;
}

interface CountDownSetStateProps {
  setDays: React.Dispatch<React.SetStateAction<string>>; 
  setHours: React.Dispatch<React.SetStateAction<string>>;
  setMinutes: React.Dispatch<React.SetStateAction<string>>;
  setSeconds: React.Dispatch<React.SetStateAction<string>>;
}

const mapping_template = [
  "countdown-days",
  "countdown-hours",
  "countdown-minutes",
  "countdown-seconds"
];

const setCountDown = (dDay_str:string,
  {
    setDays, 
    setHours, 
    setMinutes, 
    setSeconds
  }: CountDownSetStateProps) => {
  
    const today:any = new Date();
    const endDate:any = new Date(dDay_str);
    const days = Math.floor((endDate - today) / (1000 * 60 * 60 * 24));
    const hours = Math.floor(Math.abs(endDate - today) / (1000 * 60 * 60) % 24);
    const minutes = Math.floor(Math.abs(endDate.getTime() - today.getTime()) / (1000 * 60) % 60);
    const seconds = Math.floor(Math.abs(endDate.getTime() - today.getTime()) / (1000) % 60); 

    console.log(Math.floor(days), Math.floor(hours), Math.floor(minutes), Math.floor(seconds))
    setDays(days.toLocaleString('en-GB', {minimumIntegerDigits: 2, useGrouping: false}))
    setHours(hours.toLocaleString('en-GB',{minimumIntegerDigits: 2, useGrouping: false})); 
    setMinutes(minutes.toLocaleString('en-GB',{minimumIntegerDigits: 2, useGrouping: false}));
    setSeconds(seconds.toLocaleString('en-GB',{minimumIntegerDigits: 2, useGrouping: false}));
};

const CountDown: React.FC<CountDownProps> = ({
  height,
  dDay, 
  bgColor, 
  numberBgColor, 
  color, 
  borderColor}) => {
  
  // States
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  useEffect(() => {
    // For initial values
    setCountDown(dDay, {setDays, setHours, setMinutes, setSeconds});
    setInterval(() => {
      setCountDown(dDay, {setDays, setHours, setMinutes, setSeconds});
    }, 1000);
  }, []);
  return (
    <div className="countdown__container" style={countdown__container_style(bgColor, color, height)}>
      <div className="countdown__numbers-wrapper" >
          {
            
            mapping_template.map((id,k) => {
              let value = days;
              switch (id) {
                case mapping_template[0]:
                  value = days;
                  break;
                case mapping_template[1]:
                  value = hours;
                  break;
                case mapping_template[2]:
                  value = minutes;
                  break;
                case mapping_template[3]:
                  value = seconds;
                  break;
                default:
                  console.log(`${id} is not a valid parameter`);
              }
              return (<div id={id} key={k} className="countdown__numbers" >
                        <span className="countdown__number" style={countdown__number_style(numberBgColor, borderColor)}>{value.substring(0,1)}</span>
                        <span className="countdown__number" style={countdown__number_style(numberBgColor, borderColor)}>{value.substring(1)}</span>
                      </div>)
            })
          }
      </div>
    </div>
  );
}

export default CountDown;
