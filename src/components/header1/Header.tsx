import '../../Css/Menu.css';
import { Menu } from 'antd';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Imglogo from '../../img/aa.png'
import Img from '../../img/th.jpg'

export const Header1 = () => {
    return(
           <div style={{ display: 'flex'}}>
        <div style={{ backgroundImage: `url(${Imglogo})`,marginTop:'10px' ,height: '70px', width: '170px', backgroundSize: '100% 100%', marginLeft: '8px' }} /><div>
          <div style={{ marginTop: '35px', marginLeft: '100px' }} className="input-group flex-nowrap">
           
              <input style={{marginLeft:'50px'}} type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="addon-wrapping" />
              <span className="input-group-text" id="addon-wrapping" >
              
            
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
          </div>
        </div>
        
        <div style={{ marginTop: '30px', marginLeft: '1100px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
          </svg>
          <svg style={{ marginLeft: '20px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
          </svg>
          <div style={{ borderRadius: '25px', backgroundImage: `url(${Img})`, height: '50px', width: '50px', backgroundSize: '100% 100%', marginTop: '-37px', marginLeft: '60px' }}> </div>
        </div>
      </div>
    )
}