import './Menu.css';
import { HomeOutlined, SettingOutlined, ContainerOutlined, CreditCardOutlined, MailOutlined, BellOutlined } from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';
import Imglogo from '../../img/aa.png'
import Img from '../../img/th.jpg'

export const Header = () => {
    return (
        <div className='body'>
            <div style={{ display: 'flex' }}>
                <div style={{ backgroundImage: `url(${Imglogo})`, marginTop: '10px', height: '70px', width: '170px', backgroundSize: '100% 100%', marginLeft: '8px' }} />
                
                <div>
                    <div style={{ marginTop: '35px', marginLeft: '100px', borderRadius:20 }} className="input-group flex-nowrap">

                        <input style={{ marginLeft: '50px' }} type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="addon-wrapping" />
                        <span className="input-group-text" id="addon-wrapping" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div>
                    <p style={{ marginTop: '30px', marginLeft: '1030px' }}><MailOutlined /></p>
                    <p style={{ marginTop: '-40px', marginLeft: '1000px' }}><BellOutlined /></p>
                    <div style={{ backgroundImage: `url(${Img})`, marginTop: '-50px', height: '40px', borderRadius: 30, width: '40px', backgroundSize: '100% 100%', marginLeft: '1060px' }} />

                </div>
            </div>

            <div>

            </div>

            <div className="wrapper">
                <div className="sidebar" >
                    <div className='sidebar-ul'>
                        <Link className="nav-link" style={{padding:'30px'}} to="/"><HomeOutlined /> Trang chủ</Link>
                        <Link className="nav-link" style={{padding:'30px'}} to="/DanhSachVe"><CreditCardOutlined /> Quản lý vé</Link>
                        <Link className="nav-link" style={{padding:'30px'}} to="/DoiSoatVe"><ContainerOutlined /> Đổi soát vé</Link>
                        <Link className="nav-link" style={{padding:'30px'}} to="/DanhSachGoiVe"><SettingOutlined /> Cài đặt</Link>
                    </div>
                </div>

                <div>
                    <Outlet />

                </div>

            </div>
        </div>

    )
}