import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const NotFound =() =>{
    return(
        <div>
        <Header />
            <div className="container col-md-8 text-center">
                <h1 className="mb-5" style={{fontSize:120}}>404</h1>
                <h2 className="mb-4">Not Found</h2>
                <p className="title mb-5">ขออภัยไม่พบหน้่ที่คุณค้นหา ดูเหมือนว่าหน้าเว็บที่คุณพยายามเข้าถึงไม่มีอยู่อีกต่อไปหรืออาจจะย้ายไปหน้าเพจอื่น</p>
            </div>
        <Footer   company="TH Engineering.,co.ltd"
            email="teerawat.th@outlook.com"/>        

        </div>
    )
}



export default NotFound;