### Làm việc với JSX:

    . trong JSX thì return có thể viết thành ()
    . Tạo Component qua biến
    . Tạo Component thực hiện nhiều hành động cùng 1 lúc

# 1. Phần 1

## 1.1.Xử lý DOM events

    . DOM event => camelCase

## 1.2.Component do chúng ta định nghĩa phải viết in hoa ký tự đầu:

    . Chọn component trong 1 object

## 1.3.Boolean, Null, Undefined không được render:

## 1.4.Kết hợp toán tử logic để render theo điều kiện:

# 2. Phần 2

## 2.1.Props trong JSX

    . <YoruComponent
        propName1="String literals"
        propName2={expression} => Truyền vào biểu thức
     />
     ==> props mặc định ko truyền giá trị là "true"

    . Props to default "true"
    . Spread / Rest props
    . Children prop
        . <YoruComponent>String literals</YoruComponent>
        . <YoruComponent>{expression}</YoruComponent>

    . Render props:
        . truyền 1 function qua props
            => truyền qua children props( mặc định)

# 3.Transformer : 1 lớp transformer nó sẽ nhận dữ liệu từ API về sau đó nó sẽ xử lý để nó tạo 1 bộ cú pháp quy chuẩn theo 1 quy ước(ví dụ: dùng camelCase)

===> Dùng cho những dự án lớn

# 4. UI Component

    . Là Component nhận dữ liệu và hiển thị
    . đơn giản hóa Component
    . không xử lý nghiệp vụ logic trong UI Component
    . không xử lý performance

# 5.Container Component (Logic Component)

    . Xử lý performance
