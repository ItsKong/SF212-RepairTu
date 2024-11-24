import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert2'

function Home() {
    const navigate = useNavigate();
    const role = localStorage.getItem('role');

    const handleClick = () => {
        if (role === "admin") navigate('/Status');
        else navigate('/Upload');
    }

    return (
        <>

            <div className=" w-full  min-h-screen flex flex-col items-center justify-center  lg:flex-row bg-[#F6F6F6]">

            <div className="w-full flex flex-col items-center justify-center lg:flex-row bg-[##F6F6F6]  ">

<div className="w-full ">
    <div className="text-[#340000] mt-10 flex flex-col justify-center items-center">
        <p className="font-bold text-6xl md:text-[100px] lg:text-[120px] xl:text-[145px] m-10 xl:pl-5">ยินดีต้อนรับ</p>
        <p className="w-[80%] h-4/5 sm:text-xl indent-5 my-5">
        Repair TU! จัดการคำขอซ่อมบำรุงของคุณได้อย่างง่ายดาย เพียงอัปโหลดรูปภาพ ให้รายละเอียดที่จำเป็น และติดตามสถานะการรายงานของคุณ
        เรามุ่งมั่นที่จะให้บริการซ่อมแซมที่รวดเร็ว มีประสิทธิภาพ และโปร่งใส เพื่อรักษาสภาพของสิ่งอำนวยความสะดวกให้อยู่ในสภาพที่ดีเยี่ยมอยู่เสมอ
        </p>
    </div>
    <div className="text-[#340000] m-24 my-10 md:mb-20  ">
        <h1 className="font-bold text-2xl md:text-3xl ">วิธีการใช้งาน</h1>
        <p className='md:text-xl'>1. อัปโหลดรูปภาพ</p>
        <p className='md:text-xl'>2. กรอกข้อมูล</p>
        <p className='md:text-xl'>3. ส่งข้อมูลและตรวจสอบสถานะ</p>
    </div>

</div>

                    <div className="flex flex-col items-center w-full h-96 justify-center ">

                    <div className="flex flex-col items-center w-full h-96 justify-center ">
                            <i className="text-[10rem]  sm:text-[20rem] xl:text-[30rem] text-[#340000] fa-solid fa-screwdriver-wrench mb-5"></i>
                            <Link onClick={handleClick} ><button className="hover:scale-110 duration-500 w-xl h-12 w-[100px] md:w-60 sm:text-xs sm:h-14 font-black m-5 bg-[#E20B0B] text-white rounded-3xl hover:opacity-80 hover:text-orange-300 shadow-lg shadow-black/35 lg:text-2xl">เริ่มต้นใช้งาน</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home