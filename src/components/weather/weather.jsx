import {React, useState, useEffect} from 'react';
import styles from './weather.module.css';


const Weather = () => {

    const getDataHumi = async () => {
        const response = await fetch("https://io.adafruit.com/api/v2/minhhieu181020/feeds/smarthome.humisensor");
        const data = await response.json();
        return data;
      };
    function convertUTCtoLocal(utcDateString) {
        // Parse the UTC date string
        const date = new Date(utcDateString);
      
        // Add the timezone offset (+7 hours)
        // Note: getTimezoneOffset returns the difference in minutes, so you need to adjust it accordingly.
        // Since you want to specifically add 7 hours regardless of the local timezone, we directly add 7 hours.
        date.setHours(date.getHours() + 7);
      
        // Format the date to the desired format: "YYYY-MM-DD HH:MM:SS"
        const formattedDate = date.toISOString().replace('T', ' ').substring(0, 19);
      
        return formattedDate;
    }

    const getDataTemp = async () => {
        const response = await fetch("https://io.adafruit.com/api/v2/minhhieu181020/feeds/smarthome.tempsensor");
        const data = await response.json();
        data.updated_at = convertUTCtoLocal(data.updated_at);
        return data;
      };

      const getDataLight = async () => {
        const response = await fetch("https://io.adafruit.com/api/v2/minhhieu181020/feeds/smarthome.lightsensor");
        const data = await response.json();
        return data;
      };

    const [dataHumi, setDataHumi] = useState(null);
    const [dataTemp, setDataTemp] = useState(null);
    const [dataLight, setDataLight] = useState(null);
    
    

    useEffect(() => {
        const fetchAndSetData = () => {
            Promise.all([getDataHumi(), getDataTemp(), getDataLight()])
                .then(([humiData, tempData, lightData]) => {
                    setDataHumi(humiData);
                    setDataTemp(tempData);
                    setDataLight(lightData);
                })
                .catch(error => {
                    
                });
        };
    
        // Immediately fetch and set data on component mount.
        fetchAndSetData();
    
        // Set up the interval to fetch data every X milliseconds.
        // For example, to refresh data every 5 seconds, set the interval to 5000 milliseconds.
        const intervalId = setInterval(fetchAndSetData, 2000);
    
        // Clean up the interval on component unmount.
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array means this effect runs once on mount and cleanup runs on unmount.
    
    

    // Render the data in the component
    
  return (
    <>
        <div className={styles.container}>
            <div className={styles.nav}>
              <div className={styles.ul}>
                <div className={styles.li1} >
                  <div className={styles.link1}>{dataTemp && dataTemp.updated_at}</div>
                </div>
              </div>
            </div>
          </div>
        <div className={styles.container}>
            <img src ="https://cdn-icons-png.flaticon.com/512/3354/3354557.png" width="350px"></img>
            <div className={styles.nav}>
              <div className={styles.ul}>
                <div className={styles.li} >
                  <div className={styles.link}>Nhiệt độ</div>
                </div>

                <div className={styles.li}>
                  <div className={styles.link}>Độ ẩm</div>
                </div>

                <div className={styles.li}>
                  <div className={styles.link}>Ánh sáng</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.nav}>
              <div className={styles.ul1}>
                <div className={styles.li1} >
                  <div className={styles.link}>{dataTemp && dataTemp.last_value}</div>
                </div>

                <div className={styles.li1}>
                  <div className={styles.link}>{dataHumi && dataHumi.last_value}</div>
                </div>

                <div className={styles.li1}>
                  <div className={styles.link}>{dataLight && dataLight.last_value}</div>
                </div>
              </div>
            </div>
          </div>
  </>
  )
}

export default Weather