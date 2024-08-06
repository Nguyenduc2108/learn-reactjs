# 1. public

    . có truy cập qua địa chỉ web
    . đóng vai trò là thư mục gốc(root)
    khi mở web server lên => trỏ trực tiếp vào thư mục public => index.html
    . truyền sai path => mặc định ra index

    . file manifest.json => khai báo rõ ràng thông tin về web
    thường được sử dụng trong tình huống PWA

    . robot.txt => hướng dẫn công cụ tìm kiếm khi quét
    => nên tìm địa chỉ web nào hay ko lên tìm

    . src : chứa source code
        . index.js => đgl file en tri boy khi webpack trỏ vào
        => đọc nội dung file
        => render file ban do JS khi web được chạy trên trình duyệt
        . có thể chia nhiều file xong import vào App

    . gitignore: khai báo thư mục , file => git bỏ qua khi đẩy lên git

    . build : thư mục đưa cho khách hàng , triển khai deploy, lên hosting, web chạy production

    . reportWebVitals.js: gửi báo cáo thống kê, tối ưu performance

    . setupTest: để test => viết test để xem component có đúng k
