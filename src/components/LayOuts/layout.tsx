import { Chart } from './chart';
import { Fooster } from './fooster';
import { Fooster2 } from './fooster2';
import '../../Css/boder.css';
export const LayOut = () => {
    return(
        <div style={{ padding:'25px', borderRadius:20,backgroundColor:'white',height:1200, width: 1300, marginLeft:30}} >
            <h2><b>Thống kê</b></h2>
            <div style={{display:'gird'}}>
                <div><h6><b>Doanh thu</b></h6></div>
                <div style={{ marginLeft:'1100px ',border: '0.5px solid',borderRadius: '5px', marginTop:'-20px'}}>    
                    <a style={{padding:5}}>Tháng 4, 2022 </a>
                    <svg style={{marginLeft:'5px', marginTop:'-3px', color:'orange'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-archive" viewBox="0 0 16 16">
                        <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </div>
            </div>
            <div style={{width:1240, height:300}}><Chart /></div>
                

            <div style={{marginTop:120}}>
                Tổng doanh thu theo tuần<br></br>
                <b style={{fontSize:'30px'}}>525.145.000</b> đồng
                    
                <div style={{marginTop:'50px' ,marginRight:'1100px ',border: '0.5px solid black',borderRadius: '5px'}}>    
                    <a style={{padding:5}}>Tháng 4, 2022 </a>
                    <svg style={{marginLeft:'5px', marginTop:'-3px', color:'orange'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-archive" viewBox="0 0 16 16">
                        <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </div>
            </div>
                <div style={{display:'flex'}}>
                    <div style={{marginLeft:310, marginTop:'-35px'}}>
                        <h3><b>Gói gia đình</b></h3>
                    </div>
                    <div style={{marginLeft:250,  marginTop:'-35px'}}>
                        <h3><b>Gói sự kiện</b></h3>
                    </div>
                </div>
                <div id='fooster' style={{}}>
                    <div id='fooster1' style={{}}> 
                    <Fooster />
                    </div>
                    <div id='fooster2' style={{width:'300px', marginLeft:100}}> 
                    <Fooster2 />
                    </div>
                </div>
                
                <div id='boder2'> 13568</div>
                <div id='boder1'> 56024</div>
                <div id='boder3'>30256</div>
                <div id='boder4'>28302</div>
       </div>
        
    )
    
    }
    
    