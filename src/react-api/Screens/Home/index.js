import React, { Component } from 'react'
import CourseItem from '../../Components/CourseItems'
import Axios from "axios";
import connect from "react-redux";
 class HomeScreen extends Component {
    render() {
        return (
            <div>
                <h1 className="display-4 text-center">Danh Sách Khóa Học</h1>
                <div className="container">
                    <div className="row">
                            <CourseItem />
                        
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        Axios({
            method:"GET",
            url:"https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
        }).then((result)=>{
            console.log(result);
            this.props.dispatch({
                type:'FETCH_COURSE',
                payload:result.data,
            })
        }).catch((error)=>{console.log(error)})
    }
}
const mapStateToProps = (state) =>{
}
export default (mapStateToProps)(HomeScreen)