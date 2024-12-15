<template>
    <div class="container-fluit bg-dark text-start">
        <div class="footer-middle p-5">
            <div class="row d-flex border-bottom">
                <div class="col-lg-3 col-sm-6">
                    <h6>CÔNG TY TNHH THUONG MAI THE C.I.U</h6>
                    <h6>THE C.I.U TRADING COMPANY LIMITED</h6>
                    <ul class="p-0 my-3">
                        <li>Địa chỉ; 64 Tân Canh, Phường 1, Quận Tân Bình, Thành phố Hồ Chí Minh</li>
                        <li>Mã số thuế: 0317478388</li>
                        <li>Người ĐDPL: Nguyễn Đức Huy</li>
                        <li>Ngày hoạt động: 16/09/2022</li>
                        <li>Giấy phép kinh doanh: 0317478388</li>
                        <li><img src="@/assets/images/logoSaleNoti.png" class="w-50 py-2"></li>
                    </ul>
                </div>   
            <div class="col-lg-3 col-sm-6">
                <h6>Chi nhánh</h6>
                <ul class="p-0 my-3">
                    <li>50 Tô Vĩnh Diện, Phường Linh Chiểu, Thành phố Thủ Đức, Thành phố Hồ Chí Minh
                        <span><p class="mb-2">Hotline: 0333707912</p></span>
                    </li>
                    <li>680 Sư Vạn Hạnh, Phường 10, Quận 10, Thành phố Hồ Chí Minh
                        <span><p class="mb-2">Hotline: 0707358912</p></span>
                    </li>
                    <li>32 Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh
                        <span><p class="mb-2">Hotline: 0901246912</p></span>
                    </li>
                    <li>85 Quang Trung, Phường 10, Quận Gò Vấp, Thành phố Hồ Chí Minh
                        <span><p class="mb-2">Hotline: 0938489912</p></span>
                    </li>
                    <li>104 Trần Quang Diệu, Phường 14, Quận 3, Thành phố Hồ Chí Minh
                        <span><p class="mb-2">Hotline: 0902408912</p></span>
                    </li>
                </ul>
            </div> 
            <div class="col-lg-2 col-sm-6">
                <h6>Thông tin</h6>
                <ul class="p-0">
                    <li><a href=""> About THE C.I.U</a></li>
                    <li><a href=""> Hệ thống chi nhánh</a></li>
                    <li><a href=""> Chính sách bảo hành và đổi sản phẩm</a></li>
                    <li><a href=""> Hỗ trợ dịch vụ</a></li>
                    <li><a href=""> Liên hệ</a></li>
                    <li><a href=""> Chính sách bảo mật</a></li>
                    <li><a href=""> Phương thức thanh toán</a></li>
                    <li><a href=""> Tuyển dụng</a></li>
                    <li><a href=""> Chính sách kiểm hàng</a></li>
                </ul>
            </div> 
            <div class="col-lg-2 col-sm-6">
                <h6>Social media</h6>
                <ul class="p-0">
                    <li><a href=""><span class=" me-4"><i class="fa-brands fa-facebook-f"></i></span>Facebook</a></li>
                    <li><a href=""><span class=" me-4"><i class="fa-brands fa-instagram"></i></span>Instagram</a></li>
                    <li><a href=""><span class=" me-4"><i class="fa-brands fa-tiktok"></i></span>Tiktok</a></li>
                </ul>
            </div> 
            <div class="col-lg-2 col-sm-6">
                <h6>Phương thức thanh toán</h6>
                <ul class="p-0">
                    <li><a href=""><img src="@/assets/images/cod.png" alt="">Thanh toán khi nhận hàng</a></li>
                    <li><a href=""><img src="@/assets/images/momo.png" alt="">Ví MoMo</a></li>
                    <li><a href=""><img src="@/assets/images/momo-atm.png" alt="">Thanh toán bằng thẻ ATM</a></li>
                    <li><a href=""><img src="@/assets/images/vnpay.jpeg" alt="">VNPay</a></li>
                </ul>
            </div> 
                </div>
                </div>
                <div class="footer-bottom">
                    <div class="container d-flex justify-content-center">
                        <img src="@/assets/images/logo-white.png" class="w-25 pt-5">
                    </div>
                    <p class="text-center m-0 pb-5">Copyright © 2019 THE C.I.U Store. All Rights Reserved.</p>
                </div>
            </div>
</template>
<script>
export default {
    name:'BaseFooter',
    props: {
    } 
}
</script>
<style scoped> 
 h6{
    color: #fff;
    text-transform: uppercase;
}
ul li{
    list-style: none;
    color: #666;
    font-size: 14px;
}
 ul li a{
    list-style: none;
    color: #666;
    font-size: 14px;
}
 ul li :hover{
    color: #c96;
}
 ul li img{
    width: 10%;
    padding-right: 5px;
}
.footer-bottom{
    color: #666;
}
p {
    font-size: 14px;
}
</style>