// JavaScript Document
$('#slide').owlCarousel({
loop:true,	// cho lặp lại hình xuất hiện
	items:1,	// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh 1000ms
	autoplay:true,		// cho phép tự động chạy
autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:true,	// cho xuất hiện bộ nút tới lui 
	dots:true, //nếu false thì sẽ k hiển thị nav và dot
})
