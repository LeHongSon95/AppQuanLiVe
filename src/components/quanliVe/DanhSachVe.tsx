import React, { useEffect, useState } from "react";
import "./index.css";

import { SearchOutlined, FilterOutlined } from "@ant-design/icons";

import * as todo from "../../service/todo";
import { all } from "../../service/todo";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { bookingCreator } from "../../redux";
import { State } from "../../redux/reducer";


export const DanhSachVe = () => {
    const dispatch = useDispatch();

    const { LoadDuLieu } = bindActionCreators(bookingCreator, dispatch);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        // fetchTodos();
        LoadDuLieu();
    }, []);

    const { listBooking } = useSelector((state: State) => state.booking);

    const [todos, setTodos] = useState([{
        BookingCode: '',
        NgaySuDung: '',
        NgayXuatVe: '',
        TenSuKien: '',
        SoVe: '',
        CongCheckIn: '',
        TinhTrang: '',
    }]);

    useEffect(() => {
        setTodos(listBooking);
    }, [listBooking])


    return (
        <div className="DanhSach">
            <div className="DanhSach-tk">
                <h2>Danh Sách Vé</h2>
                <div className="DanhSach-Ve">
                    <div className="search">
                        <input type="text" placeholder='Search' />
                        <a href="/"><SearchOutlined /></a>
                    </div>
                    <div className="DanhSach-locVe">
                        <div className="DanhSach-locVe1"><button className="LocVe" ><FilterOutlined /> Lọc Vé</button></div>
                        <div className="DanhSach-locVe1"><button className="XuatFile" > Xuất file(.csv)</button></div>
                    </div>
                </div>

                <table className="table-danhsachve">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Booking code</th>
                            <th>Số vé</th>
                            <th>Tên sự kiện</th>
                            <th>Tình trạng</th>
                            <th>Ngày sử dụng</th>
                            <th>Ngày xuất vé</th>
                            <th>Cổng check-in</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todos, index) => (
                            <tr>
                                <td className="cangiua">{index + 1}</td>
                                <td className="cantrai">{todos.BookingCode}</td>
                                <td className="canphai">{todos.SoVe}</td>
                                <td className="canphai">{todos.TenSuKien}</td>
                                <td className="cantrai">
                                    {(() => {

                                        if (todos.TinhTrang ==='Hết hạn') {

                                            return (

                                                <div style={{border: '0.5px solid #FD5959',backgroundColor:'#FFC0CB', borderRadius:5, color:'red',fontSize:'0.875em',height:30,padding:3}}>
                                                    Hết hạn
                                                    </div>

                                            )

                                        } else if (todos.TinhTrang ==='Chưa sử dụng') {

                                            return (

                                                <div style={{border: '0.5px solid #03AC00',backgroundColor:'#98FB98', borderRadius:5, color:'#03AC00',fontSize:'0.875em',height:30,padding:3}}>
                                                    Chưa sử dụng
                                                    </div>

                                            )

                                        } else if (todos.TinhTrang ==='Đã sử dụng') {

                                            return (

                                                <div style={{border: '0.5px solid #919DBA',backgroundColor:'#EAF1F8', borderRadius:5, color:'#919DBA',fontSize:'0.875em',height:30,padding:3}}>
                                                    Đã sử dụng
                                                    </div>

                                            )

                                        }

                                    })()}


                                </td>
                                <td className="cantrai">{todos.NgaySuDung}</td>
                                <td className="cantrai">{todos.NgayXuatVe}</td>
                                <td className="cantrai">{todos.CongCheckIn}</td>
                            </tr>
                        )
                        )
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}