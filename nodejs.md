# 1.Nodejs (JS runtime)

    . tạo môi trường độc lập để chạy JS

## 1.1. Dùng nodejs ở vai trò FE

    . tạo ra 1 máy chủ web để chạy trên chính máy tính
    . có npm js để quản lý thư viện cho node (thư viện được viết = JS)
    .

# 2. Dùng react

    . để xịn hơn
    . dễ phát triền
    . dễ cài những thư viện cần thiết
    . không bị lặp lại những phần quen thuộc(ví dụ: cài link react, react-dom,babel)

    . create react app => tích hợp sẵn react , react-dom,babel, webpack(...)
                       => webpack(...) => hỗ trợ plugin

# 3.webpack

    . 2 ưu điểm lớn:
        . module hóa => tìm kiếm cấu trúc phù hợp => quản lý file hiệu quả
        . compile lại => tối ưu sản phẩm khi deploy

    . thường đi kèm vs plugin ( ví dụ: mini file, )
    . sẽ compile , kết hợp lại
    . cách dùng :
        . giúp module hóa ứng dụng FE

=> nếu chưa webpack mà deploy thẳng dự án FE lên cho người dùng cuối thì:
. có nhiều file nhỏ
=> request nhiều lên
=> tăng thời gian tải trang, làm người dùng chờ lâu
=> Giảm trải nghiệm người dùng (giảm UX)

# 4.Khác

    . module.export === export default
