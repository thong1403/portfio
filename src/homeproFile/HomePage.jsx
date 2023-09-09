import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import imgProfile from "../img/3Iki2GeMqojXZtpTDg0C_64215869d7220_cvtpl.jpg";
import sf from "../img/download (7).jpg";
import imgBackgroud from "../img/hinh-nen-cong-nghe-1.jpg";
import img1 from "../img/th (1).jpg";
import img2 from "../img/th (3).jpg";
import img3 from "../img/1538998300flixgothumb.jpg";

export default function HomePage() {
  useEffect(() => {
    // Khởi tạo thư viện AOS
    AOS.init({
      duration: 3000, // Độ dài thời gian của hiệu ứng (milliseconds)
    });
  }, []);
  return (
    <>
      <img src={imgBackgroud} alt="" className="w-100  img-back-groud" />
      <div className="khung-to">
        <div className="khung-profile">
          <img src={imgProfile} alt="" className="img-profile" />
          <h3 className="mt-2">LÊ XUÂN THỐNG</h3>
          <p>FRONT-END REACT DEVELOPER JAVASCRIPT </p>
        </div>
        <div className="container mt-5">
          <div className="row tongthongtin">
            <div className="col-1"></div>
            <div className="col-4 ">
              <h5 class="text-white" data-aos="fade-right">
                THÔNG TIN CÁ NHÂN & LIÊN HỆ
              </h5>
              <div className="text-left mt-5">
                <p className="thongtin" data-aos="fade-right">
                  {" "}
                  <b>PHONE : </b> 0971471796
                </p>
                <p className="thongtin" data-aos="fade-right">
                  <b>EMAIL :</b> thongxuan327@gmail.com
                </p>
                <p className="thongtin" data-aos="fade-right">
                  <b>GIT :</b> https://github.com/thong1403
                </p>
                <p className="thongtin" data-aos="fade-right">
                  <b>ADDRESS :</b> 508 Đường Láng
                </p>
              </div>
            </div>
            <div className="col-4  ">
              <h5 class="text-white" data-aos="fade-left">
                GIỚI THIỆU BẢN THÂN
              </h5>
              <p
                className=" text-left thongtin fs-5 content-thongtin "
                data-aos="fade-left"
              >
                Theo đánh giá của cá nhân tôi và mọi người xung quanh thì tôi là
                một người vui vẻ, hòa đồng, nghiêm túc trong công việc và luôn
                muốn tìm tòi và học hỏi những kiến thức mới.
              </p>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="row"></div>
          </div>
        </div>
        <div className="row tongthongtin">
          <h3 class="text-white mb-5" data-aos="fade-up">
            KINH NGHIỆM LÀM VIỆC
          </h3>

          <div className="col-2"></div>
          {/* <div className="col-3 tong-khung-kinhnghieem" data-aos="fade-up">
            <img src={logoRikkei} alt="" className="w-100 h-50" />
            <div className="text-left container-kinhnghiem">
              <p>
                <b>WORKING TIME </b> : MONTH 9/2022 - 3/2023{" "}
              </p>
              <p>
                <b>POSITION : </b> FRESHER FRONT-END
              </p>
              <p>
                <b>WORKPLACE : </b> D8 RIKKEISOFT
              </p>
            </div>
          </div> */}
          <div className="col-3 tong-khung-kinhnghieem" data-aos="fade-up">
            <img src={sf} alt="" className="w-100 h-50" />
            <div className="text-left container-kinhnghiem">
              <p>
                <b>WORKING TIME </b> : MONTH 3/2023 - 9/2023{" "}
              </p>
              <p>
                <b>POSITION : </b> FRESHER FRONT-END
              </p>
              <p>
                <b>WORKPLACE : </b> SF_LANNING
              </p>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="container">
          <div className="row mt-5">
            <h3 class="text-white mt-5 mb-5" data-aos="fade-up">DỰ ÁN </h3>
            <div className="col-3 content-duan " data-aos="fade-up">
              <img src={img1} alt="" className="w-100 " />
              <h5>Web Học Tập QUIZLET</h5>
              <div className="text-left">
                <p>
                  <b>Thời gian : </b> 1 Tuần
                </p>
                <p>
                  <b>Vai trò : </b> Web FrontEnd
                </p>
                <p>
                  <b>Thành viên : </b>2 Member
                </p>
                <p>
                  <b>Công nghệ : </b>HTML, CSS, BOOTSTRAP, JAVASCRIPT,
                  REACT-HOOK
                </p>
                <p>
                  <b>Công việc : </b>Thiết kế giao diện, full-stack login,
                  register
                </p>
                <p>
                  <b>Link git : </b> <a href="https://github.com/thong1403/quizlet.git">https://github.com/thong1403/quizlet.git</a>
                </p>
              </div>
            </div>
            <div className="col-3  content-duan" data-aos="fade-up">
              <img src={img2} alt="" className="w-100 img2" />
              <h5>WEB RATING</h5>
              <div className="text-left">
                <p>
                  <b>Thời gian : </b> 2 Tuần
                </p>
                <p>
                  <b>Vai trò : </b> Web FrontEnd
                </p>
                <p>
                  <b>Thành viên : </b>5 Member
                </p>
                <p>
                  <b>Công nghệ : </b>HTML, CSS, BOOTSTRAP, JAVASCRIPT, REACT,
                  ANT.DESIGN, SOCKET.IO, GITHUB
                </p>
                <p>
                  <b>Công việc : </b>Thiết kế giao diện, FRONT-END LOGIN,
                  REGISTER, RESET PASS WORD, Box Chat
                </p>
                <p>
                  <b>Link git : </b>{" "}
                  <a href="https://github.com/thong1403/app-rating-thong.git">https://github.com/thong1403/app-rating-thong.git</a>
                  
                </p>
              </div>
            </div>
            <div className="col-3 content-duan" data-aos="fade-up" >
              <img src={img3} alt="" className="w-100 img2" />
              <h5>Web Phim FLIXGO</h5>
              <div className="text-left">
                <p>
                  <b>Thời gian : </b> 1 Tuần
                </p>
                <p>
                  <b>Vai trò : </b> Web FrontEnd
                </p>
                <p>
                  <b>Thành viên : </b>1 Member
                </p>
                <p>
                  <b>Công nghệ : </b>HTML, CSS, BOOTSTRAP, JAVASCRIPT, REACT,
                  ANT DESIGN, GITHUB, MOCK API
                </p>
                <p>
                  <b>Công việc : </b>Thiết kế giao diện , làm tính năng comment
                  và review phim
                </p>
                <p>
                  <b>Link git : </b>{" "}
                 <a href=" https://github.com/thong1403/react-flixGo.git"> https://github.com/thong1403/react-flixGo.git</a>
                </p>
              </div>
            </div>
            <div className="col-3 content-duan" data-aos="fade-up">
              <img src={sf} alt="" className="w-100 img2" />
              <h5>SF - TECH lanning</h5>
              <div className="text-left">
                <p>
                  <b>Thời gian : </b>1 Tháng
                </p>
                <p>
                  <b>Vai trò : </b> Web FrontEnd
                </p>
                <p>
                  <b>Thành viên : </b>1 Member
                </p>
                <p>
                  <b>Công nghệ : </b> HTML, CSS, BOOTSTRAP, JAVASCRIPT, REACT,
                  ANT DESIGN, GITHUB,FIGMA
                </p>
                <p>
                  <b>Công việc : </b>Thiết kế giao diện , làm website cho công
                  cy.
                </p>
                <p>
                  <b>Link mô tả Deploy : </b>{" "}
                  <a href="https://thong1403.github.io/web-sf/">https://thong1403.github.io/web-sf/</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
