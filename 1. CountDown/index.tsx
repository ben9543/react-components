import "./index.css";
import { useState, useEffect } from "react";
import { countdown__container_style, countdown__number_style } from "./styles";

interface CountDownProps {
  dDay: string;
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
  const dDay:any = new Date(dDay_str);
  const nowDay:any = new Date(Date.now());
  const difference = new Date(dDay-nowDay);
  setDays(difference.getDay().toLocaleString('en-GB', {minimumIntegerDigits: 2, useGrouping: false}))
  setHours(difference.getHours().toLocaleString('en-GB',{minimumIntegerDigits: 2, useGrouping: false})); 
  setMinutes(difference.getMonth().toLocaleString('en-GB',{minimumIntegerDigits: 2, useGrouping: false}));
  setSeconds(difference.getSeconds().toLocaleString('en-GB',{minimumIntegerDigits: 2, useGrouping: false}));
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
