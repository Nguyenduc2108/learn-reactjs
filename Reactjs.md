# 1.Ôn lại kiến thức

    . document.createElement()
    . document.body.appendChild()
    . console.dir()
    . innerText, id, className,style

# 2. Cách thêm React vào website

    . Github, NPMJS, UNPKG:
        . Github: nơi lưu trữ mã nguồn mở
        . npm:
            . nơi lưu trữ sản phẩm được xây dựng từ mã nguồn
            . node package manager: quản lý gói cho node (quản lý thư viện JS)
        . UNPKG: lấy thư viện được lưu trữ ở npm dưới dang cdn(url online)
            . production: phần sản phẩm đã chạy (tối ưu, bỏ những phần ko cần trong production)
            . development: phần cho dev (có các log lỗi, thông báo để có thể debug)

# 3.React.createElement(type, props, children,n) => React Element

    . React không bao gồm phần render
    . React Element là thành phần nhỏ nhất khi làm việc với React
    . so sánh với document.createElement()
    . children cũng là 1 props
    . props nhận vào 1 object

# 4.React-DOM

    . tại sao phải dùng React-DOM : để render ra view
    . là 1 cầu nối giữa React và Dom
    . tách ra để tinh gọn
    . render UI

# 5.React Native

    . code iOS, Android
    . Native: ngôn ngữ sinh ra để biên dịch ra mã máy cho điện thoại
    . Cầu nối giữa React và Native
