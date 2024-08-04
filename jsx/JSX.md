# 1.JSX là gì?

    . có thể tạo ra biến và gán JSX cho biến đó
    . linh động , có thể đan xem JS vào giữa
        cách xen JS vào : {tên_biến}, {{}} => ngoặc 1 là để viết cú pháp Javascript trong JSX , ngoặc là là object
    . JSX => Javascript XML
        . đặc trưng thẻ mở , thẻ đóng
        . HTML thuộc JSX

    .Babel:
        . thư viện để chuyển đổi cú pháp (phân tích cú pháp và chuyển đổi JSX => Javascript)

## 1.1.Tại sao khi code thuần dùng map phải join()?

    . Do innerHTML cần nhận 1 chuỗi
    . Do React.createElement() có children nhận 2 giá trị trở lên sẽ thành mảng

## 1.2.Gặp lỗi khi render từ mảng (prop "key")

    . React có cơ chế riêng

## 1.3.Không render được 2 element cùng lúc

    . wrap thêm <React.Fragment></React.Fragment> => <></>
        . sinh ra để wrap
        . ko sinh ra thẻ thật trong DOM

# 2.React element types:

    . chia component (bóc tách thành nhiều phần nhỏ xong góp lại)
    . tách thành các component
    . string
    . function
    . class
        .

# 3.Biểu diễn đơn giản với JSX:
