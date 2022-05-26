import React, { useEffect, useState } from "react";
import "./index.css";
import * as todo from "../../service/todo";


import { SearchOutlined } from "@ant-design/icons";
import { all } from "../../service/todo";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { bookingCreator } from "../../redux";
import { State } from "../../redux/reducer";


export const DanhSachGoiVe = () => {

    const dispatch = useDispatch();

    const { LoadDuLieu } = bindActionCreators(bookingCreator, dispatch);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        // fetchTodos();
        LoadDuLieu();
    }, []);

    const { listBooking } = useSelector((state: State) => state.booking);

    const [stateListBooking, setStateListBooking] = useState(listBooking);

    const [todos, setTodos] = useState([{
        BookingCode: '',
        NgaySuDung: '',
        TenLoaiVe: '',
        CongCheckIn: '',
        DoiSoat: ''
    }]);

    const chooseOption = (param: {
        type: string
    }) => {

        let data = [];

        switch(param.type) {

            case 'all':
                data = listBooking;
                break;
            
            case 'doisoat':
                data = listBooking.filter((item: any) => item.DoiSoat === "Đã đối soát");
                break;

            case 'chua_doisoat':
                data = listBooking.filter((item: any) => item.DoiSoat === "Chưa đối soát");
                break;
        }

        setTodos(data);
    }

    useEffect(() => {

        setTodos(listBooking);

    }, [listBooking])


    return (

        <div className="LocVe">
            <div className="DoiSoatVe">

                <div className="DoiSoatVe-tk">
                    <h2>Đói soát vé</h2>
                    <div className="DoiSoatVe-Ve">
                        <div className="search">
                            <input type="text" placeholder='Search' />
                            <a href="/"><SearchOutlined /></a>
                        </div>
                        <div className="DoiSoatVe-locVe">
                            <button className="DoiVe" > Chốt đối soát</button>
                        </div>
                    </div>
                    <table className="table-doisoatve">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Số vé</th>
                                <th>Ngày sử dụng</th>
                                <th>Tên loại vé</th>
                                <th>Cổng check-in</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map((todo, index) => (
                                <tr key={index}>
                                    <td className="cangiua">{index + 1}</td>
                                    <td className="cantrai">{todo.BookingCode}</td>
                                    <td className="canphai">{todo.NgaySuDung}</td>
                                    <td className="cantrai">{todo.TenLoaiVe}</td>
                                    <td className="cantrai">{todo.CongCheckIn}</td>
                                    <td className="cantrai CheckVe">{
                                    (() => {
                                        if (todo.DoiSoat ==='Đã đối soát') {

                                            return (

                                                <div style={{color:'red',fontStyle:'italic'}}>
                                                    Đã đối soát
                                                    </div>

                                            )

                                        } else if (todo.DoiSoat ==='Chưa đối soát') {

                                            return (

                                                <div style={{color:'#A5A8B1',fontStyle:'italic'}}>
                                                    Chưa đối soát
                                                    </div>

                                            )

                                        } 

                                    })()
                                    }</td>
                                </tr>
                                    )
                                )
                            }

                        </tbody>

                    </table>
                </div>
            </div>

            <div className="DoiSoatVe-2">
                <h2 className="h2-SoatVe">Lọc vé</h2>
                <div className="TinhTrangDoiSoat">
                    <h4>Tình trạng đối soát</h4>
                    <div className="TinhTrangDoiSoat-item">
                        <div className="item-input"><input type="radio" name="option" value={"Tất cả"} onChange={() => chooseOption({type: 'all'})}/> Tất Cả</div>
                        <div className="item-input"><input type="radio" name="option" value={"Đối soát vé"}  onChange={() => chooseOption({type: 'doisoat'})}/> Đối soát vé</div>
                        <div className="item-input"><input type="radio" name="option" value={"Chưa đối soát"}  onChange={() => chooseOption({type: 'chua_doisoat'})}/> Chưa đối soát</div>
                    </div>
                </div>
                <div className="LoaiVe">
                    <h4>Loại vé</h4>
                    <p>Vé cổng</p>
                </div>
                <div className="NgayBatDau">
                    <h4>Từ ngày</h4>
                    <input type="date" />
                </div>
                <div className="NgayKetThuc">
                    <h4>Đến ngày</h4>
                    <input type="date" />
                </div>


                <div className="btn">
                    <button className="Loc">Lọc</button>
                </div>
            </div>

        </div>


    )
}